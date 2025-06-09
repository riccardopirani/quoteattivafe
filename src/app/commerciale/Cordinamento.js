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
  const [sezioneAttiva, setSezioneAttiva] = useState("organizzazione");
  const [showDrawer, setShowDrawer] = useState(false);
  const [mezzi, setMezzi] = useState([
    { id: 1, name: "Daily 1" },
    { id: 2, name: "Kangoo 1" },
  ]);
  const [attrezzi, setAttrezzi] = useState([
    { id: 1, name: "TRAPANO HILTY TE500" },
    { id: 2, name: "MARTELLO MAKITA" },
  ]);
  const [commesse, setCommesse] = useState([]);
  const [assegnazioni, setAssegnazioni] = useState({});

  useEffect(() => {
    const startOfWeek = moment().startOf("isoWeek");
    const days = Array.from({ length: 7 }, (_, i) =>
      startOfWeek.clone().add(i, "days").format("ddd D MMMM")
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

    fetchUtenti();
    fetchCommesse();
  }, []);

  const handleCommessaChange = (userId, dayIndex, value) => {
    setAssegnazioni((prev) => ({
      ...prev,
      [`${userId}-${dayIndex}`]: value,
    }));
  };

  const renderCommessaDropdown = (userId, dayIndex) => (
    <select
      style={dropdownStyle}
      value={assegnazioni[`${userId}-${dayIndex}`] || ""}
      onChange={(e) => handleCommessaChange(userId, dayIndex, e.target.value)}
    >
      <option value="">-- Seleziona --</option>
      {commesse.map((c) => (
        <option key={c.IdCantiere} value={c.IdCantiere}>
          {c.NomeCantiere} - {c.RagioneSociale}
        </option>
      ))}
    </select>
  );

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
        <>
          {" "}
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
                        {renderCommessaDropdown(user.IdUtente, j)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 40 }}>
            <div style={sectionTitleStyle}>ORGANIZZAZIONE MEZZI</div>
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
                {mezzi.map((row, idx) => (
                  <tr key={row.id}>
                    <td style={cellStyle}>{row.name}</td>
                    {weekDays.map((_, i) => (
                      <td key={i} style={i >= 5 ? redCellStyle : cellStyle}>
                        Operatore {idx + 1}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* ATTREZZI */}
          <div style={{ marginTop: 40 }}>
            <div style={sectionTitleStyle}>ORGANIZZAZIONE ATTREZZI</div>
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
                {attrezzi.map((row, idx) => (
                  <tr key={row.id}>
                    <td style={cellStyle}>{row.name}</td>
                    {weekDays.map((_, i) => (
                      <td key={i} style={i >= 5 ? redCellStyle : cellStyle}>
                        Operatore {idx + 1}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
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
    </div>
  );
};

export default Cordinamento;
