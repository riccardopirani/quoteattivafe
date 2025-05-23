import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
  fontSize: "0.85rem",
};
const cellStyle = {
  border: "1px solid #ccc",
  padding: "4px",
  textAlign: "left",
  verticalAlign: "middle",
};
const chartData = [
  { month: "Jan-25", costi: 50000, ricavi: 20000 },
  { month: "Feb-25", costi: 60000, ricavi: 50000 },
  { month: "Mar-25", costi: 70000, ricavi: 90000 },
  { month: "Apr-25", costi: 85000, ricavi: 87000 },
  { month: "May-25", costi: 100000, ricavi: 105000 },
  { month: "Jun-25", costi: 120000, ricavi: 130000 },
  { month: "Jul-25", costi: 150000, ricavi: 145000 },
  { month: "Aug-25", costi: 180000, ricavi: 170000 },
  { month: "Sep-25", costi: 200000, ricavi: 190000 },
  { month: "Oct-25", costi: 220000, ricavi: 250000 },
  { month: "Nov-25", costi: 260000, ricavi: 270000 },
  { month: "Dec-25", costi: 280000, ricavi: 320000 },
];
let tabs = [
  "Dati commessa",
  "Gestione contratto",
  "Costi / Ricavi",
  "Approvvigionamenti",
  "C.D.P.",
  "Cruscotto di commessa",
];

const CostiRicavi = () => (
  <div style={{ padding: "1rem", backgroundColor: "white" }}>
    <div style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}>
      Cod. 365 Bunge S.p.a. Via Baiona 237 «Silo»
      <span
        style={{
          float: "right",
          backgroundColor: "#d32f2f",
          color: "white",
          padding: "0.3rem 1rem",
          fontWeight: "bold",
        }}
      >
        CHIUSO
      </span>
    </div>
    <table style={{ ...tableStyle, marginBottom: "1rem" }}>
      <thead>
        <tr>
          {[
            "NODO",
            "SOTTONODO",
            "COSTI",
            "Aggiornata al:",
            "Giacenze",
            "Costi per raffronto",
            "BCWP",
            "Contabilità",
            "Da contabilizzare",
            "Ricavi raffronto",
            "MDC",
            "MDC%",
            "Note",
          ].map((label, idx) => (
            <th
              key={idx}
              style={{
                ...cellStyle,
                backgroundColor: idx >= 3 ? "#eaf4ea" : "#e2f0d9",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[
          {
            nodo: "A",
            coloreNodo: "#cde1bc",
            coloreRiga: "#f3fdf5",
            titolo: "OPERE EDILI",
            sotto: [
              "A00 Demolizione muri",
              "A01 Realizzazione tetto",
              "A02 Posa infissi",
            ],
          },
          {
            nodo: "E",
            coloreNodo: "#f7e7af",
            coloreRiga: "#fef9e6",
            titolo: "IMPIANTI ELETTRICI",
            sotto: [
              "E00 Posa corrugato",
              "E01 Posa interruttori",
              "E02 Posa cavi",
            ],
          },
          {
            nodo: "M",
            coloreNodo: "#a4b8cb",
            coloreRiga: "#e4ebf3",
            titolo: "IMPIANTI MECCANICI",
            sotto: [
              "M00 Posa sanitari",
              "M01 Posa tubazioni",
              "M02 Posa scarichi",
            ],
          },
          {
            nodo: "I",
            coloreNodo: "#eac3e2",
            coloreRiga: "#fce9f8",
            titolo: "COSTI INDIRETTI",
            sotto: [
              "I00 Affitto alloggio",
              "I01 Occupazione suolo pubblico",
              "I02 Costi partecipazione gara",
            ],
          },
          {
            nodo: "R",
            coloreNodo: "#b3b3b3",
            coloreRiga: "#f3f3f3",
            titolo: "RICAVI",
            sotto: [
              "R00 Sal 1 Contratto",
              "R01 Sal 2 Contratto",
              "R02 Sal 1 Preventivo tetto",
            ],
          },
        ].map(({ nodo, coloreNodo, coloreRiga, titolo, sotto }, idx) => (
          <React.Fragment key={idx}>
            <tr>
              <td
                style={{
                  ...cellStyle,
                  backgroundColor: coloreNodo,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {nodo}
              </td>
              <td
                colSpan={12}
                style={{
                  ...cellStyle,
                  backgroundColor: coloreNodo,
                  fontWeight: "bold",
                }}
              >
                {titolo}
              </td>
            </tr>
            {sotto.map((sottoNodo, i) => (
              <tr key={i}>
                <td style={{ ...cellStyle, backgroundColor: coloreRiga }}></td>
                <td style={{ ...cellStyle, backgroundColor: coloreRiga }}>
                  {sottoNodo}
                </td>
                {Array(11)
                  .fill(null)
                  .map((_, k) => (
                    <td
                      key={k}
                      style={{ ...cellStyle, backgroundColor: coloreRiga }}
                    ></td>
                  ))}
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: "1rem",
      }}
    >
      <div>
        <button
          style={{
            padding: "0.5rem 1rem",
            marginRight: "1rem",
            border: "1px solid black",
            background: "white",
            fontWeight: "bold",
          }}
        >
          Archivio costi/ricavi »
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid black",
            background: "#b3dbff",
            fontWeight: "bold",
          }}
        >
          Genera costi/ricavi »
        </button>
      </div>
      <div style={{ textAlign: "right", fontSize: "0.85rem" }}>
        <div
          style={{
            marginBottom: "0.3rem",
            backgroundColor: "#e6f2e6",
            padding: "0.3rem 0.5rem",
          }}
        >
          <strong>Data aggiornamento</strong>:{" "}
          <span style={{ float: "right" }}>10 giu. 2025</span>
        </div>
        <div
          style={{
            marginBottom: "0.3rem",
            backgroundColor: "#e6f2e6",
            padding: "0.3rem 0.5rem",
          }}
        >
          <strong>Margine di commessa</strong>:{" "}
          <span style={{ float: "right" }}>€ 20.000</span>
        </div>
        <div style={{ backgroundColor: "#e6f2e6", padding: "0.3rem 0.5rem" }}>
          <strong>Margine %</strong>:{" "}
          <span style={{ float: "right" }}>20 %</span>
        </div>
      </div>
    </div>
  </div>
);

const DatiCommessa = ({ onComplete }) => {
  const [dataInizio, setDataInizio] = useState(new Date());
  const [dataFine, setDataFine] = useState(new Date());
  const [isComplete, setIsComplete] = useState(false);

  const [datiGenerali, setDatiGenerali] = useState({
    codice: "",
    indirizzo: "",
    tipoLavori: "",
    tipoAppalto: "",
    respUfficio: "",
    respCantiere: "",
  });

  const handleChange = (field) => (e) => {
    if (!e || !e.target) return; // protezione contro eventi nulli o sintetici riutilizzati
    const value = e.target.value ?? "";
    setDatiGenerali((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    const tuttiCompilati = Object.values(datiGenerali).every(
      (val) => val.trim() !== ""
    );
    if (tuttiCompilati && !isComplete) {
      setIsComplete(true);
      if (typeof onComplete === "function") onComplete();
    }
  }, [datiGenerali, isComplete, onComplete]);

  return (
    <>
      {/* HEADER INPUT controllati */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.4rem",
          marginBottom: "1rem",
        }}
      >
        <input
          placeholder="Codice"
          style={{ padding: "0.4rem", border: "1px solid #ccc" }}
        />
        <input
          placeholder="Cliente"
          style={{ padding: "0.4rem", border: "1px solid #ccc" }}
        />
        <input
          placeholder="Indirizzo"
          style={{ padding: "0.4rem", border: "1px solid #ccc" }}
        />
      </div>

      {/* INFORMAZIONE */}
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      >
        Cod. 365 <span style={{ color: "brown" }}>Bunge</span> S.p.a. Via Baiona
        237 «Silo»
      </div>

      {/* DATEPICKER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold", fontSize: "0.85rem" }}>
            Data inizio cantiere
          </div>
          <DatePicker
            selected={dataInizio}
            onChange={(date) => setDataInizio(date)}
            dateFormat="dd MMMM yyyy"
            placeholderText="Seleziona la data di inizio"
            className="date-picker"
          />
        </div>

        <div>
          <div style={{ fontWeight: "bold", fontSize: "0.85rem" }}>
            Data fine cantiere
          </div>
          <DatePicker
            selected={dataFine}
            onChange={(date) => setDataFine(date)}
            dateFormat="dd MMMM yyyy"
            placeholderText="Seleziona la data di fine"
            className="date-picker"
          />
        </div>

        <button
          style={{
            backgroundColor: "#018E42",
            color: "white",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
            fontSize: "0.85rem",
          }}
        >
          APERTO
        </button>
      </div>

      {/* TABELLE */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{ flex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    style={{
                      ...cellStyle,
                      textAlign: "center",
                      backgroundColor: "#ddf0e3",
                    }}
                  >
                    DATI GENERALI
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Codice", key: "codice" },
                  { label: "Indirizzo cantiere", key: "indirizzo" },
                  { label: "Tipo lavori", key: "tipoLavori" },
                  { label: "Tipo appalto", key: "tipoAppalto" },
                  { label: "Resp. Ufficio", key: "respUfficio" },
                  { label: "Resp. Cantiere", key: "respCantiere" },
                ].map(({ label, key }) => (
                  <tr key={key}>
                    <td style={cellStyle}>{label}</td>
                    <td style={cellStyle}>
                      <input
                        type="text"
                        placeholder={`Inserisci ${label.toLowerCase()}`}
                        value={datiGenerali[key] ?? ""}
                        onChange={handleChange(key)}
                        style={{
                          width: "100%",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Documenti (non obbligatori per completamento) */}
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    style={{
                      ...cellStyle,
                      textAlign: "center",
                      backgroundColor: "#ddf0e3",
                    }}
                  >
                    DOCUMENTI
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Link cartella contratto",
                  "Link centro di costo",
                  "Link Gant",
                  "Link cartella condivisione",
                  "Link cartella sicurezza",
                  "Link cartella foto",
                ].map((item) => (
                  <tr key={item}>
                    <td style={cellStyle}>{item}</td>
                    <td style={cellStyle}>
                      <input
                        type="text"
                        placeholder={`Inserisci ${item.toLowerCase()}`}
                        style={{
                          width: "100%",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ANAGRAFICA */}
          <table style={{ ...tableStyle, marginTop: "1rem" }}>
            <thead>
              <tr>
                <th
                  colSpan="6"
                  style={{
                    ...cellStyle,
                    textAlign: "center",
                    backgroundColor: "#ddf0e3",
                  }}
                >
                  ANAGRAFICA
                </th>
              </tr>
            </thead>
            <tbody>
              {["Cliente", "Progettista"].map((ruolo) => (
                <tr key={ruolo}>
                  <td style={cellStyle}>{ruolo}</td>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <td key={idx} style={cellStyle}>
                      <input
                        type="text"
                        placeholder="..."
                        style={{ width: "100%", border: "none" }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MAPPA + IMMAGINE */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <iframe
            title="Mappa Ferrara"
            width="100%"
            height="200"
            src="https://www.openstreetmap.org/export/embed.html?bbox=11.609%2C44.829%2C11.629%2C44.841&layer=mapnik&marker=44.835%2C11.619"
            style={{ border: "1px solid black" }}
          ></iframe>
          <img
            src="https://travelitalia.pl/wp-content/uploads/2021/09/ferrara-italy-29-july-2020-evocative-view-of-the-road-leadin_shutterstock_1786546775-scaled.jpg.webp"
            alt="Street"
            style={{ width: "100%", height: "50%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </>
  );
};

const GestioneContratto = () => (
  <div
    style={{
      padding: "1rem",
      backgroundColor: "white",
      border: "1px solid #ccc",
    }}
  >
    <div style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}>
      Cod. 365 Bunge S.p.a. Via Baiona 237 «Silo»
    </div>
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", marginBottom: "0.5rem" }}>
        <div style={{ flex: 1 }}>Avanzamento commessa</div>
        <div
          style={{
            flex: 5,
            background: "#4caf50",
            color: "white",
            textAlign: "center",
          }}
        >
          Avanzamento produzione: 75,90% €113.850
        </div>
        <div style={{ flex: 2, background: "#c8e6c9" }}>
          Lavori residui: 24,10% €36.150
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "0.5rem" }}>
        <div style={{ flex: 1 }}>Avanzamento SAL</div>
        <div style={{ flex: 5, background: "#a5d6a7", textAlign: "center" }}>
          Avanzamento SAL: 66,66% €100.000
        </div>
        <div style={{ flex: 2, background: "#ef9a9a" }}>
          SAL da fare: 33,34% €50.000
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "0.5rem" }}>
        <div style={{ flex: 1 }}>Avanzamento fatturazione</div>
        <div style={{ flex: 5, background: "#81c784", textAlign: "center" }}>
          Avanzamento fatturazione: 50% €75.000
        </div>
        <div style={{ flex: 2, background: "#e0e0e0" }}>
          Residuo da fatturare: 50% €75.000
        </div>
      </div>
    </div>
    <div style={{ display: "flex", marginBottom: "1rem" }}>
      <div
        style={{
          flex: 1,
          background: "#ffcc80",
          padding: "0.5rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        PRODUZIONE NON FATTURATA €38.850
      </div>
      <div
        style={{
          flex: 1,
          background: "#f44336",
          color: "white",
          padding: "0.5rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        SAL NON FATTURATI €25.000
      </div>
    </div>
    <table style={tableStyle}>
      <thead>
        <tr style={{ backgroundColor: "#ddf0e3" }}>
          <th style={cellStyle}>Lavori</th>
          <th style={cellStyle}>Data</th>
          <th style={cellStyle}>Importo</th>
          <th style={cellStyle}>Produzione totale</th>
          <th style={cellStyle}>Produzione residua</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}>Contratto principale</td>
          <td style={cellStyle}>1 maggio 2025</td>
          <td style={cellStyle}>€100.000</td>
          <td style={cellStyle}>€80.000</td>
          <td style={cellStyle}>€20.000</td>
        </tr>
        <tr>
          <td style={cellStyle}>Preventivo rifacimento tetto</td>
          <td style={cellStyle}>1 giugno 2025</td>
          <td style={cellStyle}>€50.000</td>
          <td style={cellStyle}>€33.850</td>
          <td style={cellStyle}>€16.150</td>
        </tr>
        <tr>
          <td style={cellStyle} colSpan="2">
            TOTALI
          </td>
          <td style={cellStyle}>€150.000</td>
          <td style={cellStyle}>€113.850</td>
          <td style={cellStyle}>€36.150</td>
        </tr>
      </tbody>
    </table>
    <br />
    <table style={tableStyle}>
      <thead>
        <tr style={{ backgroundColor: "#ddf0e3" }}>
          <th style={cellStyle}>Lavori</th>
          <th style={cellStyle}>Importo</th>
          <th style={cellStyle}>Nodo</th>
          <th style={cellStyle}>N°</th>
          <th style={cellStyle}>Data</th>
          <th style={cellStyle}>Importo</th>
          <th style={cellStyle}>N°</th>
          <th style={cellStyle}>Data</th>
          <th style={cellStyle}>Importo</th>
          <th style={cellStyle}>Sal non fatturati</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}>Contratto principale</td>
          <td style={cellStyle}>€100.000</td>
          <td style={cellStyle}>fsf</td>
          <td style={cellStyle}>1</td>
          <td style={cellStyle}>1 maggio 2025</td>
          <td style={cellStyle}>€25.000</td>
          <td style={cellStyle}>1</td>
          <td style={cellStyle}>1 maggio 2025</td>
          <td style={cellStyle}>€30.000</td>
          <td style={cellStyle}>€5.000</td>
        </tr>
        <tr>
          <td style={cellStyle}>Contratto principale</td>
          <td style={cellStyle}>€100.000</td>
          <td style={cellStyle}>tsfs</td>
          <td style={cellStyle}>2</td>
          <td style={cellStyle}>1 giugno 2025</td>
          <td style={cellStyle}>€25.000</td>
          <td style={cellStyle}>2</td>
          <td style={cellStyle}>1 giugno 2025</td>
          <td style={cellStyle}>€40.000</td>
          <td style={cellStyle}>€15.000</td>
        </tr>
        <tr>
          <td style={cellStyle}>Preventivo rifacimento tetto</td>
          <td style={cellStyle}>€50.000</td>
          <td style={cellStyle}>fsfsf</td>
          <td style={cellStyle}>3</td>
          <td style={cellStyle}>1 giugno 2025</td>
          <td style={cellStyle}>€25.000</td>
          <td style={cellStyle}>3</td>
          <td style={cellStyle}>1 giugno 2025</td>
          <td style={cellStyle}>€30.000</td>
          <td style={cellStyle}>€5.000</td>
        </tr>
        <tr>
          <td style={cellStyle} colSpan="2">
            TOTALI
          </td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}>€75.000</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}>€100.000</td>
          <td style={cellStyle}>€25.000</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const CommessaTecnico = () => {
  const tabsOriginali = [
    "Dati commessa",
    "Gestione contratto",
    "Costi / Ricavi",
    "Approvvigionamenti",
    "C.D.P.",
    "Cruscotto di commessa",
  ];

  const [isModalitaNuova, setIsModalitaNuova] = useState(false);
  const [tabsVisibili, setTabsVisibili] = useState(tabsOriginali);
  const [selectedTab, setSelectedTab] = useState("Dati commessa");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("modalita") === "nuova") {
      setIsModalitaNuova(true);
      setTabsVisibili(["Dati commessa"]);
    }
  }, []);

  const handleComplete = () => {
    if (!isModalitaNuova) return;

    // Rimuovi "modalita=nuova" dalla query string
    const url = new URL(window.location.href);
    url.searchParams.delete("modalita");
    window.history.replaceState({}, "", url.pathname);

    // Ripristina tabs completi
    setTabsVisibili(tabsOriginali);
    setIsModalitaNuova(false);
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <div style={{ padding: "1.5rem" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "1rem",
            marginBottom: "1rem",
            color: "#555",
          }}
        >
          Controllo gestione commessa
        </h2>

        <div
          style={{
            display: "table",
            width: "100%",
            tableLayout: "fixed",
            marginBottom: "1rem",
          }}
        >
          {tabsVisibili.map((label) => (
            <div
              key={label}
              onClick={() => setSelectedTab(label)}
              style={{
                cursor: "pointer",
                display: "table-cell",
                textAlign: "center",
                border: "1px solid gray",
                backgroundColor: selectedTab === label ? "#e3f2e8" : "white",
                fontSize: "0.9rem",
                padding: "0.4rem 0",
                fontWeight: selectedTab === label ? "bold" : "normal",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {selectedTab === "Dati commessa" && (
          <DatiCommessa onComplete={handleComplete} />
        )}
        {selectedTab === "Gestione contratto" && <GestioneContratto />}
        {selectedTab === "Costi / Ricavi" && <CostiRicavi />}
        {selectedTab === "Approvvigionamenti" && <Approvvigionamenti />}
        {selectedTab === "C.D.P." && <CDP />}
        {selectedTab === "Cruscotto di commessa" && <CruscottoCommessa />}
      </div>
    </div>
  );
};

const CruscottoCommessa = () => (
  <div style={{ padding: "1rem", backgroundColor: "white" }}>
    <div style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}>
      Cod. 365 Bunge S.p.a. Via Baiona 237 «Silo»
      <span
        style={{
          float: "right",
          backgroundColor: "#fbc02d",
          color: "black",
          padding: "0.3rem 1rem",
          fontWeight: "bold",
        }}
      >
        BLOCCATO
      </span>
    </div>
    <div
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1rem",
        marginBottom: "0.5rem",
      }}
    >
      Costi Ricavi Margine
    </div>
    <div
      style={{
        textAlign: "center",
        fontSize: "0.85rem",
        marginBottom: "0.5rem",
      }}
    >
      <span style={{ backgroundColor: "#e0e0e0", padding: "0.2rem 1rem" }}>
        Data aggiornamento
      </span>
      <span style={{ padding: "0.2rem 1rem" }}>10 giu. 2025</span>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#e2f0d9",
          padding: "0.5rem 1rem",
          fontWeight: "bold",
        }}
      >
        Margine %<span style={{ marginLeft: "1rem" }}>20 %</span>
      </div>
      <div
        style={{
          backgroundColor: "#e2f0d9",
          padding: "0.5rem 1rem",
          fontWeight: "bold",
        }}
      >
        Margine di commessa<span style={{ marginLeft: "1rem" }}>€ 20.000</span>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `${value.toLocaleString()} €`} />
        <Tooltip formatter={(value) => `${value.toLocaleString()} €`} />
        <Legend />
        <Line type="monotone" dataKey="costi" stroke="red" name="Costi" />
        <Line type="monotone" dataKey="ricavi" stroke="green" name="Ricavi" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const CDP = () => (
  <div style={{ padding: "1rem", backgroundColor: "white" }}>
    <div style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}>
      Cod. 365 Bunge S.p.a. Via Baiona 237 «Silo»
      <span
        style={{
          float: "right",
          backgroundColor: "#fbc02d",
          color: "black",
          padding: "0.3rem 1rem",
          fontWeight: "bold",
        }}
      >
        BLOCCATO
      </span>
    </div>
    <table style={{ ...tableStyle }}>
      <thead>
        <tr>
          <th
            colSpan="7"
            style={{
              ...cellStyle,
              backgroundColor: "#d9ead3",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            GESTIONE C.D.P.
          </th>
        </tr>
        <tr>
          {"N°,DESCRIZIONE,FORNITORE,LINK RILIEVO,PERIODO LAVORAZIONI,RESPODNSABILE,LINK CDP"
            .split(",")
            .map((label, idx) => (
              <th
                key={idx}
                style={{
                  ...cellStyle,
                  backgroundColor: "#ecf4ec",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {label}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, i) => (
          <tr key={i}>
            {Array.from({ length: 7 }).map((_, j) => (
              <td key={j} style={{ ...cellStyle, height: "2.2rem" }}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Approvvigionamenti = () => (
  <div style={{ padding: "1rem", backgroundColor: "white" }}>
    <div style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}>
      Cod. 365 Bunge S.p.a. Via Baiona 237 «Silo»
      <span
        style={{
          float: "right",
          backgroundColor: "#fbc02d",
          color: "black",
          padding: "0.3rem 1rem",
          fontWeight: "bold",
        }}
      >
        BLOCCATO
      </span>
    </div>
    <table style={{ ...tableStyle }}>
      <thead>
        <tr>
          <th
            colSpan="7"
            style={{
              ...cellStyle,
              backgroundColor: "#d9ead3",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            GESTIONE APPROVVIGIONAMENTI
          </th>
        </tr>
        <tr>
          {[
            "N°",
            "DESCRIZIONE",
            "FORNITURA",
            "POSA",
            "DATA DEFINIZIONE",
            "LINK CARTELLA",
            "RESPONSABILE",
          ].map((label, idx) => (
            <th
              key={idx}
              style={{
                ...cellStyle,
                backgroundColor: "#ecf4ec",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, i) => (
          <tr key={i}>
            {Array.from({ length: 7 }).map((_, j) => (
              <td key={j} style={{ ...cellStyle, height: "2.2rem" }}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default CommessaTecnico;
