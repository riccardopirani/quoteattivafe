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
import CDPService from "../services/cdp"; // Assicurati che il file esista con metodi: crea, leggi, aggiorna, elimina
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/it";

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
      sezioniBase.map((s) => [s.nodo, { ...s, sotto: [] }]),
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
      .map((el) => Number(el.costo) || 0),
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
            return "#fbc02d"; // BLOCCATO o default
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
        datiGenerali.indirizzo,
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
      },
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
          indirizzo,
        )}&format=json&limit=1`,
      );
      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];

        // Fallback su una mappa satellite statica generica

        // Proviamo a costruire un'immagine da Wikimedia Maps (stile standard, nessun token)

        // Ma poiché il server di Wikimedia non genera immagini così direttamente,
        // ci basiamo su OpenStreetMap tile via iframe o non usiamo più un'immagine vera, ma l'iframe mappa stesso.

        setZonaImageUrl(
          `https://www.openstreetmap.org/export/embed.html?bbox=${
            lon - 0.005
          },${lat - 0.005},${lon + 0.005},${
            lat + 0.005
          }&layer=mapnik&marker=${lat},${lon}`,
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
                return "#fbc02d"; // BLOCCATO o default
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

const GestioneContratto = ({ commessa }) => {
  const [datiGenerali2, setDatiGenerali2] = useState({
    statoDinamico: "BLOCCATO",
  });
  const [contratti, setContratti] = useState([]);

  const handleChange = (index, field, value) => {
    const newContratti = [...contratti];
    newContratti[index] = {
      ...newContratti[index],
      [field]: value,
    };
    setContratti(newContratti);
  };

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
            return "#fbc02d"; // BLOCCATO o default
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
          {contratti.map((contratto, index) => {
            const costo = Number(contratto?.Costo || 0);
            const quantita = Number(contratto?.Quantita || 1);
            const produzioneTotale = costo * quantita;
            const produzioneResidua = produzioneTotale; // Puoi cambiare la logica se serve

            return (
              <tr key={index}>
                <td style={cellStyle}>
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
                    type="number"
                    step="0.01"
                    value={contratto?.Costo}
                    onChange={(e) =>
                      handleChange(index, "Costo", e.target.value)
                    }
                    style={{ width: "100%" }}
                  />
                </td>
                <td style={cellStyle}>
                  €
                  {produzioneTotale.toLocaleString("it-IT", {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td style={cellStyle}>
                  €
                  {produzioneResidua.toLocaleString("it-IT", {
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
            );
          })}

          <tr>
            <td style={cellStyle} colSpan="2">
              TOTALI
            </td>
            <td style={cellStyle}>
              €
              {contratti
                .reduce((tot, c) => tot + Number(c?.Costo || 0), 0)
                .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
            </td>
            <td style={cellStyle}>
              €
              {contratti
                .reduce(
                  (tot, c) =>
                    tot + Number(c?.Costo || 0) * Number(c?.Quantita || 1),
                  0,
                )
                .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
            </td>
            <td style={cellStyle}>
              €
              {contratti
                .reduce(
                  (tot, c) =>
                    tot + Number(c?.Costo || 0) * Number(c?.Quantita || 1),
                  0,
                )
                .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
            </td>
          </tr>
        </tbody>
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

const CruscottoCommessa = ({ commessa }) => {
  const [chartData, setChartData] = useState([]);
  const [marginePerc, setMarginePerc] = useState(0);
  const [margineVal, setMargineVal] = useState(0);
  const [dataAggiornamento, setDataAggiornamento] = useState("");

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
    const fetchGrafico = async () => {
      try {
        const dati = await CantiereService.graficoCommessa({
          Codice: commessa.IdCantiere,
        });

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

          if (!ultimaData || dayjs(mese) > dayjs(ultimaData)) {
            ultimaData = mese;
          }
        }

        const chart = Object.values(datiPerMese).sort((a, b) =>
          a.month.localeCompare(b.month),
        );
        setChartData(chart);

        const margine = totaleRicavi - totaleCosti;
        const perc = totaleRicavi
          ? ((margine / totaleRicavi) * 100).toFixed(2)
          : 0;

        setMargineVal(margine);
        setMarginePerc(perc);
        setDataAggiornamento(dayjs(ultimaData).format("DD MMM YYYY"));
      } catch (error) {
        console.error("Errore caricamento dati grafico:", error);
      }
    };

    if (commessa?.IdCantiere) fetchGrafico();
  }, [commessa]);

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
              return "#fbc02d"; // BLOCCATO o default
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
          Margine %<span style={{ marginLeft: "1rem" }}>{marginePerc} %</span>
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
            € {margineVal.toLocaleString()}
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
              return "#fbc02d"; // BLOCCATO o default
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
          console.error("Errore nel caricamento approvvigionamenti:", err),
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
              return "#fbc02d"; // BLOCCATO o default
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
                          "Sei sicuro di voler eliminare questo approvvigionamento?",
                        )
                      ) {
                        try {
                          await ApprovvigionamentoService.elimina(
                            editingItem.Numero,
                          );
                          const updated = await ApprovvigionamentoService.leggi(
                            commessa?.IdCantiere,
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
