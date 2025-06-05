import React, { useState, useEffect, useMemo } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CantiereService from "../services/cantiere";
import ProduzioneService from "../services/produzione";
import moment from "moment";
import "moment/locale/it";
import Swal from "sweetalert2";

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

const parseFloatSafe = (value) => {
  const num = parseFloat(value);
  return isNaN(num) ? 0 : num;
};
const GestioneContratto = ({ commessa, onProduzioneUpdate }) => {
  const [datiGenerali2, setDatiGenerali2] = useState({
    statoDinamico: "BLOCCATO",
  });
  const [righeFatture, setRigheFatture] = useState([]);
  const [datiProduzione, setDatiProduzione] = useState([]);
  const [datiExternal, setDatiExternal] = useState([]);
  const [sezioni, setSezioni] = useState([]);
  const [contratti, setContratti] = useState([]);
  const [datiContratti, setDatiContratti] = useState([]);
  const totaleImportiManuali = datiContratti.reduce(
    (sum, c) => sum + Number(c.CostoTemp2 || 0),
    0
  );

  const produzioneTotalePerLavoro = (descrizione) => {
    if (!descrizione) return 0;

    const righe = righeFatture.filter(
      (r) =>
        r.Lavoro?.trim().toLowerCase() === descrizione?.trim().toLowerCase()
    );
    if (righe.length > 0) {
      return righe.reduce((sum, r) => {
        const importo = parseFloatSafe(r.Importo);
        const importo2 = parseFloatSafe(r.Importo2);
        return sum + importo + Math.max(importo2 - importo, 0);
      }, 0);
    }

    // fallback se non ci sono righe
    const contratto = datiContratti.find((c) => c.Descrizione === descrizione);
    return parseFloatSafe(contratto?.CostoTemp2 || 0);
  };

  const totaleProduzioneTotale = datiContratti.reduce(
    (sum, c) => sum + produzioneTotalePerLavoro(c.Descrizione),
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
    const fetchProduzione = async () => {
      if (!commessa?.IdCantiere) return;

      try {
        const data = await ProduzioneService.leggiProduzione(
          commessa.IdCantiere
        );

        const produzioniPulite = (data || []).map((item) => ({
          IdProduzione: item.IdProduzione,
          Descrizione: item.Lavori,
          Data: item.Data?.substring(0, 10),
          Costo: item.Importo,
          CostoTemp2: item.Importo,
        }));

        setContratti(produzioniPulite);
        setDatiContratti(produzioniPulite);
        setDatiProduzione(produzioniPulite);
      } catch (error) {
        console.error("❌ Errore nel caricamento delle produzioni:", error);
      }
    };

    fetchProduzione();
  }, [commessa?.IdCantiere]);

  useEffect(() => {
    datiContratti.forEach((c, i) => {
      if (!c.Descrizione || !c.CostoTemp2) {
        console.warn("⚠️ Riga produzione incompleta:", c, "Index:", i);
      }
    });
  }, [datiContratti]);
  useEffect(() => {
    const generaRigheFatturaDaRicavi = () => {
      const sezioneRicavi = sezioni.find((s) => s.nodo === "R");

      if (!sezioneRicavi) return;

      const generate = sezioneRicavi.sotto.map((ricavo, idx) => ({
        Lavoro: "",
        Nodo: ricavo.codice,
        Numero1: idx + 1,
        Data1: "",
        Importo1: "",
        Numero2: "",
        CostoTemp2: ricavo.costo || 0,
        Data2: "",
        Importo2: "",
        ImportoTEMP: 0,
        Id: idx + 1,
        Importo: ricavo.costo || 0,
      }));

      setRigheFatture(generate);
    };

    if (sezioni.length > 0 && righeFatture.length === 0) {
      generaRigheFatturaDaRicavi();
    }
  }, [sezioni]);

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
    const nuovoContratto = {
      IdProduzione: null,
      Descrizione: "",
      Data: new Date().toISOString().substring(0, 10),
      Costo: 0,
      produzioneTotale: 0,
      produzioneResidua: 0,
      CostoTemp2: 0,
      Quantita: 1,
    };

    // Aggiunge la nuova riga sia ai contratti che ai dati visualizzati
    setContratti((prev) => [...prev, { ...nuovoContratto }]);
    setDatiContratti((prev) => [...prev, { ...nuovoContratto }]);
  };

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
  const listaNodi = sezioni.flatMap((sezione) =>
    sezione.sotto.map((s) => ({
      codice: s.codice,
      descrizione: s.descrizione,
      colore: sezioni.find((z) => z.nodo === s.codice[0])?.coloreNodo || "#eee",
    }))
  );
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
        nuova[index].CostoTemp2 = contratto.CostoTemp2;
        const oggi = new Date().toISOString().substring(0, 10);
        nuova[index].Data1 = oggi;
        nuova[index].Data2 = oggi;
      }
    }

    setRigheFatture(nuova);
    salvaSingolaRigaSALFattura(nuova[index]);
  };
  function debounce(fn, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }

  const salvaSingolaRigaSALFattura = useMemo(
    () =>
      debounce(async (riga) => {
        if (!commessa?.IdCantiere || !riga?.Nodo) return;

        try {
          await ProduzioneService.creaSal([
            {
              IdCantiere: commessa.IdCantiere,
              Nodo: riga.Nodo,
              Lavoro: riga.Lavoro,
              NumeroSAL: riga.Numero2,
              DataSAL: riga.Data2,
              ImportoSAL: parseFloatSafe(riga.Importo2),
              NumeroFattura: riga.Numero1,
              DataFattura: riga.Data1,
              ImportoFattura: parseFloatSafe(riga.Importo),
            },
          ]);
          console.log("✅ SAL/Fattura salvata:", riga);
        } catch (err) {
          console.error("❌ Errore salvataggio automatico:", err);
        }
      }, 1000),
    [commessa?.IdCantiere]
  );

  useEffect(() => {
    const totale = righeFatture.reduce((sum, r) => {
      const importo2 = parseFloatSafe(r?.Importo2);
      const importo = parseFloatSafe(r?.Importo);
      return sum + Math.max(importo2 - importo, 0);
    }, 0);

    //setTotaleSalNonFatturato(totale);
  }, [righeFatture]);

  useEffect(() => {
    const totale = datiContratti.reduce(
      (sum, c) => sum + Number(c.produzioneResidua || 0),
      0
    );

    CantiereService.aggiornaCustom({
      IdCantiere: commessa?.IdCantiere,
      LavoriResidui: totale,
    });
    //setTotaleLavoriResidui(totale);
  }, [datiContratti]);

  const totaleImportiFatture = righeFatture.reduce(
    (sum, r) => sum + Number(r.Importo || 0),
    0
  );
  let residuoFatturare = totaleProduzioneTotale - totaleImportiFatture;
  const produzioneFatturata = (descrizione) => {
    if (!descrizione) return 0;

    const righe = righeFatture.filter((r) => r.Lavoro === descrizione);
    return righe.reduce((sum, r) => sum + parseFloatSafe(r.Importo || 0), 0);
  };

  const produzioneResidua = (descrizione) => {
    if (!descrizione) return 0;
    return (
      produzioneTotalePerLavoro(descrizione) - produzioneFatturata(descrizione)
    );
  };

  const percentualeFatturazione =
    totaleProduzioneTotale > 0
      ? (() => {
          const result = (totaleImportiFatture / totaleImportiManuali) * 100;
          if (!isFinite(result)) return "100.00";
          return result.toFixed(2);
        })()
      : "0.00";

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
  const salvaProduzioni = async () => {
    if (!commessa?.IdCantiere) {
      Swal.fire({
        icon: "error",
        title: "Cantiere non valido",
        text: "Impossibile salvare le produzioni.",
      });
      return;
    }

    try {
      const nuoviContratti = [...datiContratti];

      const promises = datiContratti.map(async (contratto, index) => {
        const originale = datiProduzione.find(
          (p) =>
            p.IdProduzione === contratto.IdProduzione &&
            p.Descrizione === contratto.Descrizione &&
            p.Data === contratto.Data
        );

        const payload = {
          IdCantiere: commessa.IdCantiere,
          Lavori: contratto.Descrizione,
          Data: contratto.Data,
          Importo: parseFloat(contratto.CostoTemp2 || 0),
          ProduzioneResidua: parseFloat(contratto.produzioneResidua || 0),
        };

        if (contratto.IdProduzione) {
          const isModificato =
            !originale ||
            parseFloat(originale.CostoTemp2 || 0) !== payload.Importo ||
            parseFloat(originale.produzioneResidua || 0) !==
              payload.ProduzioneResidua;

          if (isModificato) {
            await ProduzioneService.aggiornaProduzione(
              contratto.IdProduzione,
              payload
            );
            return true;
          } else {
            return null;
          }
        } else {
          const nuovoId = await ProduzioneService.creaProduzione(payload);
          nuoviContratti[index].IdProduzione = nuovoId;
          return true;
        }
      });

      const risultatiEffettivi = (await Promise.all(promises)).filter(Boolean);

      if (risultatiEffettivi.length === 0) {
        Swal.fire({
          icon: "info",
          title: "Nessuna modifica",
          text: "Non ci sono modifiche da salvare.",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "✅ Produzioni aggiornate",
        text: "Tutte le modifiche sono state salvate correttamente.",
        confirmButtonColor: "#4caf50",
      });

      const aggiornate = await ProduzioneService.leggiProduzione(
        commessa.IdCantiere
      );
      const produzioniPulite = (aggiornate || []).map((item) => ({
        IdProduzione: item.IdProduzione,
        Descrizione: item.Lavori,
        Data: item.Data?.substring(0, 10),
        Costo: item.Importo,
        produzioneTotale: item.Importo,
        produzioneResidua: item.ProduzioneResidua,
        CostoTemp2: item.Importo,
      }));

      setContratti(produzioniPulite);
      setDatiContratti(produzioniPulite);
      setDatiProduzione(produzioniPulite);
    } catch (error) {
      console.error("❌ Errore nel salvataggio delle produzioni:", error);
      Swal.fire({
        icon: "error",
        title: "Errore",
        text: "Errore durante il salvataggio delle produzioni.",
      });
    }
  };

  const fetchSalEsistenti = async () => {
    if (!commessa?.IdCantiere) return;

    try {
      const salEsistenti = await ProduzioneService.leggiSal(
        commessa.IdCantiere
      );

      const righeConvertite = (salEsistenti || []).map((r, idx) => ({
        Lavoro: r.Lavoro || "",
        Nodo: r.Nodo || "",
        Numero1: r.NumeroFattura || "",
        Data1: r.DataFattura?.substring(0, 10) || "",
        Importo1: r.ImportoFattura || 0,
        Numero2: r.NumeroSAL || "",
        Data2: r.DataSAL?.substring(0, 10) || "",
        Importo2: r.ImportoSAL || 0,
        CostoTemp2: r.ImportoSAL || 0,
        ImportoTEMP: r.ImportoSAL || 0,
        Importo: r.ImportoFattura || 0,
        Id: idx + 1,
      }));

      setRigheFatture(righeConvertite);
    } catch (err) {
      console.error("❌ Errore nel caricamento dei SAL:", err);
    }
  };

  useEffect(() => {
    fetchSalEsistenti();
  }, [commessa?.IdCantiere]);
  useEffect(() => {
    const totaleProduzione = datiContratti.reduce(
      (sum, c) => sum + produzioneTotalePerLavoro(c.Descrizione),
      0
    );

    const residuo = datiContratti.reduce(
      (sum, c) => sum + produzioneResidua(c.Descrizione),
      0
    );

    const percentuale =
      totaleProduzione > 0
        ? ((totaleImportiManuali / totaleProduzione) * 100).toFixed(2)
        : "0.00";

    if (onProduzioneUpdate) {
      onProduzioneUpdate({
        percentualeAvanzamento: percentuale,
        totaleProduzione,
        produzioneResidua: residuo,
      });
    }
  }, [datiContratti, righeFatture]);

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

      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      >
        Cod. {commessa.NomeCantiere || "—"}{" "}
        <span style={{ color: "brown" }}>{commessa.RagioneSociale || ""}</span>{" "}
        {commessa.Indirizzo}
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
              color: "rgb(0, 0, 0)",
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
              colSpan={6}
              style={{
                backgroundColor: "#ddf0e3",
                color: "rgb(0, 0, 0)",
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
            <th style={cellStyle}>Importo</th>
            <th style={cellStyle}>Produzione Totale</th>
            <th style={cellStyle}>Produzione Residua</th>
            <th style={cellStyle}>Azioni</th>
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
                    type="text"
                    value={contratto?.CostoTemp2 || ""}
                    onChange={(e) =>
                      handleChange(index, "CostoTemp2", e.target.value)
                    }
                    style={{ width: "100%" }}
                  />
                </td>

                <td style={cellStyle}>
                  €{" "}
                  {produzioneTotalePerLavoro(
                    contratto.Descrizione
                  ).toLocaleString("it-IT", {
                    minimumFractionDigits: 2,
                  })}
                </td>

                <td style={cellStyle}>
                  €{" "}
                  {Number(
                    produzioneResidua(contratto.Descrizione) || 0
                  ).toLocaleString("it-IT", {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td style={cellStyle}>
                  <button
                    onClick={async () => {
                      const conferma = await Swal.fire({
                        title: "Sei sicuro?",
                        text: "Questa operazione eliminerà la produzione selezionata.",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#d33",
                        cancelButtonColor: "#3085d6",
                        confirmButtonText: "Sì, elimina",
                        cancelButtonText: "Annulla",
                      });

                      try {
                        await ProduzioneService.eliminaProduzione(
                          contratto.IdProduzione
                        );

                        const nuovi = [...datiContratti];
                        nuovi.splice(index, 1);
                        setDatiContratti(nuovi);

                        Swal.fire(
                          "Eliminato!",
                          "La produzione è stata eliminata.",
                          "success"
                        );
                      } catch (err) {
                        console.error("❌ Errore eliminazione:", err);
                        Swal.fire(
                          "Errore",
                          "Impossibile eliminare la produzione.",
                          "error"
                        );
                      }
                    }}
                    style={{
                      backgroundColor: "white",
                      alignContent: "center",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      padding: "4px 8px",
                      cursor: "pointer",
                    }}
                  >
                    🗑
                  </button>
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
              .reduce((sum, r) => sum + produzioneResidua(r.Descrizione), 0)
              .toLocaleString("it-IT", { minimumFractionDigits: 2 })}
          </td>

          <td style={{ padding: "8px", border: "1px solid #ccc" }}></td>
        </tr>
      </table>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem", // spazio tra i pulsanti
          marginTop: "1rem",
        }}
      >
        <button
          onClick={aggiungiRiga}
          style={{
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

        <button
          onClick={salvaProduzioni}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          💾 Salva Produzioni
        </button>
      </div>

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
export default GestioneContratto;
