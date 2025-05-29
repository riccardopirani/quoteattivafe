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
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { useRef } from "react";
import dayjs from "dayjs";
import CDPService from "../services/cdp";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/it";
import { BarChart, Bar } from "recharts";
moment.locale("it");

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <button
    type="button"
    onClick={onClick}
    ref={ref}
    style={{
      background: "none",
      border: "none",
      padding: 0,
      fontSize: "0.85rem",
      cursor: "pointer",
    }}
  >
    {value}
  </button>
));
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

const CostiRicavi = ({ commessa }) => {
  const [openArchivio, setOpenArchivio] = useState(false);
  const [sezioni, setSezioni] = useState([]);
  const [documentiArchivio, setDocumentiArchivio] = useState([]);
  const [datiExternal, setDatiExternal] = useState([]);
  const [datiGenerali, setDatiGenerali] = useState({
    statoDinamico: "BLOCCATO",
  });

  useEffect(() => {
    const fetchStato = async () => {
      if (commessa?.IdCantiere) {
        try {
          const result = await CantiereService.statoCommessa({
            Codice: commessa.IdCantiere,
          });

          const statoGrezzo = result;
          const statoPulito = statoGrezzo.trim().toUpperCase();

          let statoLabel = "BLOCCATO";
          if (statoPulito.includes("A")) statoLabel = "APERTO";
          else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
          else if (statoPulito.includes("C")) statoLabel = "CHIUSO";

          setDatiGenerali((prev) => ({
            ...prev,
            statoDinamico: statoLabel,
          }));
        } catch (error) {
          console.error("Errore nel recupero dello stato cantiere:", error);
        }
      }
    };

    fetchStato();
  }, [commessa?.IdCantiere]);

  useEffect(() => {
    if (!commessa?.IdCantiere) return;

    const fetchData = async () => {
      try {
        const dati = await CantiereService.nodidettagli({
          Codice: commessa.IdCantiere,
        });

        const datiPuliti = dati.map((nodo) => ({
          ...nodo,
          CodiceNodo: nodo.CodiceNodo?.trim?.(),
        }));

        setDatiExternal(datiPuliti);
      } catch (err) {
        console.error("Errore nel caricamento commesse:", err);
      }
    };

    fetchData();
  }, [commessa?.IdCantiere]);

  useEffect(() => {
    if (datiExternal.length === 0) return;

    const sezioniBase = [
      {
        nodo: "A",
        coloreNodo: "#cde1bc",
        coloreRiga: "#f3fdf5",
        titolo: "OPERE EDILI",
      },
      {
        nodo: "E",
        coloreNodo: "#f7e7af",
        coloreRiga: "#fef9e6",
        titolo: "IMPIANTI ELETTRICI",
      },
      {
        nodo: "M",
        coloreNodo: "#a4b8cb",
        coloreRiga: "#e4ebf3",
        titolo: "IMPIANTI MECCANICI",
      },
      {
        nodo: "I",
        coloreNodo: "#eac3e2",
        coloreRiga: "#fce9f8",
        titolo: "COSTI INDIRETTI",
      },
      {
        nodo: "R",
        coloreNodo: "#d0d0d0",
        coloreRiga: "#f3f3f3",
        titolo: "RICAVI",
      },
    ];

    const sezioniMap = Object.fromEntries(
      sezioniBase.map((s) => [s.nodo, { ...s, sotto: [] }])
    );

    for (const nodo of datiExternal) {
      const { CodiceNodo, Descrizione, Costo } = nodo;
      if (!CodiceNodo || CodiceNodo.length < 1) continue;
      const prefisso = CodiceNodo.charAt(0);
      if (sezioniMap[prefisso]) {
        sezioniMap[prefisso].sotto.push({
          codice: CodiceNodo,
          descrizione: Descrizione,
          costo: Costo,
        });
      }
    }

    const sezioniFinali = ["A", "E", "M", "I", "R"].map((k) => sezioniMap[k]);
    setSezioni(sezioniFinali);
  }, [datiExternal]);

  const aggiungiRiga = (index) => {
    const nuovo = [...sezioni];
    nuovo[index].sotto.push({ codice: "", descrizione: "", costo: 0 });
    setSezioni(nuovo);
  };

  const contentRef = useRef();

  const handleExportExcel = async () => {
    const content = contentRef.current;
    if (content) {
      try {
        const canvas = await html2canvas(content, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff", // evita trasparenze
        });

        canvas.toBlob((blob) => {
          if (blob) {
            saveAs(blob, "CostiRicavi_Screenshot.png");
          }
        }, "image/png");
      } catch (error) {
        console.error("Errore durante lo screenshot:", error);
      }
    }
  };
  const maxCostoSenzaRicavi = Math.max(
    0,
    ...sezioni
      .filter((s) => s.nodo !== "R")
      .flatMap((s) => s.sotto)
      .map((el) => Number(el.costo) || 0)
  );

  return (
    <div ref={contentRef} style={{ padding: "1rem", backgroundColor: "white" }}>
      <span
        style={{
          float: "right",
          backgroundColor: (() => {
            const stato = datiGenerali?.statoDinamico || "";
            if (stato === "CHIUSO") return "#d32f2f";
            if (stato === "APERTO") return "#388e3c";
            return "#fbc02d";
          })(),
          color: "white",
          padding: "0.3rem 1rem",
          fontWeight: "bold",
          borderRadius: 4,
          marginBottom: "10px",
        }}
      >
        {datiGenerali?.statoDinamico || "BLOCCATO"}
      </span>

      <br></br>
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
              "",
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
              {sezione.sotto.map((sotto, i) => {
                const isCategoria = sotto.codice.length === 3;
                const mostraCosto =
                  sezione.nodo === "R"
                    ? (Number(sotto.costo) || 0).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : "";
                return (
                  <tr key={i}>
                    <td style={{ backgroundColor: sezione.coloreRiga }}>
                      {isCategoria ? sotto.codice : ""}
                    </td>
                    <td style={{ backgroundColor: sezione.coloreRiga }}>
                      {isCategoria
                        ? sotto.descrizione
                        : `${sotto.codice} ${sotto.descrizione}`}
                    </td>
                    <td style={{ backgroundColor: sezione.coloreRiga }}>
                      {mostraCosto}
                    </td>
                    <td
                      style={{ backgroundColor: "white", border: "none" }}
                    ></td>
                    {Array(10)
                      .fill(null)
                      .map((_, k) => (
                        <td
                          key={k}
                          style={{ backgroundColor: sezione.coloreRiga }}
                        ></td>
                      ))}
                  </tr>
                );
              })}
            </React.Fragment>
          ))}
          <tr>
            <td style={{ fontWeight: "bold" }} colSpan={2}>
              Totale Costi (esclusi Ricavi)
            </td>
            <td style={{ fontWeight: "bold" }}>
              {maxCostoSenzaRicavi > 0
                ? maxCostoSenzaRicavi.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : ""}
            </td>
            <td colSpan={11}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "1rem",
                  padding: "1rem 0",
                }}
              >
                <button
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid black",
                    background: "white",
                    fontWeight: "bold",
                    minWidth: "200px",
                    flex: "1 1 250px",
                  }}
                  onClick={() => setOpenArchivio(true)}
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
                    minWidth: "200px",
                    flex: "1 1 250px",
                  }}
                >
                  Genera costi/ricavi
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {openArchivio && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "400px",
            height: "100%",
            backgroundColor: "white",
            boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
            padding: "1rem",
            overflowY: "auto",
          }}
        >
          <button
            onClick={() => setOpenArchivio(false)}
            style={{
              float: "right",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          <h3>Archivio costi/ricavi</h3>
          {/* Qui puoi mettere i contenuti dell’archivio */}
          <div>
            {documentiArchivio.length > 0 ? (
              <ul>
                {documentiArchivio.map((doc, idx) => (
                  <li key={idx}>{doc.nome || "Documento"}</li>
                ))}
              </ul>
            ) : (
              <p>Nessun documento disponibile.</p>
            )}
          </div>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ textAlign: "right", fontSize: "0.85rem", width: "40%" }}>
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

const DatiCommessa = ({ onComplete, commessa }) => {
  const [triggered, setTriggered] = useState(false);
  const [dataInizio, setDataInizio] = useState(new Date());
  const [dataFine, setDataFine] = useState(new Date());
  const [mappaUrl, setMappaUrl] = useState(null);
  const [zonaImageUrl, setZonaImageUrl] = useState(null);
  const [datiGenerali2, setDatiGenerali2] = useState({
    statoDinamico: "BLOCCATO",
  });

  useEffect(() => {
    const fetchStato = async () => {
      if (commessa?.IdCantiere) {
        try {
          const result = await CantiereService.statoCommessa({
            Codice: commessa.IdCantiere,
          });

          const statoGrezzo = result;
          const statoPulito = statoGrezzo.trim().toUpperCase();

          let statoLabel = "BLOCCATO";
          if (statoPulito.includes("A")) statoLabel = "APERTO";
          else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
          else if (statoPulito.includes("C")) statoLabel = "CHIUSO";

          setDatiGenerali2((prev) => ({
            ...prev,
            statoDinamico: statoLabel,
          }));
        } catch (error) {
          console.error("Errore nel recupero dello stato cantiere:", error);
        }
      }
    };

    fetchStato();
  }, [commessa?.IdCantiere]);

  const creaClienteECantiereECommessa = async () => {
    try {
      const clienteRes = await CantiereService.creaCliente({
        RagioneSociale: datiGenerali.cliente,
      });
      const idCliente = clienteRes.return;

      const cantiereRes = await CantiereService.creaCantiere(
        idCliente,
        datiGenerali.indirizzo
      );
      const idCantiere = cantiereRes[0]?.IdCantiere;

      const nuovaCommessa = {
        IdCantiere: idCantiere,
        Codice: datiGenerali.codice, // se necessario
        RagioneSociale: datiGenerali.cliente, // aggiunto
        TipoLavori: datiGenerali.tipoLavori,
        TipoAppalto: datiGenerali.tipoAppalto,
        RespUfficio: datiGenerali.respUfficio,
        RespCantiere: datiGenerali.respCantiere,
        Contratto: datiGenerali.contratto,
        CentroCosto: datiGenerali.centroCosto,
        Gant: datiGenerali.gant,
        Condivisione: datiGenerali.condivisione,
        Sicurezza: datiGenerali.sicurezza,
        Foto: datiGenerali.foto,
        AnagraficaCliente: datiGenerali.anagraficaCliente,
        AnagraficaProgettista: datiGenerali.anagraficaProgettista,
        DataInizio: dataInizio.toISOString(),
        DataFine: dataFine.toISOString(),
      };

      const commessaRes = await CantiereService.aggiornaCantiere(nuovaCommessa);
      console.log("Commessa creata:", commessaRes);

      if (typeof onComplete === "function") {
        onComplete({
          codice: commessaRes.codice,
          indirizzo: datiGenerali.indirizzo,
        });
      }
    } catch (error) {
      console.error("Errore durante la creazione della commessa:", error);
    }
  };

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
    anagraficaCliente: ["", "", "", "", "", ""], // Nome, Telefono, Mail, Nome D.I., Tel D.I., Mail D.I.
    anagraficaProgettista: ["", "", "", "", "", ""], // Nome, Telefono, Mail, Nome CSE, Tel CSE, Mail CSE
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

  const handleChange = (field) => async (e) => {
    const value = e.target.value ?? "";
    const nuovo = { ...datiGenerali, [field]: value };
    setDatiGenerali(nuovo);

    if (commessa && commessa.IdCantiere) {
      await CantiereService.aggiornaCantiere({
        IdCantiere: commessa.IdCantiere,
        Codice: nuovo.codice,
        RagioneSociale: nuovo.cliente,
        TipoLavori: nuovo.tipoLavori,
        TipoAppalto: nuovo.tipoAppalto,
        RespUfficio: nuovo.respUfficio,
        RespCantiere: nuovo.respCantiere,
        Contratto: nuovo.contratto,
        CentroCosto: nuovo.centroCosto,
        Gant: nuovo.gant,
        Condivisione: nuovo.condivisione,
        Sicurezza: nuovo.sicurezza,
        Foto: nuovo.foto,
        AnagraficaCliente: nuovo.anagraficaCliente,
        AnagraficaProgettista: nuovo.anagraficaProgettista,
        DataInizio: dataInizio.toISOString(),
        DataFine: dataFine.toISOString(),
      });
    }
  };

  const handleArrayChange = (field, index) => async (e) => {
    const newArr = [...datiGenerali[field]];
    newArr[index] = e.target.value;
    const nuovo = { ...datiGenerali, [field]: newArr };
    setDatiGenerali(nuovo);

    if (commessa && commessa.IdCantiere) {
      await CantiereService.aggiornaCantiere({
        IdCantiere: commessa.IdCantiere,
        Codice: nuovo.codice,
        RagioneSociale: nuovo.cliente,
        TipoLavori: nuovo.tipoLavori,
        TipoAppalto: nuovo.tipoAppalto,
        RespUfficio: nuovo.respUfficio,
        DescrizioneEstesa: nuovo.indirizzo, // ← incluso sempre
        RespCantiere: nuovo.respCantiere,
        Contratto: nuovo.contratto,
        CentroCosto: nuovo.centroCosto,
        Gant: nuovo.gant,
        Condivisione: nuovo.condivisione,
        Sicurezza: nuovo.sicurezza,
        Foto: nuovo.foto,
        AnagraficaCliente: nuovo.anagraficaCliente,
        AnagraficaProgettista: nuovo.anagraficaProgettista,
        DataInizio: dataInizio.toISOString(),
        DataFine: dataFine.toISOString(),
      });
    }
  };

  const aggiornaMappaDaIndirizzo = async (indirizzo) => {
    const encoded = encodeURIComponent(indirizzo);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1`,
      {
        headers: {
          "User-Agent": "CentoImpiantiMap/1.0 (centoimpianti.com)",
          "Accept-Language": "it",
        },
      }
    );
    const data = await res.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      const delta = 0.002;
      const left = parseFloat(lon) - delta;
      const right = parseFloat(lon) + delta;
      const top = parseFloat(lat) + delta;
      const bottom = parseFloat(lat) - delta;
      const url = `https://www.openstreetmap.org/export/embed.html?bbox=${left},${bottom},${right},${top}&layer=mapnik&marker=${lat},${lon}`;
      setMappaUrl(url);
    }
  };

  const aggiornaImmagineZona = async (indirizzo) => {
    if (!indirizzo) return setZonaImageUrl(null);

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          indirizzo
        )}&format=json&limit=1`
      );
      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setZonaImageUrl(
          `https://www.openstreetmap.org/export/embed.html?bbox=${
            lon - 0.005
          },${lat - 0.005},${lon + 0.005},${
            lat + 0.005
          }&layer=mapnik&marker=${lat},${lon}`
        );
      } else {
        setZonaImageUrl(null);
      }
    } catch (err) {
      console.error("Errore caricamento immagine della zona:", err);
      setZonaImageUrl(null);
    }
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
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                backgroundColor: "#e6f0e6",
                padding: "0.5rem 1rem",
                fontWeight: "bold",
                fontSize: "0.85rem",
                whiteSpace: "nowrap",
              }}
            >
              Data inizio cantiere
            </div>
            <div style={{ padding: "0.5rem 1rem" }}>
              <DatePicker
                selected={dataInizio}
                onChange={setDataInizio}
                dateFormat="dd MMMM yyyy"
                customInput={<CustomInput />}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              border: "1px solid #ccc",
              marginLeft: "100px",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                backgroundColor: "#e6f0e6",
                padding: "0.5rem 1rem",
                fontWeight: "bold",

                fontSize: "0.85rem",
                whiteSpace: "nowrap",
              }}
            >
              Data fine cantiere
            </div>
            <div style={{ padding: "0.5rem 1rem" }}>
              <DatePicker
                selected={dataFine}
                onChange={setDataFine}
                dateFormat="dd MMMM yyyy"
                customInput={<CustomInput />}
              />
            </div>
          </div>
        </div>
        {new URLSearchParams(window.location.search).get("modalita") ===
        "nuova" ? (
          <button
            style={{
              float: "right",
              backgroundColor: "#fbc02d", // giallo come BLOCCATO
              color: "white",
              padding: "0.3rem 1rem",
              fontWeight: "bold",
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => creaClienteECantiereECommessa()}
          >
            Genera Commessa
          </button>
        ) : (
          <span
            style={{
              float: "right",
              backgroundColor: (() => {
                const stato = datiGenerali2?.statoDinamico || "";
                if (stato === "CHIUSO") return "#d32f2f";
                if (stato === "APERTO") return "#388e3c";
                return "#fbc02d";
              })(),
              color: "white",
              padding: "0.3rem 1rem",
              fontWeight: "bold",
              borderRadius: 4,
            }}
          >
            {datiGenerali2?.statoDinamico || "BLOCCATO"}
          </span>
        )}
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{ flex: 2 }}>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginBottom: "1rem",
            }}
          >
            {/* Colonna 1: DATI GENERALI */}
            <div style={{ flex: 1 }}>
              <table
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th
                      colSpan="2"
                      style={{
                        ...cellStyle,
                        backgroundColor: "#ddf0e3",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
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
                      <td
                        style={{
                          ...cellStyle,
                          backgroundColor: "#e0eee3",
                          fontWeight: "bold",
                        }}
                      >
                        {label}
                      </td>
                      <td style={cellStyle}>
                        <input
                          type="text"
                          value={datiGenerali[key] ?? ""}
                          onChange={handleChange(key)}
                          placeholder={`Inserisci ${label}`}
                          style={{ width: "100%", border: "none" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Colonna 2: DOCUMENTI */}
            <div style={{ flex: 1 }}>
              <table
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th
                      colSpan="2"
                      style={{
                        ...cellStyle,
                        backgroundColor: "#ddf0e3",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      DOCUMENTI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Link cartella contratto", key: "contratto" },
                    { label: "Link centro di costo", key: "centroCosto" },
                    { label: "Link Gant", key: "gant" },
                    {
                      label: "Link cartella condivisione",
                      key: "condivisione",
                    },
                    { label: "Link cartella sicurezza", key: "sicurezza" },
                    { label: "Link cartella foto", key: "foto" },
                  ].map(({ label, key }) => (
                    <tr key={key}>
                      <td
                        style={{
                          ...cellStyle,
                          backgroundColor: "#e0eee3",
                          fontWeight: "bold",
                        }}
                      >
                        {label}
                      </td>
                      <td style={cellStyle}>
                        <input
                          type="text"
                          value={datiGenerali[key] ?? ""}
                          onChange={handleChange(key)}
                          placeholder={`Inserisci ${label}`}
                          style={{ width: "100%", border: "none" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

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
              <tr>
                <td
                  rowSpan="3"
                  style={{
                    ...cellStyle,
                    backgroundColor: "#e0eee3",
                    fontWeight: "bold",
                  }}
                >
                  Cliente
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaCliente[0]}
                    onChange={handleArrayChange("anagraficaCliente", 0)}
                    placeholder="Nome"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
                <td
                  rowSpan="3"
                  style={{
                    ...cellStyle,
                    backgroundColor: "#e0eee3",
                    fontWeight: "bold",
                  }}
                >
                  D.I.
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaCliente[3]}
                    onChange={handleArrayChange("anagraficaCliente", 3)}
                    placeholder="Nome"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaCliente[1]}
                    onChange={handleArrayChange("anagraficaCliente", 1)}
                    placeholder="Telefono"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaCliente[4]}
                    onChange={handleArrayChange("anagraficaCliente", 4)}
                    placeholder="Telefono"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaCliente[2]}
                    onChange={handleArrayChange("anagraficaCliente", 2)}
                    placeholder="Mail"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaCliente[5]}
                    onChange={handleArrayChange("anagraficaCliente", 5)}
                    placeholder="Mail"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  rowSpan="3"
                  style={{
                    ...cellStyle,
                    backgroundColor: "#e0eee3",
                    fontWeight: "bold",
                  }}
                >
                  Progettista
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaProgettista[0]}
                    onChange={handleArrayChange("anagraficaProgettista", 0)}
                    placeholder="Nome"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
                <td
                  rowSpan="3"
                  style={{
                    ...cellStyle,
                    backgroundColor: "#e0eee3",
                    fontWeight: "bold",
                  }}
                >
                  C.s.e.
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaProgettista[3]}
                    onChange={handleArrayChange("anagraficaProgettista", 3)}
                    placeholder="Nome"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaProgettista[1]}
                    onChange={handleArrayChange("anagraficaProgettista", 1)}
                    placeholder="Telefono"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaProgettista[4]}
                    onChange={handleArrayChange("anagraficaProgettista", 4)}
                    placeholder="Telefono"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaProgettista[2]}
                    onChange={handleArrayChange("anagraficaProgettista", 2)}
                    placeholder="Mail"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.anagraficaProgettista[5]}
                    onChange={handleArrayChange("anagraficaProgettista", 5)}
                    placeholder="Mail"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
              </tr>
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
        </div>
      </div>
    </>
  );
};

const GestioneContratto = ({ commessa, onProduzioneUpdate }) => {
  const [datiGenerali2, setDatiGenerali2] = useState({
    statoDinamico: "BLOCCATO",
  });
  const [righeFatture, setRigheFatture] = useState([]);

  const [contratti, setContratti] = useState([]);
  const [datiContratti, setDatiContratti] = useState([]);
  const totaleImportiManuali = datiContratti.reduce(
    (sum, c) => sum + Number(c.CostoTemp2 || 0),
    0
  );

  const totaleProduzioneTotale = datiContratti.reduce(
    (sum, c) => sum + Number(c.produzioneTotale || 0),
    0
  );

  const produzioneNonFatturata =
    totaleProduzioneTotale -
    righeFatture.reduce((sum, r) => sum + Number(r.Importo || 0), 0);

  const percentualeAvanzamento =
    totaleProduzioneTotale > 0
      ? ((totaleImportiManuali / totaleProduzioneTotale) * 100).toFixed(2)
      : "0.00";

  useEffect(() => {
    const fetchFatture = async () => {
      try {
        const result = await CantiereService.fattureCommessa({
          Codice: commessa?.IdCantiere,
        });
        // Genera righe base per ogni fattura ricevuta
        const generate = result.map((fattura, idx) => ({
          Lavoro: "",
          Nodo: "",
          Numero1: idx + 1,
          Data1: "",
          Importo1: "",
          Numero2: "",
          CostoTemp2: "",
          Data2: "",
          Importo2: "",
          ImportoTEMP: 0,
          Id: idx + 1,
          Importo: fattura.Costo || 0, // <-- questa riga è ESSENZIALE
        }));

        setRigheFatture(generate);
      } catch (err) {
        console.error("Errore nel fetch delle fatture:", err);
      }
    };

    if (commessa?.IdCantiere) fetchFatture();
  }, [commessa.IdCantiere]);

  useEffect(() => {
    const iniziali = contratti.map((c) => {
      const costo = Number(c?.Costo || 0);
      const quantita = Number(c?.Quantita || 1);
      const produzioneTotale = costo * quantita;
      return {
        ...c,
        produzioneTotale,
        produzioneResidua: produzioneTotale,
      };
    });
    setDatiContratti(iniziali);
  }, [contratti]);
  const handleChange = (index, campo, valore) => {
    const nuovo = [...datiContratti];
    nuovo[index][campo] = valore;
    setDatiContratti(nuovo);
  };
  const righeConSalNonFatturato = righeFatture.map((r) => {
    const salNonFatturato = Math.max(
      Number(r.Importo2 || 0) - Number(r.Importo || 0),
      0
    );
    return { ...r, salNonFatturato };
  });
  const aggiungiRiga = () => {
    setContratti([
      ...contratti,
      {
        Descrizione: "",
        Data: new Date().toISOString().substring(0, 10), // formato YYYY-MM-DD
        Costo: 0,
        Quantita: 1,
      },
    ]);
  };

  useEffect(() => {
    console.log("Trigger fetchContratti, IdCantiere:", commessa?.IdCantiere);
    if (commessa?.IdCantiere) {
      const fetch = async () => {
        try {
          const result = await CantiereService.contrattoCommessa({
            Codice: commessa.IdCantiere,
          });
          console.log("Contratti ricevuti:", result);
          setContratti(result || []);
        } catch (err) {
          console.error("Errore nel fetch dei contratti:", err);
        }
      };
      fetch();
    }
  }, [commessa?.IdCantiere]);

  useEffect(() => {
    const fetchStato = async () => {
      if (commessa?.IdCantiere) {
        try {
          const result = await CantiereService.statoCommessa({
            Codice: commessa.IdCantiere,
          });

          const statoGrezzo = result;
          const statoPulito = statoGrezzo.trim().toUpperCase();

          let statoLabel = "BLOCCATO";
          if (statoPulito.includes("A")) statoLabel = "APERTO";
          else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
          else if (statoPulito.includes("C")) statoLabel = "CHIUSO";

          setDatiGenerali2((prev) => ({
            ...prev,
            statoDinamico: statoLabel,
          }));
        } catch (error) {
          console.error("Errore nel recupero dello stato cantiere:", error);
        }
      }
    };

    fetchStato();
  }, [commessa?.IdCantiere]);
  const salNonFatturati =
    righeFatture.reduce((sum, r) => sum + Number(r.Importo2 || 0), 0) -
    righeFatture.reduce((sum, r) => sum + Number(r.Importo || 0), 0);

  const handleRigaFatturaChange = (index, field, value) => {
    const nuova = [...righeFatture];
    nuova[index][field] = value;

    if (field === "Lavoro") {
      const contratto = datiContratti.find((c) => c.Descrizione === value);
      if (contratto) {
        nuova[index].ImportoTEMP = contratto.Costo;
        nuova[index].CostoTemp2 = contratto.CostoTemp2; // <--- AGGIUNGI QUESTO
        const oggi = new Date().toISOString().substring(0, 10);
        nuova[index].Data1 = oggi;
        nuova[index].Data2 = oggi;
      }
    }

    setRigheFatture(nuova);
  };

  const totaleImportiFatture = righeFatture.reduce(
    (sum, r) => sum + Number(r.Importo || 0),
    0
  );
  let residuoFatturare = totaleProduzioneTotale - totaleImportiFatture;

  const percentualeFatturazione =
    totaleProduzioneTotale > 0
      ? (() => {
          const result = (totaleImportiFatture / totaleImportiManuali) * 100;
          if (!isFinite(result)) return "100.00"; // se infinito o NaN
          return result.toFixed(2);
        })()
      : "0.00";

  const parseFloatSafe = (val) => {
    if (typeof val === "number") return val;
    if (!val || typeof val !== "string") return 0;
    const clean = val.replace(/\./g, "").replace(",", ".");
    const parsed = parseFloat(clean);
    return isNaN(parsed) ? 0 : parsed;
  };

  const sommaImporto = righeFatture.reduce(
    (sum, r) => sum + parseFloatSafe(r.Importo),
    0
  );
  const sommaImporto2 = righeFatture.reduce(
    (sum, r) => sum + parseFloatSafe(r.Importo2),
    0
  );

  const avanzamentoPercentuale =
    sommaImporto > 0 ? (sommaImporto2 / sommaImporto) * 100 : 0;
  const avanzamentoTotale = sommaImporto2;
  const salDaFare = sommaImporto - sommaImporto2;

  useEffect(() => {
    const totaleImportiManuali = datiContratti.reduce(
      (sum, c) => sum + Number(c.CostoTemp2 || 0),
      0
    );
    const totaleProduzioneTotale = datiContratti.reduce(
      (sum, c) => sum + Number(c.produzioneTotale || 0),
      0
    );
    const produzioneResidua = datiContratti.reduce(
      (sum, c) => sum + Number(c.produzioneResidua || 0),
      0
    );
    const percentualeAvanzamento =
      totaleProduzioneTotale > 0
        ? ((totaleImportiManuali / totaleProduzioneTotale) * 100).toFixed(2)
        : "0.00";
    if (onProduzioneUpdate) {
      onProduzioneUpdate({
        percentualeAvanzamento,
        totaleProduzione: totaleImportiManuali,
        produzioneResidua,
      });
    }
  }, [datiContratti]);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "white",
        border: "1px solid #ccc",
      }}
    >
      <span
        style={{
          float: "right",
          backgroundColor: (() => {
            const stato = datiGenerali2?.statoDinamico || "";
            if (stato === "CHIUSO") return "#d32f2f";
            if (stato === "APERTO") return "#388e3c";
            return "#fbc02d";
          })(),
          color: "white",
          padding: "0.3rem 1rem",
          fontWeight: "bold",
          borderRadius: 4,
        }}
      >
        {datiGenerali2?.statoDinamico || "BLOCCATO"}
      </span>
      <br></br>
      <div
        style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}
      >
        Cod. {commessa?.IdCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
        {commessa?.Indirizzo || ""}
      </div>

      <div style={{ marginBottom: "2rem", fontFamily: "Arial, sans-serif" }}>
        {/* Avanzamento Commessa */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundColor: "#f9f9f9",
              padding: "1rem",
              fontWeight: "bold",
              color: "#444",
              borderRight: "1px solid #eee",
            }}
          >
            Avanzamento commessa
          </div>
          <div
            style={{
              flex: 5,
              background: "#4caf50",
              color: "rgb(0, 0, 0)", // nero in RGB
              textAlign: "center",
              padding: "1rem",
              fontWeight: "600",
            }}
          >
            Avanzamento produzione: {percentualeAvanzamento}% €{" "}
            {totaleImportiManuali.toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>
          <div
            style={{
              flex: 2,
              background: "#c8e6c9",
              padding: "1rem",
              fontWeight: "600",
              textAlign: "center",
              color: "#2e7d32",
            }}
          >
            Lavori residui: €{" "}
            {datiContratti
              .reduce((sum, c) => sum + Number(c.produzioneResidua || 0), 0)
              .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
          </div>
        </div>

        {/* Avanzamento SAL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundColor: "#f9f9f9",
              padding: "1rem",
              fontWeight: "bold",
              color: "#444",
              borderRight: "1px solid #eee",
            }}
          >
            Avanzamento SAL
          </div>
          <div
            style={{
              flex: 5,
              background: "#a5d6a7",
              textAlign: "center",
              padding: "1rem",
              fontWeight: "600",
            }}
          >
            Avanzamento SAL: {avanzamentoPercentuale.toFixed(2)}% €
            {avanzamentoTotale.toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>
          <div
            style={{
              flex: 2,
              background: "#ef9a9a",
              padding: "1rem",
              fontWeight: "600",
              textAlign: "center",
              color: "#b71c1c",
            }}
          >
            SAL da fare: €
            {salDaFare.toLocaleString("it-IT", { minimumFractionDigits: 2 })}
          </div>
        </div>

        {/* Avanzamento Fatturazione */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundColor: "#f9f9f9",
              padding: "1rem",
              fontWeight: "bold",
              color: "#444",
              borderRight: "1px solid #eee",
            }}
          >
            Avanzamento fatturazione
          </div>
          <div
            style={{
              flex: 5,
              background: "#81c784",
              textAlign: "center",
              padding: "1rem",
              fontWeight: "600",
            }}
          >
            Avanzamento fatturazione: {percentualeFatturazione}% €{" "}
            {totaleImportiFatture.toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>

          <div
            style={{
              flex: 2,
              background: "#e0e0e0",
              padding: "1rem",
              fontWeight: "600",
              textAlign: "center",
              color: "#424242",
            }}
          >
            Residuo fatturare:
            {residuoFatturare.toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>
        </div>

        {/* Box sotto */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <div
            style={{
              flex: 1,
              background: "#ffcc80",
              padding: "1rem",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              color: "#6d4c41",
            }}
          >
            PRODUZIONE NON FATTURATA €{" "}
            {produzioneNonFatturata.toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>

          <div
            style={{
              flex: 1,
              background: "#f44336",
              padding: "1rem",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: "12px",
              color: "white",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            SAL NON FATTURATI €{" "}
            {salNonFatturati.toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>
        </div>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th
              colSpan={5}
              style={{
                backgroundColor: "#ddf0e3", // verde
                color: "rgb(0, 0, 0)", // nero in RGB
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
                padding: "10px",
              }}
            >
              Avanzamento Produzione
            </th>
          </tr>
          <tr style={{ backgroundColor: "#ddf0e3" }}>
            <th style={{ ...cellStyle, minWidth: "130px" }}>Lavori</th>
            <th style={cellStyle}>Data</th>
            <th style={cellStyle}>Importo</th>

            <th style={cellStyle}>Produzione Totale</th>
            <th style={cellStyle}>Produzione Residua</th>
          </tr>
        </thead>
        <tbody>
          {datiContratti.map((contratto, index) => {
            return (
              <tr key={index}>
                <td style={{ ...cellStyle, minWidth: "130px" }}>
                  <input
                    type="text"
                    value={contratto?.Descrizione || ""}
                    onChange={(e) =>
                      handleChange(index, "Descrizione", e.target.value)
                    }
                    style={{ width: "100%" }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="date"
                    value={contratto?.Data?.substring(0, 10) || ""}
                    onChange={(e) =>
                      handleChange(index, "Data", e.target.value)
                    }
                    style={{ width: "100%" }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={contratto?.CostoTemp2 || ""}
                    onChange={(e) =>
                      handleChange(index, "CostoTemp2", e.target.value)
                    }
                    style={{ width: "100%" }}
                  />
                </td>

                <td style={cellStyle}>
                  €
                  {Number(contratto?.Costo || 0).toLocaleString("it-IT", {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td style={cellStyle}>
                  <input
                    type="number"
                    value={contratto?.produzioneResidua || ""}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "produzioneResidua",
                        Number(e.target.value)
                      )
                    }
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tr
          style={{
            backgroundColor: "#ddd",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <td style={{ padding: "8px", border: "1px solid #ccc" }}>TOTALI</td>
          <td style={{ padding: "8px", border: "1px solid #ccc" }}></td>
          <td style={{ padding: "8px", border: "1px solid #ccc" }}>
            €{" "}
            {datiContratti
              .reduce((sum, r) => sum + Number(r.CostoTemp2 || 0), 0)
              .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
          </td>
          <td style={{ padding: "8px", border: "1px solid #ccc" }}>
            €{" "}
            {datiContratti
              .reduce((sum, r) => sum + Number(r.Costo || 0), 0)
              .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
          </td>
          <td style={{ padding: "8px", border: "1px solid #ccc" }}>
            €{" "}
            {datiContratti
              .reduce((sum, r) => sum + Number(r.produzioneResidua || 0), 0)
              .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
          </td>
        </tr>
      </table>

      <button
        onClick={aggiungiRiga}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        + Aggiungi Riga
      </button>
      <p></p>
      <br />
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          border: "1px solid #ccc",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#e6f0e6", textAlign: "center" }}>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Lavori</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>
              Importo
            </th>
            <th
              colSpan="4"
              style={{ padding: "8px", border: "1px solid #ccc" }}
            >
              FATTURA
            </th>
            <th
              colSpan="3"
              style={{ padding: "8px", border: "1px solid #ccc" }}
            >
              SAL
            </th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>
              Sal non fatturati
            </th>
          </tr>
          <tr style={{ backgroundColor: "#e6f0e6", textAlign: "center" }}>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}></th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}></th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Nodo</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>N°</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Data</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>
              Importo
            </th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>N°</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Data</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>
              Importo
            </th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}></th>
          </tr>
        </thead>
        <tbody>
          {righeConSalNonFatturato.map((r, i) => (
            <tr key={i} style={{ textAlign: "center" }}>
              <td
                style={{
                  padding: "8px",
                  border: "1px solid #ccc",
                  textAlign: "left",
                }}
              >
                <select
                  value={r.Lavoro}
                  onChange={(e) =>
                    handleRigaFatturaChange(i, "Lavoro", e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "4px",
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  <option value="">Seleziona</option>
                  {datiContratti.map((contratto, idx) => (
                    <option key={idx} value={contratto.Descrizione}>
                      {contratto.Descrizione}
                    </option>
                  ))}
                </select>
              </td>

              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                € {Number(r.CostoTemp2 || 0).toLocaleString("it-IT")}
              </td>

              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                {r.Nodo}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                {r.Numero1}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                {r.Data1 || ""}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                € {Number(r.Importo || 0).toLocaleString("it-IT")}
              </td>

              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                <input
                  type="text"
                  value={r.Numero2 || ""}
                  onChange={(e) =>
                    handleRigaFatturaChange(i, "Numero2", e.target.value)
                  }
                  style={{ width: "100%" }}
                />
              </td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                <input
                  type="date"
                  value={r.Data2 || ""}
                  onChange={(e) =>
                    handleRigaFatturaChange(i, "Data2", e.target.value)
                  }
                  style={{ width: "100%" }}
                />
              </td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                <input
                  type="number"
                  value={r.Importo2 || ""}
                  onChange={(e) =>
                    handleRigaFatturaChange(
                      i,
                      "Importo2",
                      Number(e.target.value)
                    )
                  }
                  style={{ width: "100%" }}
                />
              </td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                €{" "}
                {(
                  parseFloatSafe(r.Importo2) - parseFloatSafe(r.Importo)
                ).toLocaleString("it-IT", { minimumFractionDigits: 2 })}
              </td>
            </tr>
          ))}

          <tr
            style={{
              backgroundColor: "#ddd",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <td style={{ padding: "8px", border: "1px solid #ccc" }}>TOTALI</td>
            <td style={{ padding: "8px", border: "1px solid #ccc" }}>
              €{" "}
              {righeFatture
                .reduce((sum, r) => sum + Number(r.CostoTemp2 || 0), 0)
                .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
            </td>
            <td colSpan={3}></td>
            <td style={{ padding: "8px", border: "1px solid #ccc" }}>
              €{" "}
              {righeFatture
                .reduce((sum, r) => sum + Number(r.Importo || 0), 0)
                .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
            </td>
            <td colSpan={2}></td>
            <td style={{ padding: "8px", border: "1px solid #ccc" }}>
              €{" "}
              {righeFatture
                .reduce((sum, r) => sum + Number(r.Importo2 || 0), 0)
                .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
            </td>
            <td style={{ padding: "8px", border: "1px solid #ccc" }}>
              €{" "}
              {righeFatture
                .reduce((sum, r) => {
                  const importo2 = parseFloatSafe(r?.Importo2);
                  const importo = parseFloatSafe(r?.Importo);
                  const diff = importo2 - importo;
                  return sum + (isNaN(diff) ? 0 : diff);
                }, 0)
                .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const CommessaTecnico = () => {
  const tabsOriginali = [
    "Dati commessa",
    "Gestione contratto",
    "Costi / Ricavi",
    "Approvvigionamenti",
    "C.D.P.",
    "Cruscotto di commessa",
  ];
  const [datiProduzione, setDatiProduzione] = useState({
    percentualeAvanzamento: "0.00",
    totaleProduzione: 0,
    produzioneResidua: 0,
  });
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
        const dati = await CantiereService.ricercaCantieriArca({});
        setAllCommesse(dati);
      } catch (err) {
        console.error("Errore nel caricamento commesse:", err);
      }
    };
    fetchData();
  }, []);

  const [contratti, setContratti] = useState([]);
  const [datiContratti, setDatiContratti] = useState([]);

  useEffect(() => {
    if (!selectedCommessa?.IdCantiere) return;

    CantiereService.contrattoCommessa({
      Codice: selectedCommessa.IdCantiere,
    }).then((result) => {
      setContratti(result || []);

      const iniziali = (result || []).map((c) => {
        const costo = Number(c?.Costo || 0);
        const quantita = Number(c?.Quantita || 1);
        const produzioneTotale = costo * quantita;
        return {
          ...c,
          produzioneTotale,
          produzioneResidua: produzioneTotale,
        };
      });

      setDatiContratti(iniziali);

      // Calcolo produzione all’avvio
      const totaleImportiManuali = iniziali.reduce(
        (sum, c) => sum + Number(c.CostoTemp2 || 0),
        0
      );
      const totaleProduzioneTotale = iniziali.reduce(
        (sum, c) => sum + Number(c.produzioneTotale || 0),
        0
      );
      const produzioneResidua = iniziali.reduce(
        (sum, c) => sum + Number(c.produzioneResidua || 0),
        0
      );
      const percentualeAvanzamento =
        totaleProduzioneTotale > 0
          ? ((totaleImportiManuali / totaleProduzioneTotale) * 100).toFixed(2)
          : "0.00";

      setDatiProduzione({
        percentualeAvanzamento,
        totaleProduzione: totaleImportiManuali,
        produzioneResidua,
      });
    });
  }, [selectedCommessa?.IdCantiere]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("modalita") === "nuova") {
      Swal.fire({
        title: "Nuova commessa!",
        text: "Stai creando una nuova commessa, inserisci i campi necessari, indirizzo cantiere",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("Alert chiuso con OK");
        }
      });
    }
  }, []);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = allCommesse.filter((c) => {
        const term = searchTerm.toLowerCase();
        return (
          (c.IdCantiere &&
            c.IdCantiere.toString().toLowerCase().includes(term)) ||
          (c.Codice && c.Codice.toLowerCase().includes(term)) ||
          (c.RagioneSociale && c.RagioneSociale.toLowerCase().includes(term)) ||
          (c.Indirizzo && c.Indirizzo.toLowerCase().includes(term))
        );
      });
      setFilteredOptions(filtered.slice(0, 10));
    } else {
      setFilteredOptions([]);
    }
  }, [searchTerm, allCommesse]);

  useEffect(() => {
    const ultima = localStorage.getItem("ultimaCommessa");
    if (ultima) {
      try {
        const parsed = JSON.parse(ultima);
        setSelectedCommessa(parsed);
      } catch (err) {
        console.error("Errore parsing commessa da localStorage:", err);
      }
    }
  }, []);
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
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "Commessa creata!",
          text: "La nuova commessa è stata salvata con successo.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Errore",
          text: "C'è stato un problema durante il salvataggio della commessa.",
          icon: "error",
          confirmButtonText: "Chiudi",
        });
      }
    });
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
          {tabsVisibili.map((label) => {
            const isDisabled = !selectedCommessa;
            return (
              <div
                key={label}
                onClick={() => {
                  if (!isDisabled) setSelectedTab(label);
                }}
                style={{
                  cursor: isDisabled ? "not-allowed" : "pointer",
                  display: "table-cell",
                  textAlign: "center",
                  border: "1px solid gray",
                  backgroundColor:
                    selectedTab === label && !isDisabled
                      ? "#e3ede5"
                      : "#f5f5f5",
                  fontSize: "0.9rem",
                  padding: "0.4rem 0",
                  fontWeight: selectedTab === label ? "bold" : "normal",
                  color: isDisabled ? "#aaa" : "#333",
                  pointerEvents: isDisabled ? "none" : "auto",
                }}
              >
                {label}
              </div>
            );
          })}
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
                    localStorage.setItem(
                      "ultimaCommessa",
                      JSON.stringify(commessa)
                    ); // <-- salvataggio
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
          <GestioneContratto
            commessa={selectedCommessa}
            contratti={contratti}
            datiContratti={datiContratti}
            setDatiContratti={setDatiContratti}
            onProduzioneUpdate={(dati) => setDatiProduzione(dati)}
          />
        )}
        {selectedTab === "Costi / Ricavi" && (
          <CostiRicavi commessa={selectedCommessa} />
        )}
        {selectedTab === "Approvvigionamenti" && (
          <Approvvigionamenti commessa={selectedCommessa} />
        )}
        {selectedTab === "C.D.P." && <CDP commessa={selectedCommessa} />}
        {selectedTab === "Cruscotto di commessa" && (
          <CruscottoCommessa
            commessa={selectedCommessa}
            percentualeAvanzamento={datiProduzione.percentualeAvanzamento}
            totaleProduzione={datiProduzione.totaleProduzione}
            produzioneResidua={datiProduzione.produzioneResidua}
          />
        )}
      </div>
    </div>
  );
};

const CruscottoCommessa = ({
  commessa,
  percentualeAvanzamento,
  totaleProduzione,
  produzioneResidua,
}) => {
  const [chartData, setChartData] = useState([]);
  const [marginePerc, setMarginePerc] = useState(0);
  const [margineVal, setMargineVal] = useState(0);
  const [dataAggiornamento, setDataAggiornamento] = useState("");
  const [fattureTotali, setFattureTotali] = useState(0);
  const [costiTotali, setCostiTotali] = useState(0);

  const [datiGenerali, setDatiGenerali] = useState({
    statoDinamico: "BLOCCATO",
  });
  const [contratti, setContratti] = useState([]);
  const [datiContratti, setDatiContratti] = useState([]);
  const [righeFatture, setRigheFatture] = useState([]);

  useEffect(() => {
    if (commessa?.IdCantiere) {
      CantiereService.fattureCommessa({ Codice: commessa.IdCantiere })
        .then((result) => {
          const generate = result.map((fattura, idx) => ({
            Lavoro: "",
            Nodo: "",
            Numero1: idx + 1,
            Data1: "",
            Importo1: "",
            Numero2: "",
            CostoTemp2: "",
            Data2: "",
            Importo2: "",
            ImportoTEMP: 0,
            Id: idx + 1,
            Importo: fattura.Costo || 0,
          }));
          setRigheFatture(generate);
          const totaleFatture = result.reduce(
            (acc, fattura) => acc + (fattura.Costo || 0),
            0
          );
          setFattureTotali(totaleFatture);
        })
        .catch((err) =>
          console.error("Errore nel caricamento delle fatture:", err)
        );

      CantiereService.contrattoCommessa({ Codice: commessa.IdCantiere })
        .then((result) => setContratti(result || []))
        .catch((err) => console.error("Errore nel fetch dei contratti:", err));

      CantiereService.statoCommessa({ Codice: commessa.IdCantiere })
        .then((result) => {
          const statoPulito = result.trim().toUpperCase();
          let statoLabel = "BLOCCATO";
          if (statoPulito.includes("A")) statoLabel = "APERTO";
          else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
          else if (statoPulito.includes("C")) statoLabel = "CHIUSO";
          setDatiGenerali({ statoDinamico: statoLabel });
        })
        .catch((err) =>
          console.error("Errore nel recupero dello stato cantiere:", err)
        );

      CantiereService.graficoCommessa({ Codice: commessa.IdCantiere })
        .then((dati) => {
          const datiPerMese = {};
          let totaleCosti = 0;
          let totaleRicavi = 0;
          let ultimaData = null;

          for (const voce of dati) {
            const mese = voce.MeseAnno;
            if (!datiPerMese[mese]) {
              datiPerMese[mese] = { month: mese, costi: 0, ricavi: 0 };
            }

            if (voce.Descrizione.toLowerCase() === "costi") {
              datiPerMese[mese].costi += voce.CostoTotale;
              totaleCosti += voce.CostoTotale;
            } else if (voce.Descrizione.toLowerCase() === "ricavi") {
              datiPerMese[mese].ricavi += voce.CostoTotale;
              totaleRicavi += voce.CostoTotale;
            }

            if (!ultimaData || dayjs(mese).isAfter(dayjs(ultimaData))) {
              ultimaData = mese;
            }
          }

          const margine = totaleRicavi - totaleCosti;
          const perc = totaleRicavi
            ? ((margine / totaleRicavi) * 100).toFixed(2)
            : 0;

          setCostiTotali(totaleCosti);
          setMargineVal(margine);
          setMarginePerc(perc);
          setDataAggiornamento(dayjs(ultimaData).format("DD MMM YYYY"));

          const chart = Object.values(datiPerMese)
            .sort((a, b) => a.month.localeCompare(b.month))
            .map((el) => ({ ...el, label: dayjs(el.month).format("MMM-YY") }));

          setChartData(chart);
        })
        .catch((err) => console.error("Errore caricamento dati grafico:", err));
    }
  }, [commessa]);

  useEffect(() => {
    const iniziali = contratti.map((c) => {
      const costo = Number(c?.Costo || 0);
      const quantita = Number(c?.Quantita || 1);
      const produzioneTotale = costo * quantita;
      return {
        ...c,
        produzioneTotale,
        produzioneResidua: produzioneTotale,
      };
    });
    setDatiContratti(iniziali);
  }, [contratti]);

  const parseFloatSafe = (val) => {
    if (typeof val === "number") return val;
    if (!val || typeof val !== "string") return 0;
    const clean = val.replace(/\./g, "").replace(",", ".");
    const parsed = parseFloat(clean);
    return isNaN(parsed) ? 0 : parsed;
  };

  const totaleImportiManuali = datiContratti.reduce(
    (sum, c) => sum + Number(c.CostoTemp2 || 0),
    0
  );
  const totaleProduzioneTotale = datiContratti.reduce(
    (sum, c) => sum + Number(c.produzioneTotale || 0),
    0
  );

  const sommaImporto = righeFatture.reduce(
    (sum, r) => sum + parseFloatSafe(r.Importo),
    0
  );
  const sommaImporto2 = righeFatture.reduce(
    (sum, r) => sum + parseFloatSafe(r.Importo2),
    0
  );

  return (
    <div style={{ padding: "1rem", backgroundColor: "white" }}>
      <div
        style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}
      >
        Cod. {commessa?.IdCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
        {commessa?.Indirizzo || ""}
        <span
          style={{
            float: "right",
            backgroundColor: (() => {
              const stato = datiGenerali.statoDinamico || "";
              if (stato === "CHIUSO") return "#d32f2f";
              if (stato === "APERTO") return "#388e3c";
              return "#fbc02d";
            })(),
            color: "white",
            padding: "0.3rem 1rem",
            fontWeight: "bold",
            borderRadius: 4,
          }}
        >
          {datiGenerali?.statoDinamico || "BLOCCATO"}
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
        <span style={{ padding: "0.2rem 1rem" }}>
          {moment(dataAggiornamento).format("D MMM YYYY")}
        </span>
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
            backgroundColor: "#e0eee3",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
          }}
        >
          Margine %
          <span style={{ marginLeft: "1rem" }}>{Math.ceil(marginePerc)} %</span>
        </div>
        <div
          style={{
            backgroundColor: "#e0eee3",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
          }}
        >
          Margine di commessa
          <span style={{ marginLeft: "1rem" }}>
            € {Math.ceil(Math.abs(margineVal)).toLocaleString()}
          </span>
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
      <div
        style={{
          fontFamily: "Arial, sans-serif",

          padding: "1rem",
        }}
      >
        {/* GESTIONE FINANZIARIA */}
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          Gestione finanziaria
        </div>

        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span
            style={{
              background: "#ddd",
              padding: "0.3rem 1rem",
              borderRadius: 4,
            }}
          >
            Data aggiornamento
          </span>
          <span
            style={{
              marginLeft: 10,
              padding: "0.3rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          >
            {dataAggiornamento}
          </span>
        </div>

        {/* Bars */}
        {[
          {
            label: "Avanzamento commessa",
            text: "Avanzamento produzione: 75,90%",
            value: "€ 113.850",
            barColor: "#b6dfc4",
            rightLabel: "Produzione non salizzata",
            rightValue: "€ 13.850",
            rightBg: "#f5f5f5",
          },
          {
            label: "Avanzamento SAL",
            text: "Avanzamento SAL: 66,66%",
            value: "€ 100.000",
            barColor: "#b6dfc4",
            rightLabel: "Sal non fatturati",
            rightValue: "€ 25.000",
            rightBg: "#f5f5f5",
          },
          {
            label: "Avanzamento fatturazione",
            text: "Avanzamento fatturazione: 50 %",
            value: "€ 75.000",
            barColor: "#b6dfc4",
            rightLabel: "Produzione non fatturata",
            rightValue: "€ 33.850",
            rightBg: "#f6b6b6",
          },
        ].map((r, i) => (
          <div key={i} style={{ display: "flex", marginBottom: "0.5rem" }}>
            <div
              style={{
                width: "15%",
                background: "#eee",
                padding: "0.3rem",
                textAlign: "right",
                fontWeight: "bold",
                border: "1px solid #ccc",
              }}
            >
              {r.label}
            </div>
            <div
              style={{
                width: "55%",
                background: r.barColor,
                padding: "0.3rem",
                textAlign: "center",
                border: "1px solid #ccc",
              }}
            >
              {r.text} <strong>{r.value}</strong>
            </div>
            <div
              style={{
                width: "15%",
                background: r.rightBg,
                padding: "0.3rem",
                textAlign: "right",
                border: "1px solid #ccc",
              }}
            >
              {r.rightLabel}
            </div>
            <div
              style={{
                width: "15%",
                background: "#fff",
                padding: "0.3rem",
                textAlign: "center",
                fontWeight: "bold",
                border: "1px solid #ccc",
              }}
            >
              {r.rightValue}
            </div>
          </div>
        ))}

        {/* ESPOSIZIONE ROW */}
        <div style={{ display: "flex", marginBottom: "1.5rem" }}>
          <div
            style={{
              width: "15%",
              background: "#eee",
              padding: "0.3rem",
              textAlign: "right",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            Esposizione
          </div>
          <div
            style={{
              width: "20%",
              background: "#ffe8a1",
              padding: "0.3rem",
              textAlign: "center",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            €{" "}
            {(costiTotali - fattureTotali).toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>
          <div
            style={{
              width: "15%",
              background: "#eee",
              padding: "0.3rem",
              textAlign: "right",
              border: "1px solid #ccc",
            }}
          >
            Costi sostenuti
          </div>
          <div
            style={{
              width: "20%",
              background: "#f6b6b6",
              padding: "0.3rem",
              textAlign: "center",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            €{" "}
            {costiTotali.toLocaleString("it-IT", { minimumFractionDigits: 2 })}
          </div>

          <div
            style={{
              width: "15%",
              background: "#eee",
              padding: "0.3rem",
              textAlign: "right",
              border: "1px solid #ccc",
            }}
          >
            Fatture emesse
          </div>
          <div
            style={{
              width: "15%",
              background: "#d7f0d7",
              padding: "0.3rem",
              textAlign: "center",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            € {fattureTotali.toLocaleString("it-IT")}
          </div>
        </div>

        {/* ANDAMENTO PRODUZIONE */}
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          Andamento produzione
        </div>

        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span
            style={{
              background: "#ddd",
              padding: "0.3rem 1rem",
              borderRadius: 4,
            }}
          >
            Data aggiornamento
          </span>
          <span
            style={{
              marginLeft: 10,
              padding: "0.3rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          >
            {dataAggiornamento}
          </span>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          {/* Avanzamento produzione */}
          <div
            style={{
              width: "50%",
              background: "#b6dfc4",
              padding: "0.3rem",
              textAlign: "center",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            Avanzamento produzione: {percentualeAvanzamento}% €{" "}
            {Number(totaleProduzione).toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>

          {/* Lavori residui */}
          <div
            style={{
              width: "50%",
              background: "#eee",
              padding: "0.3rem",
              textAlign: "center",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            Lavori residui: €{" "}
            {Number(produzioneResidua).toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>
        </div>

        <div
          style={{
            width: "100%",
            borderTop: "1px solid #ccc",
            paddingTop: "1rem",
            textAlign: "center",
            color: "gray",
          }}
        >
          {/* Placeholder grafico */}
          <div style={{ fontStyle: "italic" }}>
            <GraficoCostiMese
              chartData={chartData}
              dataAggiornamento={dataAggiornamento}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const GraficoCostiMese = ({ chartData, dataAggiornamento }) => {
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "EUR",
              }).format(value)
            }
          />
          <Bar dataKey="costi" fill="#90D19C" name="Costi mese" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CDP = ({ commessa }) => {
  const [righe, setRighe] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [datiGenerali, setDatiGenerali] = useState({
    statoDinamico: "BLOCCATO",
  });

  useEffect(() => {
    const fetchStato = async () => {
      if (commessa?.IdCantiere) {
        try {
          const result = await CantiereService.statoCommessa({
            Codice: commessa.IdCantiere,
          });

          const statoGrezzo = result;
          const statoPulito = statoGrezzo.trim().toUpperCase();

          let statoLabel = "BLOCCATO";
          if (statoPulito.includes("A")) statoLabel = "APERTO";
          else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
          else if (statoPulito.includes("C")) statoLabel = "CHIUSO";

          setDatiGenerali((prev) => ({
            ...prev,
            statoDinamico: statoLabel,
          }));
        } catch (error) {
          console.error("Errore nel recupero dello stato cantiere:", error);
        }
      }
    };

    fetchStato();
  }, [commessa?.IdCantiere]);

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
              const stato = datiGenerali.statoDinamico || "";
              if (stato === "CHIUSO") return "#d32f2f";
              if (stato === "APERTO") return "#388e3c";
              return "#fbc02d";
            })(),
            color: "white",
            padding: "0.3rem 1rem",
            fontWeight: "bold",
            borderRadius: 4,
          }}
        >
          {datiGenerali?.statoDinamico || "BLOCCATO"}
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
            maxWidth: "60%",
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

  const [datiGenerali2, setDatiGenerali2] = useState({
    statoDinamico: "BLOCCATO",
  });

  useEffect(() => {
    const fetchStato = async () => {
      if (commessa?.IdCantiere) {
        try {
          const result = await CantiereService.statoCommessa({
            Codice: commessa.IdCantiere,
          });

          const statoGrezzo = result;
          const statoPulito = statoGrezzo.trim().toUpperCase();

          let statoLabel = "BLOCCATO";
          if (statoPulito.includes("A")) statoLabel = "APERTO";
          else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
          else if (statoPulito.includes("C")) statoLabel = "CHIUSO";

          setDatiGenerali2((prev) => ({
            ...prev,
            statoDinamico: statoLabel,
          }));
        } catch (error) {
          console.error("Errore nel recupero dello stato cantiere:", error);
        }
      }
    };

    fetchStato();
  }, [commessa?.IdCantiere]);

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
              const stato = datiGenerali2?.statoDinamico || "";
              if (stato === "CHIUSO") return "#d32f2f";
              if (stato === "APERTO") return "#388e3c";
              return "#fbc02d";
            })(),
            color: "white",
            padding: "0.3rem 1rem",
            fontWeight: "bold",
            borderRadius: 4,
          }}
        >
          {datiGenerali2?.statoDinamico || "BLOCCATO"}
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
                  backgroundColor: "#e0eee3",
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
