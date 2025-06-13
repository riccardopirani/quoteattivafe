import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/it";
import { BASE_URL } from "../services/api";
import CantiereService from "../services/cantiere";
import RiunioneCoordinamentoService from "../services/RiunioneCoordinamentoService";
moment.locale("it");

const CoordinamentoDrawer = ({
  coordinamentoForm,
  handleDrawerChange,
  salvaRiunione,
  setShowDrawer,
  commesse,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "360px",
        height: "100%",
        backgroundColor: "#f0faf4",
        boxShadow: "-6px 0 16px rgba(0,0,0,0.1)",
        padding: "28px 24px",
        zIndex: 1000,
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h3 style={{ margin: 0 }}>Nuova Riunione</h3>
        <button
          onClick={() => setShowDrawer(false)}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          salvaRiunione();
        }}
        style={{ flex: 1, overflowY: "auto" }}
      >
        {[
          { label: "Responsabile Cantiere", name: "resp" },
          { label: "Opere da Iniziare", name: "opere" },
          { label: "Azienda", name: "azienda" },
        ].map((field) => (
          <div key={field.name} style={{ marginBottom: "14px" }}>
            <label style={{ fontSize: "14px", fontWeight: 600 }}>
              {field.label}
            </label>
            <input
              type="text"
              value={coordinamentoForm[field.name]}
              onChange={(e) => handleDrawerChange(field.name, e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "1px solid #b2dfdb",
                background: "#ffffff",
              }}
            />
          </div>
        ))}

        <div style={{ marginBottom: "14px" }}>
          <label style={{ fontSize: "14px", fontWeight: 600 }}>Cantiere</label>
          <select
            value={coordinamentoForm.cantiere}
            onChange={(e) => handleDrawerChange("cantiere", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "6px",
              borderRadius: "8px",
              border: "1px solid #b2dfdb",
              background: "#ffffff",
            }}
          >
            <option value="">-- Seleziona Cantiere --</option>
            {commesse.map((c) => (
              <option key={c.IdCantiere} value={c.NomeCantiere}>
                {c.NomeCantiere} - {c.RagioneSociale}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ fontSize: "14px", fontWeight: 600 }}>
            Attività Da / A
          </label>
          <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
            <input
              type="date"
              value={coordinamentoForm.attivitaDa}
              onChange={(e) => handleDrawerChange("attivitaDa", e.target.value)}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #b2dfdb",
              }}
            />
            <input
              type="date"
              value={coordinamentoForm.attivitaA}
              onChange={(e) => handleDrawerChange("attivitaA", e.target.value)}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #b2dfdb",
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ fontSize: "14px", fontWeight: 600 }}>
            Data Ingresso
          </label>
          <input
            type="date"
            value={coordinamentoForm.ingressoData}
            onChange={(e) => handleDrawerChange("ingressoData", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "6px",
              borderRadius: "8px",
              border: "1px solid #b2dfdb",
            }}
          />
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ fontSize: "14px", fontWeight: 600 }}>Note</label>
          <textarea
            rows="3"
            value={coordinamentoForm.note}
            onChange={(e) => handleDrawerChange("note", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "6px",
              borderRadius: "8px",
              border: "1px solid #b2dfdb",
              background: "#ffffff",
            }}
          ></textarea>
        </div>

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button
            type="submit"
            style={{
              background: "#4caf50",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Salva Riunione
          </button>
        </div>
      </form>
    </div>
  );
};

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
  const [riunioni, setRiunioni] = useState([]);
  const [showDrawer2, setShowDrawer2] = useState(false);
  const [nuovaRiunione, setNuovaRiunione] = useState({
    ResponsabileCantiere: "",
    Cantiere: "",
    AttivitaDataDa: "",
    AttivitaDataA: "",
    OpereDaIniziare: "",
    IngressoData: "",
    IngressoAzienda: "",
    Note: "",
  });

  const [coordinamentoForm, setCoordinamentoForm] = useState({
    resp: "",
    cantiere: "",
    attivitaDa: "",
    attivitaA: "",
    opere: "",
    ingressoData: "",
    azienda: "",
    note: "",
  });
  const handleDrawerChange = (field, value) => {
    setCoordinamentoForm((prev) => ({ ...prev, [field]: value }));
  };
  useEffect(() => {
    const fetchRiunioni = async () => {
      try {
        const res = await RiunioneCoordinamentoService.leggi();
        setRiunioni(res);
      } catch (err) {
        console.error("Errore caricamento riunioni:", err);
      }
    };

    fetchRiunioni();
  }, []);

  const salvaRiunione = async (e) => {
    try {
      await RiunioneCoordinamentoService.crea({
        ResponsabileCantiere: coordinamentoForm.resp,
        Cantiere: coordinamentoForm.cantiere,
        AttivitaDataDa: coordinamentoForm.attivitaDa,
        AttivitaDataA: coordinamentoForm.attivitaA,
        OpereDaIniziare: coordinamentoForm.opere,
        IngressoData: coordinamentoForm.ingressoData,
        IngressoAzienda: coordinamentoForm.azienda,
        Note: coordinamentoForm.note,
      });

      setShowDrawer(false);
      setCoordinamentoForm({
        resp: "",
        cantiere: "",
        attivitaDa: "",
        attivitaA: "",
        opere: "",
        ingressoData: "",
        azienda: "",
        note: "",
      });

      const updated = await RiunioneCoordinamentoService.leggi();
      setRiunioni(updated);
    } catch (err) {
      console.error("Errore salvataggio riunione:", err);
    }
  };

  const eliminaRiunione = async (idRiunione) => {
    if (!window.confirm("Sei sicuro di voler eliminare questa riunione?"))
      return;

    try {
      await RiunioneCoordinamentoService.elimina(idRiunione);
      const aggiornate = await RiunioneCoordinamentoService.leggi();
      setRiunioni(aggiornate);
    } catch (err) {
      console.error("Errore eliminazione riunione:", err);
    }
  };

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
  const [showAttrezzoModal, setShowAttrezzoModal] = useState(false);
  const [newAttrezzo, setNewAttrezzo] = useState({ name: "" });

  const aggiungiAttrezzo = () => {
    setNewAttrezzo({ name: "" });
    setShowAttrezzoModal(true);
  };

  const salvaAttrezzo = async () => {
    const nome = newAttrezzo.name.trim();
    if (!nome) return;

    const giàEsiste = attrezzi.some(
      (a) => a.name.trim().toLowerCase() === nome.toLowerCase(),
    );
    if (giàEsiste) {
      alert("⚠️ Esiste già un attrezzo con questo nome.");
      return;
    }

    const nuovoId = Date.now();
    setAttrezzi((prev) => [...prev, { id: nuovoId, name: nome }]);
    setShowAttrezzoModal(false);

    const payload = {
      IdCantiere: null,
      IdUtente: null,
      IdRisorsa: nuovoId,
      Tipo: "Attrezzo",
      DataInizio: moment().startOf("isoWeek").format("YYYY-MM-DDT00:00:00"),
      DataFine: moment().startOf("isoWeek").format("YYYY-MM-DDT00:00:00"),
      Descrizione: nome,
      IdUtenteSend: parseInt(localStorage.getItem("userId") || "0"),
    };

    try {
      await CantiereService.inserisciattivita(payload);
      console.log("✔️ Attrezzo inserito come attività");
    } catch (error) {
      console.error("❌ Errore durante l'inserimento attrezzo:", error);
    }
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
        const attrezziUnici = [];
        const attrezziAggiunti = new Set();

        dati.forEach((att) => {
          if (
            att.Tipo === "Attrezzo" &&
            att.Descrizione &&
            !attrezziAggiunti.has(att.Descrizione)
          ) {
            attrezziAggiunti.add(att.Descrizione);
            attrezziUnici.push({
              id: att.IdRisorsa,
              name: att.Descrizione,
            });
          }
        });
        setAttrezzi(attrezziUnici);

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
          <div style={{ padding: 20 }}>
            <h2>Riunioni di Coordinamento</h2>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
                backgroundColor: "#f7f7f7",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#d6d6d6" }}>
                  <th style={cellStyle}>Resp. Cantiere</th>
                  <th style={cellStyle}>Cantiere</th>
                  <th style={cellStyle}>
                    Attività settimana
                    <br />
                    <span style={{ fontWeight: "normal" }}>Da</span>
                  </th>
                  <th style={cellStyle}>
                    <br />
                    <span style={{ fontWeight: "normal" }}>A</span>
                  </th>
                  <th style={cellStyle}>Opere da iniziare</th>
                  <th style={cellStyle}>
                    Ingressi azienda
                    <br />
                    <span style={{ fontWeight: "normal" }}>Data</span>
                  </th>
                  <th style={cellStyle}>
                    <br />
                    <span style={{ fontWeight: "normal" }}>Azienda</span>
                  </th>
                  <th style={cellStyle}>Note</th>
                </tr>
              </thead>
              <tbody>
                {riunioni.map((r, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: i % 2 === 0 ? "#ffffff" : "#f1f1f1",
                    }}
                  >
                    <td style={cellStyle}>{r.ResponsabileCantiere}</td>
                    <td style={cellStyle}>{r.Cantiere}</td>
                    <td style={cellStyle}>
                      {moment(r.AttivitaDataDa).format("DD/MM/YYYY")}
                    </td>
                    <td style={cellStyle}>
                      {moment(r.AttivitaDataA).format("DD/MM/YYYY")}
                    </td>
                    <td style={cellStyle}>{r.OpereDaIniziare}</td>
                    <td style={cellStyle}>
                      {moment(r.IngressoData).format("DD/MM/YYYY")}
                    </td>
                    <td style={cellStyle}>{r.IngressoAzienda}</td>
                    <td style={cellStyle}>{r.Note || "…"}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ textAlign: "right", marginTop: 20 }}>
              <button
                onClick={() => setShowDrawer(true)}
                style={{
                  background: "#4caf50",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ➕ Aggiungi Riunione
              </button>
            </div>

            {showDrawer && (
              <CoordinamentoDrawer
                coordinamentoForm={coordinamentoForm}
                handleDrawerChange={handleDrawerChange}
                salvaRiunione={salvaRiunione}
                setShowDrawer={setShowDrawer}
                commesse={commesse}
              />
            )}
          </div>
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
      {showAttrezzoModal && (
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
            <h3 style={{ marginBottom: "16px" }}>Nuovo Attrezzo</h3>
            <div style={{ marginBottom: "12px" }}>
              <label>Nome</label>
              <input
                type="text"
                value={newAttrezzo.name}
                onChange={(e) => setNewAttrezzo({ name: e.target.value })}
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
                onClick={() => setShowAttrezzoModal(false)}
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
                onClick={salvaAttrezzo}
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
