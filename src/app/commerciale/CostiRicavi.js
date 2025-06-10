import React, { useState, useEffect, useMemo } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CantiereService from "../services/cantiere";
import html2canvas from "html2canvas";
import { useRef } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/it";
import "sweetalert2/dist/sweetalert2.min.css";
moment.locale("it");

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
        0,
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
        0,
      );
      sezioniMap[key].totaleGiacenze = sotto.reduce(
        (acc, curr) => acc + (Number(curr.giacenze) || 0),
        0,
      );
      sezioniMap[key].totaleContabilita = sotto.reduce(
        (acc, curr) => acc + (Number(curr.contabilita) || 0),
        0,
      );
      sezioniMap[key].totaleDaContabilizzare = sotto.reduce(
        (acc, curr) => acc + (Number(curr.daContabilizzare) || 0),
        0,
      );
      sezioniMap[key].totaleBCWP = sotto.reduce(
        (acc, curr) => acc + (Number(curr.bcwp) || 0),
        0,
      );
      sezioniMap[key].totaleAggiornatoAl = sotto.reduce(
        (acc, curr) => acc + (+curr.aggiornatoAl || 0),
        0,
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
      (r) => r.tipo && !isNaN(parseFloat(r.valore)),
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
          0,
        );
        return acc + subtotal;
      }, 0);
  }, [sezioni]);

  useEffect(() => {
    const aggiornaMargine = async () => {
      if (totaleCostiSenzaRicavi > 0 && commessa?.IdCantiere) {
        const data = {
          IdCantiere: commessa.IdCantiere,
          Data: new Date(),
          TotaleCosti: totaleCostiSenzaRicavi,
        };

        try {
          await CantiereService.aggiornaMargineCosti(data);
        } catch (error) {
          console.error(
            "Errore durante l'aggiornamento del margine costi:",
            error,
          );
        }
      }
    };

    aggiornaMargine();
  }, [commessa?.IdCantiere, totaleCostiSenzaRicavi]);

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
                      0,
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
                      0,
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
                      0,
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
                      0,
                    ) -
                    sezione.sotto.reduce(
                      (acc, curr) => acc + (+curr.aggiornatoAl || 0),
                      0,
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
                      0,
                    );
                    const aggiornato = sezione.sotto.reduce(
                      (acc, curr) => acc + (+curr.aggiornatoAl || 0),
                      0,
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

export default CostiRicavi;
