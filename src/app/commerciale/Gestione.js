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
import CantiereService from "../services/cantiere";
import ApprovvigionamentoService from "../services/approvigionamenti";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { useRef } from "react";
import CDPService from "../services/cdp"; // Assicurati che il file esista con metodi: crea, leggi, aggiorna, elimina

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

const CostiRicavi = ({ commessa }) => {
  const [sezioni, setSezioni] = useState([
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
      sotto: ["E00 Posa corrugato", "E01 Posa interruttori", "E02 Posa cavi"],
    },
    {
      nodo: "M",
      coloreNodo: "#a4b8cb",
      coloreRiga: "#e4ebf3",
      titolo: "IMPIANTI MECCANICI",
      sotto: ["M00 Posa sanitari", "M01 Posa tubazioni", "M02 Posa scarichi"],
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
      coloreNodo: "#d0d0d0",
      coloreRiga: "#f3f3f3",
      titolo: "RICAVI",
      sotto: [
        "R00 Sal 1 Contratto",
        "R01 Sal 2 Contratto",
        "R03 Sal 1 Preventivo tetto",
      ],
    },
  ]);

  const aggiungiRiga = (index) => {
    const nuovo = [...sezioni];
    nuovo[index].sotto.push("");
    setSezioni(nuovo);
  };

  const handleExportExcel = async () => {
    const headers = [
      "NODO",
      "SOTTONODO",
      "COSTI",
      "Aggiornata al",
      "Giacenze",
      "Costi per raffronto",
      "BCWP",
      "Contabilità",
      "Da contabilizzare",
      "Ricavi raffronto",
      "MDC",
      "MDC%",
      "Note",
    ];

    const rows = [];
    sezioni.forEach((sezione) => {
      rows.push([sezione.nodo, sezione.titolo]);
      sezione.sotto.forEach((sotto) => {
        rows.push([null, sotto, "", "", "", "", "", "", "", "", "", "", ""]);
      });
    });
    rows.push([]);
    rows.push([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Margine di commessa",
      "€ 20.000",
    ]);
    rows.push(["", "", "", "", "", "", "", "", "", "Margine %", "20 %"]);

    const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "CostiRicavi");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      "CostiRicavi.xlsx"
    );

    // 🔹 2. Screenshot della sezione visibile
    if (contentRef.current) {
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
      });
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, "CostiRicavi_Screenshot.png");
        }
      });
    }
  };
  const contentRef = useRef();
  return (
    <div
      ref={contentRef}
      style={{
        padding: "1rem",
        backgroundColor: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          fontSize: "1rem",
          alignItems: "center",
        }}
      >
        Cod. {commessa?.IdCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
        {commessa?.Indirizzo || ""}
        <span
          style={{
            float: "right",
            backgroundColor: (() => {
              const stato = commessa?.StatoCantiere?.toLowerCase() || "";
              if (stato.includes("chiuso")) return "#d32f2f"; // rosso
              if (stato.includes("incorso")) return "#388e3c"; // verde
              return "#fbc02d"; // giallo
            })(),
            color: "white",
            padding: "0.3rem 1rem",
            fontWeight: "bold",
            borderRadius: 4,
          }}
        >
          {(() => {
            const stato = commessa?.StatoCantiere?.toLowerCase() || "";
            if (stato.includes("chiuso")) return "CHIUSO";
            if (stato.includes("incorso")) return "APERTO";
            return "BLOCCATO";
          })()}
        </span>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.85rem",
        }}
      >
        <thead>
          <tr>
            {[
              "NODO",
              "SOTTONODO",
              "COSTI",
              "", // Spazio bianco
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
            ].map((label, i) => (
              <th
                key={i}
                style={{
                  ...cella,
                  backgroundColor:
                    i >= 4 ? "#eaf4ea" : i === 3 ? "white" : "#e2f0d9",
                  border: i === 3 ? "none" : "1px solid #ccc",
                  minWidth: i === 3 ? "10px" : undefined,
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
          {sezioni.map((sezione, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <td
                  style={{
                    ...cella,
                    backgroundColor: sezione.coloreNodo,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {sezione.nodo}
                </td>
                <td
                  colSpan={13}
                  style={{
                    ...cella,
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                  }}
                >
                  {sezione.titolo}
                  <button
                    onClick={() => aggiungiRiga(idx)}
                    style={{
                      float: "right",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.75rem",
                      border: "1px solid #bbb",
                      borderRadius: 4,
                      backgroundColor: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    + Aggiungi riga
                  </button>
                </td>
              </tr>
              {sezione.sotto.map((sottoNodo, i) => (
                <tr key={i}>
                  <td
                    style={{ ...cella, backgroundColor: sezione.coloreRiga }}
                  ></td>
                  <td style={{ ...cella, backgroundColor: sezione.coloreRiga }}>
                    {sottoNodo}
                  </td>
                  <td
                    style={{ ...cella, backgroundColor: sezione.coloreRiga }}
                  ></td>
                  <td
                    style={{
                      ...cella,
                      backgroundColor: "white",
                      border: "none",
                    }}
                  ></td>{" "}
                  {/* Spazio */}
                  {Array(10)
                    .fill(null)
                    .map((_, k) => (
                      <td
                        key={k}
                        style={{
                          ...cella,
                          backgroundColor: sezione.coloreRiga,
                        }}
                      ></td>
                    ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.5rem",
          alignItems: "flex-start",
        }}
      >
        <div>
          <button
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid black",
              background: "white",
              fontWeight: "bold",
              marginRight: "1rem",
              marginLeft: "200px",
            }}
          >
            Archivio costi/ricavi »
          </button>
          <button
            onClick={handleExportExcel}
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid black",
              background: "#b3dbff",
              fontWeight: "bold",
              marginLeft: "100px",
            }}
          >
            Genera costi/ricavi
          </button>
        </div>
        <div style={{ textAlign: "right", fontSize: "0.85rem" }}>
          <div
            style={{
              backgroundColor: "#e6f2e6",
              padding: "0.4rem 0.6rem",
              marginBottom: 4,
            }}
          >
            <strong>Data aggiornamento</strong>:{" "}
            <span style={{ float: "right" }}>10 giu. 2025</span>
          </div>
          <div
            style={{
              backgroundColor: "#e6f2e6",
              padding: "0.4rem 0.6rem",
              marginBottom: 4,
            }}
          >
            <strong>Margine di commessa</strong>:{" "}
            <span style={{ float: "right" }}>€ 20.000</span>
          </div>
          <div style={{ backgroundColor: "#e6f2e6", padding: "0.4rem 0.6rem" }}>
            <strong>Margine %</strong>:{" "}
            <span style={{ float: "right" }}>20 %</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stile base per ogni cella
const cella = {
  padding: "0.4rem",
  border: "1px solid #ccc",
  verticalAlign: "middle",
};

const DatiCommessa = ({ onComplete, commessa }) => {
  const [triggered, setTriggered] = useState(false);
  const [dataInizio, setDataInizio] = useState(new Date());
  const [dataFine, setDataFine] = useState(new Date());
  const [mappaUrl, setMappaUrl] = useState(null);
  const [zonaImageUrl, setZonaImageUrl] = useState(null);

  const [datiGenerali, setDatiGenerali] = useState({
    codice: "",
    cliente: "",
    indirizzo: "",
    tipoLavori: "",
    tipoAppalto: "",
    respUfficio: "",
    respCantiere: "",
    contratto: "",
    centroCosto: "",
    gant: "",
    condivisione: "",
    sicurezza: "",
    foto: "",
    anagraficaCliente: ["", "", "", "", ""],
    anagraficaProgettista: ["", "", "", "", ""],
  });

  useEffect(() => {
    if (commessa) {
      setDatiGenerali((prev) => ({
        ...prev,
        codice: commessa.IdCantiere?.toString() || "",
        cliente: commessa.RagioneSociale || "",
        indirizzo: commessa.Indirizzo || "",
        tipoLavori: commessa.TipoLavori || "",
        tipoAppalto: commessa.TipoAppalto || "",
        respUfficio: commessa.RespUfficio || "",
        respCantiere: commessa.RespCantiere || "",
      }));
    }
  }, [commessa]);

  const handleChange = (field) => (e) => {
    const value = e.target.value ?? "";
    setDatiGenerali((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, index) => (e) => {
    const newArr = [...datiGenerali[field]];
    newArr[index] = e.target.value;
    setDatiGenerali((prev) => ({ ...prev, [field]: newArr }));
  };

  const aggiornaMappaDaIndirizzo = async (indirizzo) => {
    if (!indirizzo) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          indirizzo
        )}&format=json&limit=1`,
        {
          headers: {
            "User-Agent": "centoimpianti.com - commessa",
            "Accept-Language": "it",
          },
        }
      );
      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const delta = 0.01;
        const bbox = `${lon - delta},${lat - delta},${lon + delta},${
          lat + delta
        }`;
        const url = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
        setMappaUrl(url);
      } else {
        setMappaUrl(null);
      }
    } catch (error) {
      console.error("Errore caricamento mappa:", error);
      setMappaUrl(null);
    }
  };

  const aggiornaImmagineZona = async (query) => {
    if (!query) return setZonaImageUrl(null);
    const base = query.split(",")[1]?.trim() || query;
    const url = `https://source.unsplash.com/600x400/?${encodeURIComponent(
      base
    )}`;
    setZonaImageUrl(url);
  };

  useEffect(() => {
    const indirizzo = datiGenerali.indirizzo.trim();
    if (indirizzo !== "") {
      aggiornaMappaDaIndirizzo(indirizzo);
      aggiornaImmagineZona(indirizzo);
    } else {
      setMappaUrl(null);
      setZonaImageUrl(null);
    }
  }, [datiGenerali.indirizzo]);

  useEffect(() => {
    const { codice, indirizzo } = datiGenerali;
    if (codice && indirizzo && !triggered) {
      setTriggered(true);
      if (typeof onComplete === "function") {
        onComplete({ codice, indirizzo });
      }
    }
  }, [datiGenerali, triggered, onComplete]);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      >
        Cod. {datiGenerali.codice || "—"}{" "}
        <span style={{ color: "brown" }}>{datiGenerali.cliente || ""}</span>{" "}
        {datiGenerali.indirizzo}
      </div>

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
            onChange={setDataInizio}
            dateFormat="dd MMMM yyyy"
          />
        </div>
        <div>
          <div style={{ fontWeight: "bold", fontSize: "0.85rem" }}>
            Data fine cantiere
          </div>
          <DatePicker
            selected={dataFine}
            onChange={setDataFine}
            dateFormat="dd MMMM yyyy"
          />
        </div>
        <span
          style={{
            float: "right",
            backgroundColor: (() => {
              const stato = commessa?.StatoCantiere?.toLowerCase() || "";
              if (stato.includes("chiuso")) return "#d32f2f"; // rosso
              if (stato.includes("incorso")) return "#388e3c"; // verde
              return "#fbc02d"; // giallo
            })(),
            color: "white",
            padding: "0.3rem 1rem",
            fontWeight: "bold",
            borderRadius: 4,
          }}
        >
          {(() => {
            const stato = commessa?.StatoCantiere?.toLowerCase() || "";
            if (stato.includes("chiuso")) return "CHIUSO";
            if (stato.includes("incorso")) return "APERTO";
            return "BLOCCATO";
          })()}
        </span>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{ flex: 2 }}>
          <table style={{ width: "100%", marginBottom: "1rem" }}>
            <thead>
              <tr>
                <th
                  colSpan="2"
                  style={{
                    ...cellStyle,
                    backgroundColor: "#ddf0e3",
                    textAlign: "center",
                  }}
                >
                  DATI GENERALI
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "codice",
                "cliente",
                "indirizzo",
                "tipoLavori",
                "tipoAppalto",
                "respUfficio",
                "respCantiere",
              ].map((key) => (
                <tr key={key}>
                  <td style={cellStyle}>{key}</td>
                  <td style={cellStyle}>
                    <input
                      type="text"
                      value={datiGenerali[key] ?? ""}
                      onChange={handleChange(key)}
                      placeholder={`Inserisci ${key}`}
                      style={{ width: "100%", border: "none" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
                "contratto",
                "centroCosto",
                "gant",
                "condivisione",
                "sicurezza",
                "foto",
              ].map((key) => (
                <tr key={key}>
                  <td style={cellStyle}>{key}</td>
                  <td style={cellStyle}>
                    <input
                      type="text"
                      value={datiGenerali[key] ?? ""}
                      onChange={handleChange(key)}
                      placeholder={`Link ${key}`}
                      style={{ width: "100%", border: "none" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
              {["anagraficaCliente", "anagraficaProgettista"].map((field) => (
                <tr key={field}>
                  <td style={cellStyle}>
                    {field === "anagraficaCliente" ? "Cliente" : "Progettista"}
                  </td>
                  {datiGenerali[field].map((val, i) => (
                    <td key={i} style={cellStyle}>
                      <input
                        type="text"
                        value={val}
                        onChange={handleArrayChange(field, i)}
                        style={{ width: "100%", border: "none" }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {mappaUrl && (
            <iframe
              title="Mappa"
              src={mappaUrl}
              width="100%"
              height="200"
              style={{ border: "1px solid #ccc" }}
            />
          )}
          {zonaImageUrl ? (
            <img
              src={zonaImageUrl}
              alt="Zona"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          ) : (
            <div style={{ textAlign: "center", color: "#999" }}>
              Nessuna immagine trovata
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const GestioneContratto = ({ commessa }) => (
  <div
    style={{
      padding: "1rem",
      backgroundColor: "white",
      border: "1px solid #ccc",
    }}
  >
    <div style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}>
      Cod. {commessa?.IdCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
      {commessa?.Indirizzo || ""}
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

  const [allCommesse, setAllCommesse] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedCommessa, setSelectedCommessa] = useState(null);
  const [isModalitaNuova, setIsModalitaNuova] = useState(false);
  const [tabsVisibili, setTabsVisibili] = useState(tabsOriginali);
  const [selectedTab, setSelectedTab] = useState("Dati commessa");

  const [datiCommessa, setDatiCommessa] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dati = await CantiereService.ricercaCantieri({});
        setAllCommesse(dati);
      } catch (err) {
        console.error("Errore nel caricamento commesse:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("modalita") === "nuova") {
      setIsModalitaNuova(true);
      setTabsVisibili(["Dati commessa"]);
    }
  }, []);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = allCommesse.filter((c) => {
        return (
          (c.IdCantiere && c.IdCantiere.toString().includes(searchTerm)) ||
          (c.RagioneSociale &&
            c.RagioneSociale.toLowerCase().includes(
              searchTerm.toLowerCase()
            )) ||
          (c.Indirizzo &&
            c.Indirizzo.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      });
      setFilteredOptions(filtered.slice(0, 10));
    } else {
      setFilteredOptions([]);
    }
  }, [searchTerm, allCommesse]);

  const handleComplete = (data) => {
    if (!isModalitaNuova) return;

    const url = new URL(window.location.href);
    url.searchParams.delete("modalita");
    window.history.replaceState({}, "", url.pathname);

    setDatiCommessa(data);
    setTabsVisibili(tabsOriginali);
    setIsModalitaNuova(false);

    fetch("/api/commesse/nuova", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => console.log("Commessa inviata:", res.status));
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            width: "100%",
            padding: "1rem 1.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            position: "relative",
          }}
        >
          Controllo gestione commessa
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "180px", // solo sotto il testo
              height: "3px",
              backgroundColor: "#999", // più scuro
              borderRadius: 2,
            }}
          />
        </div>

        <br></br>
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
                backgroundColor: selectedTab === label ? "#e3ede5" : "#f5f5f5", // aggiornato
                fontSize: "0.9rem",
                padding: "0.4rem 0",
                fontWeight: selectedTab === label ? "bold" : "normal",
                color: "#333",
              }}
            >
              {label}
            </div>
          ))}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Filtra per codice, cliente o indirizzo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
            }}
          />
          {filteredOptions.length > 0 && (
            <div
              style={{
                border: "1px solid #ccc",
                backgroundColor: "#fff",
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              {filteredOptions.map((commessa) => (
                <div
                  key={commessa.IdCantiere}
                  onClick={() => {
                    setSelectedCommessa(commessa);
                    setSearchTerm("");
                    setFilteredOptions([]);
                  }}
                  style={{
                    padding: "0.5rem",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <strong>{commessa.IdCantiere}</strong> -{" "}
                  {commessa.RagioneSociale} ({commessa.Indirizzo})
                </div>
              ))}
            </div>
          )}
        </div>
        {selectedTab === "Dati commessa" && (
          <DatiCommessa
            commessa={selectedCommessa}
            onComplete={handleComplete}
          />
        )}
        {selectedTab === "Gestione contratto" && (
          <GestioneContratto commessa={selectedCommessa} />
        )}
        {selectedTab === "Costi / Ricavi" && (
          <CostiRicavi commessa={selectedCommessa} />
        )}
        {selectedTab === "Approvvigionamenti" && (
          <Approvvigionamenti commessa={selectedCommessa} />
        )}
        {selectedTab === "C.D.P." && <CDP commessa={selectedCommessa} />}
        {selectedTab === "Cruscotto di commessa" && (
          <CruscottoCommessa commessa={selectedCommessa} />
        )}
      </div>
    </div>
  );
};

const CruscottoCommessa = ({ commessa }) => (
  <div style={{ padding: "1rem", backgroundColor: "white" }}>
    <div style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}>
      <div
        style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}
      >
        Cod. {commessa?.IdCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
        {commessa?.Indirizzo || ""}
      </div>
      <span
        style={{
          float: "right",
          backgroundColor: (() => {
            const stato = commessa?.StatoCantiere?.toLowerCase() || "";
            if (stato.includes("chiuso")) return "#d32f2f"; // rosso
            if (stato.includes("incorso")) return "#388e3c"; // verde
            return "#fbc02d"; // giallo
          })(),
          color: "white",
          padding: "0.3rem 1rem",
          fontWeight: "bold",
          borderRadius: 4,
        }}
      >
        {(() => {
          const stato = commessa?.StatoCantiere?.toLowerCase() || "";
          if (stato.includes("chiuso")) return "CHIUSO";
          if (stato.includes("incorso")) return "APERTO";
          return "BLOCCATO";
        })()}
      </span>
      <br></br>
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

const CDP = ({ commessa }) => {
  const [righe, setRighe] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    if (commessa?.IdCantiere) {
      CDPService.leggi(commessa.IdCantiere)
        .then(setRighe)
        .catch((err) => console.error("Errore caricamento CDP:", err));
    }
  }, [commessa?.IdCantiere]);

  const apriDrawer = (item = null) => {
    setEditingItem(item);
    setDrawerOpen(true);
  };

  const chiudiDrawer = () => {
    setEditingItem(null);
    setDrawerOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const payload = { ...formData, IdCantiere: commessa?.IdCantiere };

    try {
      if (editingItem) {
        await CDPService.aggiorna({ ...editingItem, ...payload });
      } else {
        await CDPService.crea(payload);
      }
      const updated = await CDPService.leggi(commessa?.IdCantiere);
      setRighe(updated);
      chiudiDrawer();
    } catch (err) {
      console.error("Errore salvataggio CDP:", err);
    }
  };

  const handleDelete = async () => {
    if (!editingItem?.Numero) return;
    const conferma = window.confirm("Confermi l'eliminazione del CDP?");
    if (!conferma) return;

    try {
      await CDPService.elimina(editingItem.Numero);
      const updated = await CDPService.leggi(commessa?.IdCantiere);
      setRighe(updated);
      chiudiDrawer();
    } catch (err) {
      console.error("Errore eliminazione CDP:", err);
    }
  };

  return (
    <div style={{ padding: "1rem", backgroundColor: "white" }}>
      <div
        style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}
      >
        <div
          style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}
        >
          Cod. {commessa?.IdCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
          {commessa?.Indirizzo || ""}
        </div>
        <span
          style={{
            float: "right",
            backgroundColor: (() => {
              const stato = commessa?.StatoCantiere?.toLowerCase() || "";
              if (stato.includes("chiuso")) return "#d32f2f"; // rosso
              if (stato.includes("incorso")) return "#388e3c"; // verde
              return "#fbc02d"; // giallo
            })(),
            color: "white",
            padding: "0.3rem 1rem",
            fontWeight: "bold",
            borderRadius: 4,
          }}
        >
          {(() => {
            const stato = commessa?.StatoCantiere?.toLowerCase() || "";
            if (stato.includes("chiuso")) return "CHIUSO";
            if (stato.includes("incorso")) return "APERTO";
            return "BLOCCATO";
          })()}
        </span>
        <br></br>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th
              colSpan="8"
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
          {[
            "N°",
            "DESCRIZIONE",
            "FORNITORE",
            "LINK RILIEVO",
            "PERIODO LAVORAZIONI",
            "RESPONSABILE",
            "LINK CDP",
            "",
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
        </thead>
        <tbody>
          {righe.map((r, i) => (
            <tr key={i}>
              <td style={cellStyle}>{r.Numero}</td>
              <td style={cellStyle}>{r.Descrizione}</td>
              <td style={cellStyle}>{r.Fornitore}</td>
              <td style={cellStyle}>r.LinkRilievo</td>
              <td style={cellStyle}>{r.PeriodoLavorazioni}</td>
              <td style={cellStyle}>{r.Responsabile}</td>
              <td style={cellStyle}>{r.LinkCDP}</td>
              <td style={{ ...cellStyle, textAlign: "center" }}>
                <button
                  onClick={() => apriDrawer(r)}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  ⋯
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="8" style={{ textAlign: "right", padding: "0.5rem" }}>
              <button
                onClick={() => apriDrawer(null)}
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {drawerOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100%",
            maxWidth: 400,
            height: "100%",
            backgroundColor: "#f7fdf8",
            boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            zIndex: 1000,
            overflowY: "auto",
            borderLeft: "1px solid #d0e5d6",
          }}
        >
          <h2 style={{ color: "#2e7d32", marginBottom: "1rem" }}>
            {editingItem ? "Modifica CDP" : "Nuovo CDP"}
          </h2>

          <form onSubmit={handleSubmit}>
            {[
              "Numero",
              "Descrizione",
              "Fornitore",
              "LinkRilievo",
              "PeriodoLavorazioni",
              "Responsabile",
              "LinkCDP",
            ].map((name, idx) => (
              <div key={idx} style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.3rem",
                    fontWeight: 600,
                  }}
                >
                  {name}
                </label>
                <input
                  name={name}
                  defaultValue={editingItem?.[name] || ""}
                  required={name === "Numero" || name === "Descrizione"}
                  style={{
                    width: "100%",
                    padding: "0.6rem",
                    borderRadius: 6,
                    border: "1px solid #cde5d4",
                    fontSize: "0.9rem",
                  }}
                />
              </div>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: editingItem ? "space-between" : "flex-end",
                gap: "0.5rem",
              }}
            >
              {editingItem && (
                <button
                  type="button"
                  onClick={handleDelete}
                  style={{
                    backgroundColor: "#ffebee",
                    color: "#d32f2f",
                    padding: "0.7rem",
                    borderRadius: 6,
                    border: "1px solid #ffcdd2",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Elimina
                </button>
              )}
              <button
                type="submit"
                style={{
                  backgroundColor: "#2e7d32",
                  color: "white",
                  padding: "0.7rem",
                  borderRadius: 6,
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Salva
              </button>
              <button
                type="button"
                onClick={chiudiDrawer}
                style={{
                  backgroundColor: "#e0f2f1",
                  color: "#2e7d32",
                  padding: "0.7rem",
                  borderRadius: 6,
                  border: "1px solid #b2dfdb",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Chiudi
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
const Approvvigionamenti = ({ commessa }) => {
  const [righe, setRighe] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    if (commessa?.IdCantiere) {
      ApprovvigionamentoService.leggi(commessa.IdCantiere)
        .then((data) => setRighe(data))
        .catch((err) =>
          console.error("Errore nel caricamento approvvigionamenti:", err)
        );
    }
  }, [commessa?.IdCantiere]);

  const apriDrawer = (item = null) => {
    setEditingItem(item);
    setDrawerOpen(true);
  };

  const chiudiDrawer = () => {
    setEditingItem(null);
    setDrawerOpen(false);
  };

  const parseToDateInput = (val) => {
    if (!val) return "";
    try {
      const d = new Date(val);
      return d.toISOString().slice(0, 10);
    } catch (err) {
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const payload = {
      ...formData,
      IdCantiere: commessa?.IdCantiere,
    };

    try {
      if (editingItem) {
        await ApprovvigionamentoService.aggiorna({
          ...editingItem,
          ...payload,
        });
      } else {
        await ApprovvigionamentoService.crea(payload);
      }

      const data = await ApprovvigionamentoService.leggi(commessa?.IdCantiere);
      setRighe(data);
      chiudiDrawer();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "1rem", backgroundColor: "white" }}>
      <div
        style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}
      >
        <div
          style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}
        >
          Cod. {commessa?.IdCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
          {commessa?.Indirizzo || ""}
        </div>

        <span
          style={{
            float: "right",
            backgroundColor: (() => {
              const stato = commessa?.StatoCantiere?.toLowerCase() || "";
              if (stato.includes("chiuso")) return "#d32f2f"; // rosso
              if (stato.includes("incorso")) return "#388e3c"; // verde
              return "#fbc02d"; // giallo
            })(),
            color: "white",
            padding: "0.3rem 1rem",
            fontWeight: "bold",
            borderRadius: 4,
          }}
        >
          {(() => {
            const stato = commessa?.StatoCantiere?.toLowerCase() || "";
            if (stato.includes("chiuso")) return "CHIUSO";
            if (stato.includes("incorso")) return "APERTO";
            return "BLOCCATO";
          })()}
        </span>
        <br></br>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th
              colSpan="8"
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
              "",
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
          {righe.length === 0 ? (
            <tr>
              <td
                colSpan="8"
                style={{ ...cellStyle, textAlign: "center", color: "#999" }}
              >
                Nessun dato disponibile.
              </td>
            </tr>
          ) : (
            righe.map((r, i) => (
              <tr key={i}>
                <td style={cellStyle}>{r.Numero}</td>
                <td style={cellStyle}>{r.Descrizione}</td>
                <td style={cellStyle}>{r.Fornitura}</td>
                <td style={cellStyle}>{r.Posa}</td>
                <td style={cellStyle}>
                  {r.DataDefinizione?.slice(0, 10) || ""}
                </td>
                <td style={cellStyle}>
                  {r.LinkCartella ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span
                        style={{ fontFamily: "monospace", fontSize: "0.85rem" }}
                      >
                        {r.LinkCartella}
                      </span>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(r.LinkCartella)
                        }
                        title="Copia percorso"
                        style={{
                          background: "#e0f2f1",
                          border: "1px solid #b2dfdb",
                          padding: "0.2rem 0.4rem",
                          cursor: "pointer",
                          fontSize: "0.8rem",
                          borderRadius: 4,
                        }}
                      >
                        📋
                      </button>
                    </div>
                  ) : (
                    "-"
                  )}
                </td>
                <td style={cellStyle}>{r.Responsabile}</td>
                <td style={{ ...cellStyle, textAlign: "center" }}>
                  <button
                    onClick={() => apriDrawer(r)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.5rem",
                    }}
                  >
                    ⋯
                  </button>
                </td>
              </tr>
            ))
          )}
          <tr>
            <td colSpan="8" style={{ textAlign: "right", padding: "0.5rem" }}>
              <button
                onClick={() => apriDrawer(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                }}
              >
                ⋯
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {drawerOpen && (
        <>
          <div
            onClick={chiudiDrawer}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 999,
            }}
          />

          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "100%",
              maxWidth: 400,
              height: "100%",
              backgroundColor: "#f7fdf8",
              boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              zIndex: 1000,
              overflowY: "auto",
              borderLeft: "1px solid #d0e5d6",
            }}
          >
            <h2
              style={{
                marginBottom: "1rem",
                color: "#2e7d32",
                fontSize: "1.2rem",
              }}
            >
              {editingItem
                ? "Modifica Approvvigionamento"
                : "Nuovo Approvvigionamento"}
            </h2>

            <form onSubmit={handleSubmit}>
              {[
                { name: "Numero", type: "text", required: true },
                { name: "Descrizione", type: "text", required: true },
                { name: "Fornitura", type: "text" },
                { name: "Posa", type: "text" },
                { name: "DataDefinizione", type: "date" },
                { name: "LinkCartella", type: "text" },
                { name: "Responsabile", type: "text" },
              ].map((field, idx) => (
                <div key={idx} style={{ marginBottom: "1rem" }}>
                  <label
                    htmlFor={field.name}
                    style={{
                      display: "block",
                      marginBottom: "0.3rem",
                      color: "#4b6f55",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    {field.name}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    defaultValue={
                      field.type === "date"
                        ? parseToDateInput(editingItem?.[field.name])
                        : editingItem?.[field.name] || ""
                    }
                    style={{
                      width: "100%",
                      padding: "0.6rem 0.8rem",
                      borderRadius: 6,
                      border: "1px solid #cde5d4",
                      backgroundColor: "#ffffff",
                      fontSize: "0.9rem",
                      outlineColor: "#2e7d32",
                    }}
                  />
                </div>
              ))}

              <div
                style={{
                  display: "flex",
                  justifyContent: editingItem ? "space-between" : "flex-end",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                {editingItem && (
                  <button
                    type="button"
                    onClick={async () => {
                      if (
                        window.confirm(
                          "Sei sicuro di voler eliminare questo approvvigionamento?"
                        )
                      ) {
                        try {
                          await ApprovvigionamentoService.elimina(
                            editingItem.Numero
                          );
                          const updated = await ApprovvigionamentoService.leggi(
                            commessa?.IdCantiere
                          );
                          setRighe(updated);
                          chiudiDrawer();
                        } catch (err) {
                          console.error("Errore nell'eliminazione:", err);
                        }
                      }
                    }}
                    style={{
                      flex: 1,
                      backgroundColor: "#ffebee",
                      color: "#d32f2f",
                      border: "1px solid #ffcdd2",
                      padding: "0.7rem",
                      borderRadius: 6,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Elimina
                  </button>
                )}

                <button
                  type="submit"
                  style={{
                    flex: 1,
                    backgroundColor: "#2e7d32",
                    color: "white",
                    border: "none",
                    padding: "0.7rem",
                    borderRadius: 6,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Salva
                </button>

                <button
                  type="button"
                  onClick={chiudiDrawer}
                  style={{
                    flex: 1,
                    backgroundColor: "#e8f5e9",
                    color: "#2e7d32",
                    border: "1px solid #c8e6c9",
                    padding: "0.7rem",
                    borderRadius: 6,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Chiudi
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CommessaTecnico;
