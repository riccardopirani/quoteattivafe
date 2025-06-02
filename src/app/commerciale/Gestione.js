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
import { BASE_URL } from "../services/api";
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
import GestioneContratto from "./GestioneContratto.js";
moment.locale("it");

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
  const [righeValori, setRigheValori] = useState([]);
  const [documentiArchivio, setDocumentiArchivio] = useState([]);
  const [datiExternal, setDatiExternal] = useState([]);
  const [datiGenerali, setDatiGenerali] = useState({
    statoDinamico: "BLOCCATO",
  });
  const [sezioni, setSezioni] = useState([]);
  useEffect(() => {
    const fetchStato = async () => {
      if (commessa?.IdCantiere) {
        try {
          const result = await CantiereService.statoCommessa({
            Codice: commessa.NomeCantiere,
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
  const aggiungiRigaValore = () => {
    setRigheValori((prev) => [...prev, { tipo: "", valore: "", note: "" }]);
  };
  useEffect(() => {
    const caricaCostiManuali = async () => {
      if (!commessa?.IdCantiere) return;

      try {
        const tuttiCosti = await CantiereService.leggiCosti(
          commessa.IdCantiere,
        );

        // Filtra quelli che sono "liberi" o non associati a nodi ARCA
        const righeManuali = tuttiCosti.map((c) => ({
          tipo: c.Nome,
          valore: c.Importo,
          note: c.Note || "",
        }));

        setRigheValori(righeManuali);
      } catch (err) {
        console.error("Errore nel caricamento dei costi manuali:", err);
      }
    };

    caricaCostiManuali();
  }, [commessa?.IdCantiere]);

  useEffect(() => {
    if (!commessa?.IdCantiere) return;

    const fetchData = async () => {
      try {
        const dati = await CantiereService.nodidettagli({
          Codice: commessa.NomeCantiere,
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
  const salvaRigheValori = async () => {
    if (!commessa?.IdCantiere) {
      alert("Cantiere non selezionato.");
      return;
    }

    const righeValide = righeValori.filter(
      (r) => r.tipo && !isNaN(parseFloat(r.valore)),
    );

    if (righeValide.length === 0) {
      alert("Nessuna riga valida da salvare.");
      return;
    }

    let success = true;
    for (const riga of righeValide) {
      try {
        await CantiereService.creaCosto({
          IdCantiere: commessa.IdCantiere,
          Nome: riga.tipo,
          Note: riga.note || "",
          Importo: parseFloat(riga.valore),
        });
      } catch (err) {
        console.error("Errore creazione riga costo:", err);
        alert("Errore durante il salvataggio di una riga.");
        success = false;
      }
    }

    if (success) {
      alert("Costi salvati con successo!");
    }
  };

  const aggiungiRiga = async (index) => {
    const sezioneCorrente = sezioni[index];

    if (!commessa?.IdCantiere || !sezioneCorrente?.nodo) return;

    const nuovoNodo = {
      IdCantiere: commessa.IdCantiere,
      Nome: `${sezioneCorrente.titolo} - Riga manuale`,
      Note: `Aggiunto da interfaccia - nodo ${sezioneCorrente.nodo}`,
      Importo: 0.0,
    };

    try {
      const result = await CantiereService.creaCosto(nuovoNodo);

      if (result?.return === true || result === true) {
        // Solo dopo creazione lato server, aggiorno localmente
        const nuovo = [...sezioni];
        nuovo[index].sotto.push({
          codice: "",
          descrizione: nuovoNodo.Nome,
          costo: nuovoNodo.Importo,
        });
        setSezioni(nuovo);
      } else {
        alert("Errore durante la creazione della riga.");
      }
    } catch (error) {
      console.error("Errore API creaCosto:", error);
      alert("Errore durante la chiamata al server.");
    }
  };

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
          <tr>
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
                    marginLeft: "50px",
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
      <div style={{ marginTop: "2rem" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "1rem", // aumentato da 0.85rem
            border: "1px solid #bbb",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#e0e0e0" }}>
              <th style={{ border: "1px solid #bbb", padding: "0.75rem" }}>
                Tipo
              </th>
              <th style={{ border: "1px solid #bbb", padding: "0.75rem" }}>
                Valore (€)
              </th>
              <th style={{ border: "1px solid #bbb", padding: "0.75rem" }}>
                Note / Campo libero
              </th>
            </tr>
          </thead>
          <tbody>
            {righeValori.map((riga, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #bbb", padding: "0.75rem" }}>
                  <select
                    value={riga.tipo}
                    onChange={(e) => {
                      const nuovo = [...righeValori];
                      nuovo[index].tipo = e.target.value;
                      setRigheValori(nuovo);
                    }}
                    style={{
                      width: "100%",
                      fontSize: "1rem",
                      padding: "0.4rem",
                    }}
                  >
                    <option value="">-- Seleziona --</option>
                    <option value="SIL">SIL</option>
                    <option value="SAL">SAL</option>
                    <option value="C.P">C.P</option>
                  </select>
                </td>
                <td style={{ border: "1px solid #bbb", padding: "0.75rem" }}>
                  <input
                    type="number"
                    value={riga.valore}
                    onChange={(e) => {
                      const nuovo = [...righeValori];
                      nuovo[index].valore = e.target.value;
                      setRigheValori(nuovo);
                    }}
                    placeholder="0.00"
                    style={{
                      width: "100%",
                      fontSize: "1rem",
                      padding: "0.4rem",
                    }}
                  />
                </td>
                <td style={{ border: "1px solid #bbb", padding: "0.75rem" }}>
                  <input
                    type="text"
                    value={riga.note}
                    onChange={(e) => {
                      const nuovo = [...righeValori];
                      nuovo[index].note = e.target.value;
                      setRigheValori(nuovo);
                    }}
                    placeholder="Inserisci note..."
                    style={{
                      width: "100%",
                      fontSize: "1rem",
                      padding: "0.4rem",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: "1rem", textAlign: "right" }}>
          <button
            onClick={aggiungiRigaValore}
            style={{
              padding: "0.6rem 1.2rem",
              backgroundColor: "#e0f7fa",
              border: "1px solid #0097a7",
              borderRadius: 4,
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            + Aggiungi riga
          </button>
        </div>
      </div>

      <br></br>
      <button
        onClick={salvaRigheValori}
        style={{
          marginTop: "1rem",
          padding: "0.4rem 1rem",
          backgroundColor: "#d0f0c0",
          border: "1px solid #008000",
          borderRadius: 4,
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        💾 Salva righe
      </button>
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
  const [users, setUsers] = useState([]);
  const prevCantiereId = useRef(null);
  const inizializzato = useRef(false);
  const [error, setError] = useState(null);
  const skipDateUpdate = useRef(true);
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
    AnagraficaCliente_Nome: "",
    AnagraficaCliente_Telefono: "",
    AnagraficaCliente_Email: "",
    AnagraficaDI_Nome: "",
    AnagraficaDI_Telefono: "",
    AnagraficaDI_Email: "",
    AnagraficaProgettista_Nome: "",
    AnagraficaProgettista_Telefono: "",
    AnagraficaProgettista_Email: "",
    AnagraficaCSE_Nome: "",
    AnagraficaCSE_Telefono: "",
    AnagraficaCSE_Email: "",
  });

  const [datiGenerali2, setDatiGenerali2] = useState({
    statoDinamico: "APERTO",
  });

  useEffect(() => {
    if (datiGenerali.indirizzo && typeof datiGenerali.indirizzo === "string") {
      const encodedAddress = encodeURIComponent(datiGenerali.indirizzo);
      const url = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
      setMappaUrl(url);
    }
  }, [datiGenerali.indirizzo]);

  useEffect(() => {
    const caricaCommessa = async () => {
      let id = new URLSearchParams(window.location.search).get("codice");
      if (!id) {
        const saved = localStorage.getItem("ultimaCommessa");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            id = parsed?.IdCantiere;
          } catch (e) {
            console.warn("Errore parsing localStorage:", e);
          }
        }
      }

      if (id && !commessa) {
        try {
          const result = await CantiereService.caricaCommessa(id);
          commessa = result;
          localStorage.setItem("ultimaCommessa", JSON.stringify(result));
        } catch (err) {
          console.error("Errore nel caricamento della commessa:", err);
        }
      }
    };

    caricaCommessa();
  }, []);

  useEffect(() => {
    const fetchStato = async () => {
      if (commessa?.IdCantiere) {
        try {
          const result = await CantiereService.statoCommessa({
            Codice: commessa.NomeCantiere,
          });
          const statoPulito = result.trim().toUpperCase();
          let statoLabel = "BLOCCATO";
          if (statoPulito.includes("A")) statoLabel = "APERTO";
          else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
          else if (statoPulito.includes("C")) statoLabel = "CHIUSO";
          setDatiGenerali2((prev) => ({ ...prev, statoDinamico: statoLabel }));
        } catch (error) {
          console.error("Errore nel recupero dello stato cantiere:", error);
        }
      }
    };
    fetchStato();
  }, [commessa?.IdCantiere]);

  useEffect(() => {}, [dataInizio, dataFine]);
  useEffect(() => {
    if (commessa && commessa.IdCantiere && !inizializzato.current) {
      setDatiGenerali({
        codice: commessa.NomeCantiere || "",
        cliente: commessa.RagioneSociale || "",
        indirizzo: commessa.Indirizzo || "",
        tipoLavori: commessa.TipoLavori || "",
        tipoAppalto: commessa.TipoAppalto || "",
        respUfficio: commessa.ResponsabileUfficio || "",
        respCantiere: commessa.ResponsabileCantiere || "",
        contratto: commessa.LinkCartellaContratto || "",
        centroCosto: commessa.LinkCentroDiCosto || "",
        gant: commessa.LinkGantt || "",
        condivisione: commessa.LinkCartellaCondivisione || "",
        sicurezza: commessa.LinkCartellaSicurezza || "",
        foto: commessa.LinkCartellaFoto || "",
        AnagraficaCliente_Nome: commessa.AnagraficaCliente_Nome || "",
        AnagraficaCliente_Telefono: commessa.AnagraficaCliente_Telefono || "",
        AnagraficaCliente_Email: commessa.AnagraficaCliente_Email || "",
        AnagraficaDI_Nome: commessa.AnagraficaDI_Nome || "",
        AnagraficaDI_Telefono: commessa.AnagraficaDI_Telefono || "",
        AnagraficaDI_Email: commessa.AnagraficaDI_Email || "",
        AnagraficaProgettista_Nome: commessa.AnagraficaProgettista_Nome || "",
        AnagraficaProgettista_Telefono:
          commessa.AnagraficaProgettista_Telefono || "",
        AnagraficaProgettista_Email: commessa.AnagraficaProgettista_Email || "",
        AnagraficaCSE_Nome: commessa.AnagraficaCSE_Nome || "",
        AnagraficaCSE_Telefono: commessa.AnagraficaCSE_Telefono || "",
        AnagraficaCSE_Email: commessa.AnagraficaCSE_Email || "",
      });

      setDataInizio(
        commessa.DataInizio ? new Date(commessa.DataInizio) : new Date(),
      );
      setDataFine(commessa.DataFine ? new Date(commessa.DataFine) : new Date());
      fetchUsers(commessa.ResponsabileUfficio, commessa.ResponsabileCantiere);
      inizializzato.current = true;
    }
  }, [commessa]);
  const handleChange = (field) => async (e) => {
    const value = e.target.value ?? "";
    const nuovo = { ...datiGenerali, [field]: value };
    setDatiGenerali(nuovo);

    if (commessa && commessa.IdCantiere) {
      await CantiereService.aggiornaCantiere({
        IdCantiere: commessa.IdCantiere,
        Stato: datiGenerali2?.statoDinamico ?? "BLOCCATO",
        DescrizioneEstesa: "",
        StatoFatturazione: 0,
        NomeCantiere: nuovo.codice,
        CommessaCliente: nuovo.codice,
        IndirizzoCantiere: nuovo.indirizzo,
        TipoLavori: nuovo.tipoLavori,
        TipoAppalto: nuovo.tipoAppalto,
        ResponsabileUfficio: nuovo.respUfficio,
        ResponsabileCantiere: nuovo.respCantiere,
        LinkCartellaContratto: nuovo.contratto,
        LinkCentroDiCosto: nuovo.centroCosto,
        LinkGantt: nuovo.gant,
        LinkCartellaCondivisione: nuovo.condivisione,
        LinkCartellaSicurezza: nuovo.sicurezza,
        LinkCartellaFoto: nuovo.foto,
        DataInizio: dataInizio.toISOString(),
        DataFine: dataFine.toISOString(),
        AnagraficaCliente_Nome: nuovo.AnagraficaCliente_Nome,
        AnagraficaCliente_Telefono: nuovo.AnagraficaCliente_Telefono,
        AnagraficaCliente_Email: nuovo.AnagraficaCliente_Email,
        AnagraficaDI_Nome: nuovo.AnagraficaDI_Nome,
        AnagraficaDI_Telefono: nuovo.AnagraficaDI_Telefono,
        AnagraficaDI_Email: nuovo.AnagraficaDI_Email,
        AnagraficaProgettista_Nome: nuovo.AnagraficaProgettista_Nome,
        AnagraficaProgettista_Telefono: nuovo.AnagraficaProgettista_Telefono,
        AnagraficaProgettista_Email: nuovo.AnagraficaProgettista_Email,
        AnagraficaCSE_Nome: nuovo.AnagraficaCSE_Nome,
        AnagraficaCSE_Telefono: nuovo.AnagraficaCSE_Telefono,
        AnagraficaCSE_Email: nuovo.AnagraficaCSE_Email,
      });
    }
  };

  const fetchUsers = async (respUfficio, respCantiere) => {
    try {
      const res = await fetch(`${BASE_URL}/RisorseUmane/CaricaRisorse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      const data = await res.json();
      const nomiEsistenti = new Set(data.map((u) => u.Nome));

      if (respUfficio && !nomiEsistenti.has(respUfficio)) {
        data.unshift({
          IdUtente: "ufficio-selezionato",
          Nome: respUfficio,
        });
      }

      if (respCantiere && !nomiEsistenti.has(respCantiere)) {
        data.unshift({
          IdUtente: "cantiere-selezionato",
          Nome: respCantiere,
        });
      }

      setUsers(data);
    } catch (error) {
      console.error("Errore caricamento utenti:", error);
      setError("Errore caricamento utenti.");
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^\+?\d{7,15}$/.test(phone);
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
                dateFormat="dd/MM/yyyy"
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
                dateFormat="dd/MM/yyyy"
                // opzionale: customInput={<CustomInput />}
              />
            </div>
          </div>
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
                        {label === "Resp. Ufficio" ? (
                          <>
                            {datiGenerali.respUfficio && (
                              <div
                                style={{
                                  marginBottom: "0.4rem",
                                  fontStyle: "italic",
                                  color: "#555",
                                }}
                              >
                                Attuale: {datiGenerali.respUfficio}
                              </div>
                            )}
                            <select
                              value={datiGenerali.respUfficio}
                              onChange={async (e) => {
                                const selected = e.target.value;
                                setDatiGenerali((prev) => ({
                                  ...prev,
                                  respUfficio: selected,
                                }));
                                await handleChange("respUfficio")({
                                  target: { value: selected },
                                });
                              }}
                              style={{
                                width: "100%",
                                padding: "0.6rem 1rem",
                                fontSize: "1rem",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                appearance: "none",
                                backgroundColor: "#fff",
                                backgroundImage:
                                  "url(\"data:image/svg+xml;utf8,<svg fill='%23666' height='10' viewBox='0 0 10 6' width='10' xmlns='http://www.w3.org/2000/svg'><path d='M0 0l5 6 5-6z'/></svg>\")",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 1rem center",
                                backgroundSize: "12px",
                                color: "#333",
                                transition: "all 0.3s ease",
                                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                              }}
                            >
                              <option value="">Seleziona responsabile</option>
                              {users.map((user) => (
                                <option key={user.IdUtente} value={user.Nome}>
                                  {user.Nome}
                                </option>
                              ))}
                            </select>
                          </>
                        ) : label === "Resp. Cantiere" ? (
                          <>
                            {datiGenerali.respCantiere && (
                              <div
                                style={{
                                  marginBottom: "0.4rem",
                                  fontStyle: "italic",
                                  color: "#555",
                                }}
                              >
                                Attuale: {datiGenerali.respCantiere}
                              </div>
                            )}
                            <select
                              value={datiGenerali.respCantiere}
                              onChange={async (e) => {
                                const selected = e.target.value;
                                setDatiGenerali((prev) => ({
                                  ...prev,
                                  respCantiere: selected,
                                }));
                                await handleChange("respCantiere")({
                                  target: { value: selected },
                                });
                              }}
                              style={{
                                width: "100%",
                                padding: "0.6rem 1rem",
                                fontSize: "1rem",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                appearance: "none",
                                backgroundColor: "#fff",
                                backgroundImage:
                                  "url(\"data:image/svg+xml;utf8,<svg fill='%23666' height='10' viewBox='0 0 10 6' width='10' xmlns='http://www.w3.org/2000/svg'><path d='M0 0l5 6 5-6z'/></svg>\")",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 1rem center",
                                backgroundSize: "12px",
                                color: "#333",
                                transition: "all 0.3s ease",
                                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                              }}
                            >
                              <option value="">Seleziona responsabile</option>
                              {users.map((user) => (
                                <option key={user.IdUtente} value={user.Nome}>
                                  {user.Nome}
                                </option>
                              ))}
                            </select>
                          </>
                        ) : (
                          <input
                            type="text"
                            value={datiGenerali[key] ?? ""}
                            onChange={handleChange(key)}
                            placeholder={`Inserisci ${label}`}
                            style={{ width: "100%", border: "none" }}
                          />
                        )}
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
              {/* Cliente & D.I. */}
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
                    value={datiGenerali.AnagraficaCliente_Nome}
                    onChange={handleChange("AnagraficaCliente_Nome")}
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
                    value={datiGenerali.AnagraficaDI_Nome}
                    onChange={handleChange("AnagraficaDI_Nome")}
                    placeholder="Nome"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCliente_Telefono}
                    onChange={handleChange("AnagraficaCliente_Telefono")}
                    placeholder="Telefono"
                    style={{
                      width: "100%",
                      border: isValidPhone(
                        datiGenerali.AnagraficaCliente_Telefono,
                      )
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaDI_Telefono}
                    onChange={handleChange("AnagraficaDI_Telefono")}
                    placeholder="Telefono"
                    style={{
                      width: "100%",
                      border: isValidPhone(datiGenerali.AnagraficaDI_Telefono)
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCliente_Email}
                    onChange={handleChange("AnagraficaCliente_Email")}
                    placeholder="Email"
                    style={{
                      width: "100%",
                      border: isValidEmail(datiGenerali.AnagraficaCliente_Email)
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaDI_Email}
                    onChange={handleChange("AnagraficaDI_Email")}
                    placeholder="Email"
                    style={{
                      width: "100%",
                      border: isValidEmail(datiGenerali.AnagraficaDI_Email)
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
              </tr>

              {/* Progettista & C.S.E. */}
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
                    value={datiGenerali.AnagraficaProgettista_Nome}
                    onChange={handleChange("AnagraficaProgettista_Nome")}
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
                  C.S.E.
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCSE_Nome}
                    onChange={handleChange("AnagraficaCSE_Nome")}
                    placeholder="Nome"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaProgettista_Telefono}
                    onChange={handleChange("AnagraficaProgettista_Telefono")}
                    placeholder="Telefono"
                    style={{
                      width: "100%",
                      border: isValidPhone(
                        datiGenerali.AnagraficaProgettista_Telefono,
                      )
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCSE_Telefono}
                    onChange={handleChange("AnagraficaCSE_Telefono")}
                    placeholder="Telefono"
                    style={{
                      width: "100%",
                      border: isValidPhone(datiGenerali.AnagraficaCSE_Telefono)
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaProgettista_Email}
                    onChange={handleChange("AnagraficaProgettista_Email")}
                    placeholder="Email"
                    style={{
                      width: "100%",
                      border: isValidEmail(
                        datiGenerali.AnagraficaProgettista_Email,
                      )
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCSE_Email}
                    onChange={handleChange("AnagraficaCSE_Email")}
                    placeholder="Email"
                    style={{
                      width: "100%",
                      border: isValidEmail(datiGenerali.AnagraficaCSE_Email)
                        ? "none"
                        : "1px solid red",
                    }}
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

const CommessaTecnico = () => {
  const tabsOriginali = [
    "Dati commessa",
    "Gestione contratto",
    "Costi / Ricavi",
    "Approvvigionamenti",
    "C.D.P.",
    "Cruscotto di commessa",
  ];

  const [parametriIniziali, setParametriIniziali] = useState(null);
  const [hasLoadedCommessaIniziale, setHasLoadedCommessaIniziale] =
    useState(false);

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
  const [contratti, setContratti] = useState([]);
  const [datiContratti, setDatiContratti] = useState([]);

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
    const isNuova = params.get("modalita") === "nuova";
    const codice = params.get("codice");

    if (isNuova && codice) {
      setParametriIniziali({ isNuova, codice });
    }
  }, []);

  useEffect(() => {
    if (!selectedCommessa?.IdCantiere) return;

    // Reset degli stati relativi alla commessa precedente
    setDatiContratti([]);
    setContratti([]);
    setDatiProduzione({
      percentualeAvanzamento: "0.00",
      totaleProduzione: 0,
      produzioneResidua: 0,
    });
  }, [selectedCommessa?.IdCantiere]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchTerm.trim().length >= 2) {
        try {
          const risultati = await CantiereService.ricercaCantieri({});
          setFilteredOptions(risultati || []);
        } catch (err) {
          console.error("Errore nella ricerca delle commesse:", err);
          setFilteredOptions([]);
        }
      } else {
        setFilteredOptions([]);
      }
    }, 300); // debounce 300ms

    return () => clearTimeout(timer);
  }, [searchTerm]);

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
              width: "180px",
              height: "3px",
              backgroundColor: "#999",
              borderRadius: 2,
            }}
          />
        </div>

        <br />
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
                    JSON.stringify(commessa),
                  );
                  setSearchTerm(" "); // Forza valore unico per consentire successivo retyping
                  setFilteredOptions([]);
                }}
                style={{
                  padding: "0.5rem",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
              >
                <strong>{commessa.NomeCantiere}</strong> -{" "}
                {commessa.RagioneSociale}
                {commessa.Indirizzo && ` (${commessa.Indirizzo})`}
              </div>
            ))}
          </div>
        )}

        {selectedTab === "Dati commessa" && (
          <DatiCommessa
            key={selectedCommessa?.IdCantiere} // <-- AGGIUNTO
            commessa={selectedCommessa}
            onComplete={handleComplete}
          />
        )}
        {selectedTab === "Gestione contratto" && (
          <GestioneContratto
            key={selectedCommessa?.IdCantiere}
            commessa={selectedCommessa}
            contratti={contratti}
            datiContratti={datiContratti}
            setDatiContratti={setDatiContratti}
            onProduzioneUpdate={(dati) => setDatiProduzione(dati)}
          />
        )}

        {selectedTab === "Costi / Ricavi" && (
          <CostiRicavi
            key={selectedCommessa?.IdCantiere}
            commessa={selectedCommessa}
          />
        )}

        {selectedTab === "Approvvigionamenti" && (
          <Approvvigionamenti
            key={selectedCommessa?.IdCantiere}
            commessa={selectedCommessa}
          />
        )}

        {selectedTab === "C.D.P." && (
          <CDP key={selectedCommessa?.IdCantiere} commessa={selectedCommessa} />
        )}

        {selectedTab === "Cruscotto di commessa" &&
          selectedCommessa != null && (
            <CruscottoCommessa
              key={selectedCommessa?.IdCantiere}
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
      CantiereService.statoCommessa({ Codice: commessa.NomeCantiere })
        .then((result) => {
          const statoPulito = result.trim().toUpperCase();
          let statoLabel = "BLOCCATO";
          if (statoPulito.includes("A")) statoLabel = "APERTO";
          else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
          else if (statoPulito.includes("C")) statoLabel = "CHIUSO";
          setDatiGenerali({ statoDinamico: statoLabel });
        })
        .catch((err) =>
          console.error("Errore nel recupero dello stato cantiere:", err),
        );

      CantiereService.graficoCommessa({ Codice: commessa.NomeCantiere })
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
    const fetchStato = async () => {
      if (!commessa?.NomeCantiere) return;

      try {
        const result = await CantiereService.statoCommessa({
          Codice: commessa.NomeCantiere,
        });

        const statoPulito = result?.trim().toUpperCase();
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
    };

    fetchStato();
  }, [contratti]);

  const parseFloatSafe = (val) => {
    if (typeof val === "number") return val;
    if (!val || typeof val !== "string") return 0;
    const clean = val.replace(/\./g, "").replace(",", ".");
    const parsed = parseFloat(clean);
    return isNaN(parsed) ? 0 : parsed;
  };

  return (
    <div style={{ padding: "1rem", backgroundColor: "white" }}>
      <div
        style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}
      >
        Cod. {commessa?.NomeCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
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

const GraficoCostiMese = ({ chartData }) => {
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
            Codice: commessa.NomeCantiere,
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
          Cod. {commessa?.NomeCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
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
            Codice: commessa.NomeCantiere,
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
          Cod. {commessa?.NomeCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
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
