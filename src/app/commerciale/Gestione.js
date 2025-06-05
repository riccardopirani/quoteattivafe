import React, { useState, useEffect, useMemo } from "react";
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
import html2canvas from "html2canvas";
import { useRef } from "react";
import dayjs from "dayjs";
import CDPService from "../services/cdp";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/it";
import { BarChart, Bar } from "recharts";
import CruscottoCommessa from "./CruscottoCommessa.js";
import "sweetalert2/dist/sweetalert2.min.css";
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
  const [loadingArchivio, setLoadingArchivio] = useState(false);
  const [sezioni, setSezioni] = useState([]);
  const [dataAggiornamento, setDataAggiornamento] = useState(null);
  const [margineCommessa, setMargineCommessa] = useState(0);
  const [marginePercentuale, setMarginePercentuale] = useState(0);

  const generaCostiRicavi = async () => {
    let totaleMDC = 0;
    let totaleRicavi = 0;

    sezioni.forEach((sezione) => {
      sezione.sotto.forEach((sotto) => {
        const aggiornato = +sotto.aggiornatoAl || 0;
        const contabilita = +sotto.contabilita || 0;
        const daContabilizzare = +sotto.daContabilizzare || 0;

        const ricaviRaffronto = contabilita + daContabilizzare;
        const mdc = ricaviRaffronto - aggiornato;

        totaleRicavi += ricaviRaffronto;
        totaleMDC += mdc;
      });
    });

    const marginePercentuale =
      totaleRicavi !== 0 ? (totaleMDC / totaleRicavi) * 100 : 0;
    setMargineCommessa(totaleMDC);
    setMarginePercentuale(marginePercentuale);
    setDataAggiornamento(new Date());

    const data = {
      IdCantiere: commessa?.IdCantiere,
      Data: new Date(),
      Margine: marginePercentuale,
    };

    await CantiereService.aggiornaMargineCosti(data);

    try {
      const element = contentRef.current;
      if (element) {
        const canvas = await html2canvas(element, {
          scrollY: -window.scrollY,
          useCORS: true,
          scale: 2,
        });

        const image = canvas.toDataURL("image/png");
        const base64 = image.split(",")[1];
        const idUser = await localStorage.getItem("userId");

        await CantiereService.inserisciDocumento({
          IdCantiere: commessa?.IdCantiere,
          IdUtente: idUser,
          File: base64,
        });

        // ✅ Mostra SweetAlert invece di scaricare il file
        Swal.fire({
          icon: "success",
          title: "Costi e ricavi salvati",
          text: "Il documento è stato generato e salvato correttamente.",
          confirmButtonColor: "#4caf50",
        });
      }
    } catch (error) {
      console.error("Errore nel salvataggio documento:", error);
      Swal.fire({
        icon: "error",
        title: "Errore",
        text: "Si è verificato un errore durante il salvataggio del documento.",
        confirmButtonColor: "#d33",
      });
    }
  };

  useEffect(() => {
    const fetchStato = async () => {
      if (commessa?.IdCantiere) {
        fetchSalEsistenti();
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
  const fetchSalEsistenti = async () => {
    if (!commessa?.IdCantiere) return;

    try {
      //setRigheFatture(righeConvertite);
    } catch (err) {
      console.error("❌ Errore nel caricamento dei SAL:", err);
    }
  };
  useEffect(() => {
    const caricaCostiManuali = async () => {
      if (!commessa?.IdCantiere) return;

      try {
        const tuttiCosti = await CantiereService.leggiCosti(
          commessa.IdCantiere
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
          costo: Number(Costo) || 0,
          aggiornatoAl: 0,
          giacenze: 0,
          contabilita: 0,
          daContabilizzare: 0,
          bcwp: 0,
          dataAggiornamento: nodo.DataAggiornamento || null,
        });
      }
    }

    for (const key in sezioniMap) {
      const sotto = sezioniMap[key].sotto || [];

      const totale = sotto.reduce(
        (acc, curr) => acc + (Number(curr.costo) || 0),
        0
      );

      const ultimaData = sotto.reduce((latest, riga) => {
        const currDate = new Date(riga.dataAggiornamento);
        return isNaN(currDate)
          ? latest
          : !latest || currDate > latest
          ? currDate
          : latest;
      }, null);

      sezioniMap[key].totale = totale;
      sezioniMap[key].dataUltimoAggiornamento = ultimaData;
      sezioniMap[key].totaleAggiornatoAl = sotto.reduce(
        (acc, curr) => acc + (Number(curr.aggiornatoAl) || 0),
        0
      );
      sezioniMap[key].totaleGiacenze = sotto.reduce(
        (acc, curr) => acc + (Number(curr.giacenze) || 0),
        0
      );
      sezioniMap[key].totaleContabilita = sotto.reduce(
        (acc, curr) => acc + (Number(curr.contabilita) || 0),
        0
      );
      sezioniMap[key].totaleDaContabilizzare = sotto.reduce(
        (acc, curr) => acc + (Number(curr.daContabilizzare) || 0),
        0
      );
      sezioniMap[key].totaleBCWP = sotto.reduce(
        (acc, curr) => acc + (Number(curr.bcwp) || 0),
        0
      );
      sezioniMap[key].totaleAggiornatoAl = sotto.reduce(
        (acc, curr) => acc + (+curr.aggiornatoAl || 0),
        0
      );
    }

    const sezioniFinali = ["A", "E", "M", "I", "R"].map((k) => sezioniMap[k]);
    setSezioni(sezioniFinali);
  }, [datiExternal]);

  const contentRef = useRef();

  useEffect(() => {
    const caricaArchivio = async () => {
      if (!commessa?.IdCantiere || !openArchivio) return;

      try {
        setLoadingArchivio(true);
        const result = await CantiereService.caricadocumenti({
          IdCantiere: commessa.IdCantiere,
        });

        const parsed = result.map((doc) => ({
          nome: doc.DataInserimento,
          base64: doc.DocumentoFile,
          preview: `data:image/png;base64,${doc.DocumentoFile}`,
        }));

        setDocumentiArchivio(parsed);
      } catch (err) {
        console.error("Errore caricamento archivio PNG:", err);
      } finally {
        setLoadingArchivio(false);
      }
    };

    caricaArchivio();
  }, [commessa?.IdCantiere, openArchivio]);

  const salvaRigheValori = async () => {
    if (!commessa?.IdCantiere) {
      Swal.fire({
        icon: "warning",
        title: "Cantiere non selezionato",
        text: "Per favore seleziona un cantiere prima di salvare.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    const righeValide = righeValori.filter(
      (r) => r.tipo && !isNaN(parseFloat(r.valore))
    );

    if (righeValide.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Nessuna riga valida",
        text: "Non ci sono righe con valori da salvare.",
        confirmButtonColor: "#00a86b",
      });
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
        Swal.fire({
          icon: "error",
          title: "Errore",
          text: "Errore durante il salvataggio di una riga.",
          confirmButtonColor: "#d33",
        });
        success = false;
        break;
      }
    }

    if (success) {
      Swal.fire({
        icon: "success",
        title: "Salvataggio riuscito",
        text: "Costi salvati con successo!",
        confirmButtonColor: "#00aa5e",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const totaleCostiSenzaRicavi = useMemo(() => {
    return sezioni
      .filter((s) => s.nodo !== "R")
      .reduce((acc, sezione) => {
        const subtotal = sezione.sotto.reduce(
          (tot, curr) => tot + (+curr.costo || 0),
          0
        );
        return acc + subtotal;
      }, 0);
  }, [sezioni]);

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
              {/* ✅ Riga aggregata (somma) */}
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
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                  }}
                >
                  {sezione.titolo}
                </td>
                <td
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {sezione.sotto
                    .reduce((acc, curr) => acc + (+curr.costo || 0), 0)
                    .toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </td>
                <td style={{ backgroundColor: "white", border: "none" }}></td>
                <td
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {sezione.sotto
                    .reduce((acc, curr) => acc + (+curr.aggiornatoAl || 0), 0)
                    .toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </td>
                <td
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {sezione.sotto
                    .reduce((acc, curr) => acc + (+curr.giacenze || 0), 0)
                    .toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </td>
                <td
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {sezione.sotto
                    .reduce(
                      (acc, curr) =>
                        acc + (+curr.aggiornatoAl || 0) + (+curr.giacenze || 0),
                      0
                    )
                    .toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </td>
                <td
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {sezione.sotto
                    .reduce((acc, curr) => acc + (+curr.bcwp || 0), 0)
                    .toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </td>
                <td
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {sezione.sotto
                    .reduce((acc, curr) => acc + (+curr.contabilita || 0), 0)
                    .toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </td>
                <td
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {sezione.sotto
                    .reduce(
                      (acc, curr) => acc + (+curr.daContabilizzare || 0),
                      0
                    )
                    .toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </td>
                <td
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {sezione.sotto
                    .reduce(
                      (acc, curr) =>
                        acc +
                        (+curr.contabilita || 0) +
                        (+curr.daContabilizzare || 0),
                      0
                    )
                    .toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </td>
                <td
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {(
                    sezione.sotto.reduce(
                      (acc, curr) =>
                        acc +
                        (+curr.contabilita || 0) +
                        (+curr.daContabilizzare || 0),
                      0
                    ) -
                    sezione.sotto.reduce(
                      (acc, curr) => acc + (+curr.aggiornatoAl || 0),
                      0
                    )
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td
                  style={{
                    backgroundColor: sezione.coloreNodo,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {(() => {
                    const ricavi = sezione.sotto.reduce(
                      (acc, curr) =>
                        acc +
                        (+curr.contabilita || 0) +
                        (+curr.daContabilizzare || 0),
                      0
                    );
                    const aggiornato = sezione.sotto.reduce(
                      (acc, curr) => acc + (+curr.aggiornatoAl || 0),
                      0
                    );
                    const perc =
                      ricavi !== 0 ? ((ricavi - aggiornato) / ricavi) * 100 : 0;
                    return perc.toFixed(2) + "%";
                  })()}
                </td>
                <td style={{ backgroundColor: sezione.coloreNodo }}></td>
              </tr>

              {sezione.sotto.map((sotto, i) => {
                const isRicavi = sezione.nodo === "R";

                if (!isRicavi) {
                  const aggiornato = +sotto.aggiornatoAl || 0;
                  const giacenze = +sotto.giacenze || 0;
                  const contabilita = +sotto.contabilita || 0;
                  const daContabilizzare = +sotto.daContabilizzare || 0;
                  const ricaviRaffronto = contabilita + daContabilizzare;
                  const mdc = ricaviRaffronto - aggiornato;
                  const mdcPerc =
                    ricaviRaffronto !== 0 ? (mdc / ricaviRaffronto) * 100 : 0;

                  return (
                    <tr key={i}>
                      <td style={{ backgroundColor: sezione.coloreRiga }}>
                        {sotto.codice.length === 3 ? sotto.codice : ""}
                      </td>
                      <td style={{ backgroundColor: sezione.coloreRiga }}>
                        {sotto.codice.length === 3
                          ? sotto.descrizione
                          : `${sotto.codice} ${sotto.descrizione}`}
                      </td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        {(+sotto.costo || 0).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td
                        style={{ backgroundColor: "white", border: "none" }}
                      ></td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        <input
                          type="number"
                          value={sotto.aggiornatoAl || ""}
                          onChange={(e) => {
                            const valore = parseFloat(e.target.value) || 0;
                            const nuove = [...sezioni];
                            nuove[idx].sotto[i].aggiornatoAl = valore;
                            setSezioni(nuove);
                          }}
                          style={{
                            width: "100%",
                            border: "none",
                            background: "transparent",
                            textAlign: "center",
                          }}
                        />
                      </td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        <input
                          type="number"
                          value={sotto.giacenze || ""}
                          onChange={(e) => {
                            const valore = parseFloat(e.target.value) || 0;
                            const nuove = [...sezioni];
                            nuove[idx].sotto[i].giacenze = valore;
                            setSezioni(nuove);
                          }}
                          style={{
                            width: "100%",
                            border: "none",
                            background: "transparent",
                            textAlign: "center",
                          }}
                        />
                      </td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        {(aggiornato + giacenze).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        <input
                          type="number"
                          value={sotto.bcwp || ""}
                          onChange={(e) => {
                            const valore = parseFloat(e.target.value) || 0;
                            const nuove = [...sezioni];
                            nuove[idx].sotto[i].bcwp = valore;
                            setSezioni(nuove);
                          }}
                          style={{
                            width: "100%",
                            border: "none",
                            background: "transparent",
                            textAlign: "center",
                          }}
                        />
                      </td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        <input
                          type="number"
                          value={sotto.contabilita || ""}
                          onChange={(e) => {
                            const valore = parseFloat(e.target.value) || 0;
                            const nuove = [...sezioni];
                            nuove[idx].sotto[i].contabilita = valore;
                            setSezioni(nuove);
                          }}
                          style={{
                            width: "100%",
                            border: "none",
                            background: "transparent",
                            textAlign: "center",
                          }}
                        />
                      </td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        <input
                          type="number"
                          value={sotto.daContabilizzare || ""}
                          onChange={(e) => {
                            const valore = parseFloat(e.target.value) || 0;
                            const nuove = [...sezioni];
                            nuove[idx].sotto[i].daContabilizzare = valore;
                            setSezioni(nuove);
                          }}
                          style={{
                            width: "100%",
                            border: "none",
                            background: "transparent",
                            textAlign: "center",
                          }}
                        />
                      </td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        {ricaviRaffronto.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        {mdc.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        {mdcPerc.toFixed(2)}%
                      </td>
                      <td style={{ backgroundColor: sezione.coloreRiga }}>
                        <input
                          type="text"
                          value={sotto.note || ""}
                          onChange={(e) => {
                            const nuovo = [...sezioni];
                            nuovo[idx].sotto[i].note = e.target.value;
                            setSezioni(nuovo);
                          }}
                          style={{
                            width: "100%",
                            border: "none",
                            background: "transparent",
                          }}
                        />
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={i}>
                      <td style={{ backgroundColor: sezione.coloreRiga }}>
                        {sotto.codice.length === 3 ? sotto.codice : ""}
                      </td>
                      <td style={{ backgroundColor: sezione.coloreRiga }}>
                        {sotto.codice.length === 3
                          ? sotto.descrizione
                          : `${sotto.codice} ${sotto.descrizione}`}
                      </td>
                      <td
                        style={{
                          backgroundColor: sezione.coloreRiga,
                          textAlign: "center",
                        }}
                      >
                        {(+sotto.costo || 0).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      {/* Colspan per mantenere la struttura a 14 colonne totali */}
                      <td
                        colSpan={11}
                        style={{ backgroundColor: "#f9f9f9" }}
                      ></td>
                    </tr>
                  );
                }
              })}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {openArchivio && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "480px",
            height: "100%",
            backgroundColor: "#fdfdfd",
            boxShadow: "-2px 0 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
            padding: "1.5rem",
            overflowY: "auto",
            borderLeft: "5px solid green",
          }}
        >
          <button
            onClick={() => setOpenArchivio(false)}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              backgroundColor: "#fce4ec",
              border: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          <h2 style={{ color: "#6a1b9a", marginBottom: "1rem" }}>
            Archivio costi/ricavi
          </h2>

          {loadingArchivio ? (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <div
                style={{
                  border: "4px solid #f3f3f3",
                  borderTop: "4px solid green",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  animation: "spin 1s linear infinite",
                  margin: "auto",
                }}
              />
              <div
                style={{
                  marginTop: "0.75rem",
                  color: "#666",
                  fontSize: "1rem",
                  fontStyle: "italic",
                }}
              >
                Caricamento documenti...
              </div>
            </div>
          ) : documentiArchivio.length > 0 ? (
            <>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {documentiArchivio.map((doc, idx) => (
                  <li key={idx} style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: 6,
                        padding: "0.5rem",
                        backgroundColor: "#fafafa",
                      }}
                    >
                      Data Creazione: {doc.nome}
                      <button
                        onClick={() => {
                          try {
                            if (
                              !doc.base64 ||
                              !Array.isArray(doc.base64.data)
                            ) {
                              alert("Errore: formato del file non valido.");
                              return;
                            }

                            const uint8Array = new Uint8Array(doc.base64.data);
                            const blob = new Blob([uint8Array], {
                              type: "image/png",
                            }); // Cambia il tipo se necessario

                            // Prepara il download
                            const url = URL.createObjectURL(blob);
                            const link = document.createElement("a");
                            link.href = url;
                            link.download = doc.nome.endsWith(".png")
                              ? doc.nome
                              : `${doc.nome}.png`;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            URL.revokeObjectURL(url);
                          } catch (e) {
                            console.error("Errore nel download:", e);
                            alert("Errore durante il download del file.");
                          }
                        }}
                        style={{
                          marginTop: "0.5rem",
                          width: "100%",
                          padding: "0.4rem",
                          backgroundColor: "#d1c4e9",
                          border: "none",
                          borderRadius: 4,
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        ⬇️ Scarica {doc.nome}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <button
                  onClick={() => setOpenArchivio(false)}
                  style={{
                    padding: "0.5rem 1.5rem",
                    backgroundColor: "#a5d6a7", // verde chiaro
                    border: "1px solid #81c784", // bordo leggermente più scuro
                    borderRadius: 6,
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "#1b5e20", // testo verde scuro per contrasto
                  }}
                >
                  ❌ Chiudi archivio
                </button>
              </div>
            </>
          ) : (
            <p style={{ color: "#666" }}>Nessun PNG disponibile.</p>
          )}
        </div>
      )}
      <div
        style={{
          marginTop: "1.5rem",
          marginBottom: "0.5rem",
          padding: "0.6rem 1rem",
          borderRadius: 4,
          fontWeight: "bold",
          fontSize: "1rem",
          textAlign: "left",
        }}
      >
        Totale Costi (senza ricavi):{" "}
        <span style={{ marginLeft: "1rem" }}>
          €{" "}
          {totaleCostiSenzaRicavi.toLocaleString("it-IT", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
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
      </div>

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "1rem",
          alignItems: "stretch",
        }}
      >
        <button
          onClick={aggiungiRigaValore}
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#e0f7fa",
            border: "1px solid #0097a7",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          + Aggiungi riga
        </button>
        <button
          onClick={salvaRigheValori}
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#d0f0c0",
            border: "1px solid #388e3c",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          💾 Salva righe
        </button>
        <button
          onClick={generaCostiRicavi}
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#bbdefb",
            border: "1px solid #1976d2",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          📊 Genera costi e ricavi
        </button>
        <button
          onClick={() => setOpenArchivio(true)}
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#a5d6a7",
            border: "1px solid #81c784",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#1b5e20",
          }}
        >
          🗂️ Archivio
        </button>
      </div>
      <br></br>
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
            <span style={{ float: "right" }}>
              {dataAggiornamento
                ? new Intl.DateTimeFormat("it-IT", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).format(dataAggiornamento)
                : "--"}
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#e6f2e6",
              padding: "0.4rem 0.6rem",
              marginBottom: 4,
            }}
          >
            <strong>Margine di commessa</strong>:{" "}
            <span style={{ float: "right" }}>
              €{" "}
              {margineCommessa.toLocaleString("it-IT", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div style={{ backgroundColor: "#e6f2e6", padding: "0.4rem 0.6rem" }}>
            <strong>Margine %</strong>:{" "}
            <span style={{ float: "right" }}>
              {marginePercentuale.toFixed(2)} %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DatiCommessa = ({ commessa }) => {
  const [triggered, setTriggered] = useState(false);
  const [dataInizio, setDataInizio] = useState(new Date());
  const [dataFine, setDataFine] = useState(new Date());
  const [mappaUrl, setMappaUrl] = useState(null);
  const [zonaImageUrl, setZonaImageUrl] = useState(null);
  const [users, setUsers] = useState([]);
  const inizializzato = useRef(false);
  const [error, setError] = useState(null);
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
        commessa.DataInizio ? new Date(commessa.DataInizio) : new Date()
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
                        datiGenerali.AnagraficaCliente_Telefono
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
                        datiGenerali.AnagraficaProgettista_Telefono
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
                        datiGenerali.AnagraficaProgettista_Email
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
  const [gestioneContrattoAperta, setGestioneContrattoAperta] = useState(false);

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
            const isCruscotto = label === "Cruscotto di commessa";
            const isDisabled =
              !selectedCommessa || (isCruscotto && !gestioneContrattoAperta);
            return (
              <div
                key={label}
                onClick={() => {
                  if (!isDisabled) {
                    if (label === "Gestione contratto")
                      setGestioneContrattoAperta(true);
                    setSelectedTab(label);
                  }
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
                    JSON.stringify(commessa)
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
              produzioneResidua={datiProduzione.residuo}
              avanzamentoSAL={datiProduzione.avanzamentoSAL}
              totaleSAL={datiProduzione.totaleSAL}
              salNonFatturati={datiProduzione.salNonFatturati}
              percentualeFatturazione={datiProduzione.percentualeFatturazione}
              totaleFatturato={datiProduzione.totaleFatturato}
              produzioneNonFatturata={datiProduzione.produzioneNonFatturata}
            />
          )}
      </div>
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
