import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/it";
import { BASE_URL } from "../services/api";
import CantiereService from "../services/cantiere";
moment.locale("it");

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "center",
  maxWidth: "140px",
};

const redCellStyle = {
  ...cellStyle,
  backgroundColor: "red",
};

const sectionTitleStyle = {
  backgroundColor: "#e6f2e6",
  padding: "6px 8px",
  fontWeight: "bold",
  borderBottom: "1px solid #ccc",
};

const dropdownStyle = {
  width: "100%",
  maxWidth: "130px",
  padding: "6px",
  backgroundColor: "#f0fff0",
  borderRadius: "4px",
  border: "1px solid #a0d6a0",
};

const Cordinamento = () => {
  const [weekDays, setWeekDays] = useState([]);
  const [utenti, setUtenti] = useState([]);
  const [ListaAttivita, setListaAttivita] = useState([]);
  const [sezioneAttiva, setSezioneAttiva] = useState("organizzazione");
  const [showDrawer, setShowDrawer] = useState(false);
  const [mezzi, setMezzi] = useState([]);
  const [attrezzi, setAttrezzi] = useState([]);
  const [commesse, setCommesse] = useState([]);
  const [assegnazioni, setAssegnazioni] = useState({});

  const [showMezzoModal, setShowMezzoModal] = useState(false);
  const [newMezzo, setNewMezzo] = useState({ name: "" });

  const aggiungiMezzo = () => {
    setNewMezzo({ name: "", descrizione: "" });
    setShowMezzoModal(true);
  };

  const salvaMezzo = async () => {
    const nome = newMezzo.name.trim();
    if (!nome) return;

    // Evita duplicati
    const giàEsiste = mezzi.some(
      (m) => m.name.trim().toLowerCase() === nome.toLowerCase(),
    );
    if (giàEsiste) {
      alert("⚠️ Esiste già un mezzo con questo nome.");
      return;
    }

    // Salva localmente
    const nuovoId = Date.now();
    setMezzi((prev) => [...prev, { id: nuovoId, name: nome }]);
    setShowMezzoModal(false);

    // Costruisci payload per inserisciattivita
    const payload = {
      IdCantiere: null, // Nessuna commessa ancora
      IdUtente: null,
      IdRisorsa: nuovoId,
      Tipo: "Mezzo",
      DataInizio: moment().startOf("isoWeek").format("YYYY-MM-DDT00:00:00"),
      DataFine: moment().startOf("isoWeek").format("YYYY-MM-DDT00:00:00"),
      Descrizione: nome,
      IdUtenteSend: parseInt(localStorage.getItem("userId") || "0"),
    };

    try {
      await CantiereService.inserisciattivita(payload);
      console.log("✔️ Mezzo inserito come attività");
    } catch (error) {
      console.error("❌ Errore durante l'inserimento attività:", error);
    }
  };

  const aggiungiAttrezzo = () => {
    const nome = prompt("Inserisci il nome del nuovo attrezzo:");
    if (!nome) return;

    const nomeNormalizzato = nome.trim().toLowerCase();

    const giàEsiste = attrezzi.some(
      (a) => a.name.trim().toLowerCase() === nomeNormalizzato,
    );

    if (giàEsiste) {
      alert("⚠️ Esiste già un attrezzo con questo nome.");
      return;
    }

    setAttrezzi((prev) => [...prev, { id: Date.now(), name: nome.trim() }]);
  };

  useEffect(() => {
    const startOfWeek = moment().startOf("isoWeek");
    const days = Array.from({ length: 7 }, (_, i) =>
      startOfWeek.clone().add(i, "days").format("ddd D MMMM"),
    );
    setWeekDays(days);
  }, []);

  useEffect(() => {
    const fetchUtenti = async () => {
      try {
        const res = await fetch(BASE_URL + `/RisorseUmane/CaricaRisorse`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
        const data = await res.json();
        setUtenti(data);
      } catch (error) {
        console.error("Errore nel caricamento utenti:", error);
      }
    };

    const fetchCommesse = async () => {
      try {
        const dati = await CantiereService.ricercaCantieri({});
        setCommesse(dati);
      } catch (error) {
        console.error("Errore nel caricamento commesse:", error);
      }
    };
    const fetchAttivita = async () => {
      try {
        const dati = await CantiereService.caricattivita({});
        setListaAttivita(dati);
        const assegnazioniIniziali = {};

        dati.forEach((att) => {
          const giornoIndex = moment(att.DataInizio).diff(
            moment().startOf("isoWeek"),
            "days",
          );
          if (giornoIndex >= 0 && giornoIndex <= 6) {
            if (att.Tipo === "Risorsa") {
              const key = `risorsa-${att.IdUtente}-${giornoIndex}`;
              assegnazioniIniziali[key] = att.IdCantiere;
            } else if (att.Tipo === "Mezzo") {
              const key = `mezzo-${att.IdRisorsa}-${giornoIndex}`;
              assegnazioniIniziali[key] = att.IdCantiere;
            } else if (att.Tipo === "Attrezzo") {
              const key = `attrezzo-${att.IdRisorsa}-${giornoIndex}`;
              assegnazioniIniziali[key] = att.IdCantiere;
            }
          }
        });

        const mezziUnici = [];
        const descrizioniAggiunte = new Set();

        dati.forEach((att) => {
          if (
            att.Tipo === "Mezzo" &&
            att.Descrizione &&
            !descrizioniAggiunte.has(att.Descrizione)
          ) {
            descrizioniAggiunte.add(att.Descrizione);
            mezziUnici.push({
              id: att.IdRisorsa,
              name: att.Descrizione,
            });
          }
        });
        setMezzi(mezziUnici);

        setAssegnazioni(assegnazioniIniziali);
      } catch (error) {
        console.error("Errore nel caricamento attività:", error);
      }
    };

    fetchAttivita();
    fetchUtenti();
    fetchCommesse();
  }, []);

  const handleCommessaChange = async (tipo, id, dayIndex, value) => {
    const key = `${tipo}-${id}-${dayIndex}`;

    setAssegnazioni((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (!value) return;

    const selectedDate = moment().startOf("isoWeek").add(dayIndex, "days");

    let descrizione = "risorsa";

    if (tipo === "mezzo") {
      const mezzo = mezzi.find(
        (m) => `${m.id}` === `${id}` || `${m.name}` === `${id}`,
      );
      descrizione = mezzo?.name || "mezzo";
    } else if (tipo === "attrezzo") {
      const attrezzo = attrezzi.find((a) => `${a.id}` === `${id}`);
      descrizione = attrezzo?.name || "attrezzo";
    }

    const payload = {
      IdCantiere: parseInt(value),
      IdUtente: tipo === "risorsa" ? id : null,
      IdRisorsa: tipo !== "risorsa" ? id : null,
      Tipo:
        tipo === "risorsa"
          ? "Risorsa"
          : tipo === "mezzo"
            ? "Mezzo"
            : "Attrezzo",
      DataInizio: selectedDate.format("YYYY-MM-DDT00:00:00"),
      DataFine: selectedDate.format("YYYY-MM-DDT00:00:00"),
      Descrizione: descrizione,
      IdUtenteSend: parseInt(localStorage.getItem("userId") || "0"),
    };

    try {
      await CantiereService.inserisciattivita(payload);
      window.location.reload();
    } catch (error) {
      console.error("❌ Errore nel salvataggio attività:", error);
    }
  };

  const renderCommessaDropdown = (tipo, id, dayIndex) => {
    const key = `${tipo}-${id}-${dayIndex}`;

    return (
      <select
        style={dropdownStyle}
        value={assegnazioni[key] || ""}
        onChange={(e) =>
          handleCommessaChange(tipo, id, dayIndex, e.target.value)
        }
      >
        <option value="">-- Seleziona --</option>
        {commesse.map((c) => (
          <option key={c.IdCantiere} value={c.IdCantiere}>
            {c.NomeCantiere} - {c.RagioneSociale}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <button
          style={{
            marginRight: 10,
            padding: "6px 12px",
            backgroundColor:
              sezioneAttiva === "organizzazione" ? "#ccc" : undefined,
          }}
          onClick={() => setSezioneAttiva("organizzazione")}
        >
          Organizzazione operai
        </button>
        <button
          style={{
            padding: "6px 12px",
            backgroundColor: sezioneAttiva === "riunione" ? "#ccc" : undefined,
          }}
          onClick={() => setSezioneAttiva("riunione")}
        >
          Riunione di coordinamento
        </button>
      </div>

      {sezioneAttiva === "organizzazione" && (
        <div style={{ marginTop: 20 }}>
          <div style={sectionTitleStyle}>ORGANIZZAZIONE MAESTRANZE</div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={cellStyle}>Operatore</th>
                {weekDays.map((day, idx) => (
                  <th key={idx} style={cellStyle}>
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {utenti.map((user) => (
                <tr key={user.IdUtente}>
                  <td style={cellStyle}>
                    {user.Nome} {user.Cognome}
                  </td>
                  {weekDays.map((_, j) => (
                    <td key={j} style={j >= 5 ? redCellStyle : cellStyle}>
                      {renderCommessaDropdown("risorsa", user.IdUtente, j)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 40 }}>
            <div style={sectionTitleStyle}>ORGANIZZAZIONE MEZZI</div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 8,
              }}
            >
              <button onClick={aggiungiMezzo}>➕ Aggiungi Mezzo</button>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={cellStyle}>Mezzo</th>
                  {weekDays.map((day, idx) => (
                    <th key={idx} style={cellStyle}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mezzi.map((mezzo) => (
                  <tr key={mezzo.name}>
                    <td style={cellStyle}>{mezzo.name}</td>
                    {weekDays.map((_, dayIndex) => {
                      const att = ListaAttivita.find(
                        (a) =>
                          a.Tipo === "Mezzo" &&
                          a.Descrizione === mezzo.name &&
                          moment(a.DataInizio).isSame(
                            moment().startOf("isoWeek").add(dayIndex, "days"),
                            "day",
                          ),
                      );

                      return (
                        <td
                          key={dayIndex}
                          style={dayIndex >= 5 ? redCellStyle : cellStyle}
                        >
                          {att
                            ? renderCommessaDropdown(
                                "mezzo",
                                mezzo.id,
                                dayIndex,
                              )
                            : renderCommessaDropdown(
                                "mezzo",
                                mezzo.name,
                                dayIndex,
                              )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 40 }}>
            <div style={sectionTitleStyle}>ORGANIZZAZIONE ATTREZZI</div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 8,
              }}
            >
              <button onClick={aggiungiAttrezzo}>
                ➕ Aggiungi Attrezzatura
              </button>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={cellStyle}>Attrezzo</th>
                  {weekDays.map((day, idx) => (
                    <th key={idx} style={cellStyle}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attrezzi.map((attrezzo) => (
                  <tr key={attrezzo.id}>
                    <td style={cellStyle}>{attrezzo.name}</td>
                    {weekDays.map((_, i) => (
                      <td key={i} style={i >= 5 ? redCellStyle : cellStyle}>
                        {renderCommessaDropdown("attrezzo", attrezzo.id, i)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {sezioneAttiva === "riunione" && (
        <div style={{ marginTop: 20, position: "relative" }}>
          <div style={sectionTitleStyle}>RIUNIONE DI COORDINAMENTO</div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th rowSpan="2" style={cellStyle}>
                  Resp. Cantiere
                </th>
                <th rowSpan="2" style={cellStyle}>
                  Cantiere
                </th>
                <th colSpan="2" style={cellStyle}>
                  Attività settimana
                </th>
                <th rowSpan="2" style={cellStyle}>
                  Opere da iniziare
                </th>
                <th colSpan="2" style={cellStyle}>
                  Ingressi aziende
                </th>
                <th rowSpan="2" style={cellStyle}>
                  Note
                </th>
              </tr>
              <tr>
                <th style={cellStyle}>Da</th>
                <th style={cellStyle}>A</th>
                <th style={cellStyle}>Data</th>
                <th style={cellStyle}>Azienda</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(4)].map((_, i) => (
                <tr key={i}>
                  {[...Array(8)].map((_, j) => (
                    <td key={j} style={cellStyle}>
                      {j === 7 ? "..." : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: 10, textAlign: "right", paddingRight: 10 }}>
            <button
              onClick={() => setShowDrawer(true)}
              style={{
                background: "none",
                border: "none",
                fontSize: "26px",
                cursor: "pointer",
                color: "#4caf50", // verde elegante
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.2)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              aria-label="Aggiungi riga"
            >
              ⋯
            </button>
          </div>

          {/* Drawer */}
          {showDrawer && (
            <div
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "340px",
                height: "100%",
                backgroundColor: "#e6f5ea", // verde soft
                boxShadow: "-4px 0 16px rgba(0,0,0,0.1)",
                padding: "24px",
                zIndex: 1000,
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                transition: "transform 0.3s ease",
              }}
            >
              <h3>Nuova riga coordinamento</h3>
              <form>
                <div style={{ marginBottom: 10 }}>
                  <label>Resp. Cantiere</label>
                  <br />
                  <input type="text" style={{ width: "100%" }} />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label>Cantiere</label>
                  <br />
                  <input type="text" style={{ width: "100%" }} />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label>Attività Da / A</label>
                  <br />
                  <input
                    type="date"
                    style={{ width: "48%", marginRight: "4%" }}
                  />
                  <input type="date" style={{ width: "48%" }} />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label>Opere da iniziare</label>
                  <br />
                  <input type="text" style={{ width: "100%" }} />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label>Data ingresso</label>
                  <br />
                  <input type="date" style={{ width: "100%" }} />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label>Azienda</label>
                  <br />
                  <input type="text" style={{ width: "100%" }} />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label>Note</label>
                  <br />
                  <textarea rows="3" style={{ width: "100%" }}></textarea>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button type="submit">Salva</button>

                  <button
                    onClick={() => setShowDrawer(false)}
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      border: "none",
                      background: "transparent",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                    aria-label="Chiudi drawer"
                  >
                    ✕
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
      {showMezzoModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              width: "320px",
            }}
          >
            <h3 style={{ marginBottom: "16px" }}>Nuovo Mezzo</h3>
            <div style={{ marginBottom: "12px" }}>
              <label>Nome</label>
              <input
                type="text"
                value={newMezzo.name}
                onChange={(e) => setNewMezzo({ name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowMezzoModal(false)}
                style={{
                  marginRight: "8px",
                  background: "#eee",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Annulla
              </button>
              <button
                onClick={salvaMezzo}
                style={{
                  background: "#4caf50",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Salva
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cordinamento;
