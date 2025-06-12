import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CantiereService from "../services/cantiere";
import DatiProduzioneService from "../services/datiproduzione";
import moment from "moment";
import "moment/locale/it";
import { BASE_URL } from "../services/api";
import "sweetalert2/dist/sweetalert2.min.css";

import { Approvvigionamenti, CDP } from "../commerciale/Gestione";
moment.locale("it");

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f8f8f8",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  header: {
    fontSize: "22px",
    fontWeight: "600",
    textAlign: "center",
    margin: "20px 0",
    position: "relative",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
  },
  th: {
    padding: "8px",
    border: "1px solid #ccc",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "13px",
  },
  td: {
    padding: "8px",
    border: "1px solid #ccc",
    fontSize: "13px",
    verticalAlign: "middle",
  },
  greenButton: {
    backgroundColor: "#00b050",
    color: "white",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  blockedButton: {
    backgroundColor: "#ffc000",
    color: "black",
    border: "none",
    padding: "8px 16px",
    fontWeight: "bold",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  grayButton: {
    backgroundColor: "#d9d9d9",
    padding: "10px 20px",
    minWidth: "160px",
    height: "40px",
    textAlign: "center",
    fontWeight: "bold",
    border: "1px solid #aaa",
  },
  topBar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  tableTitleRow: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
};
export default function GestioneCommessaUI() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedCommessa, setSelectedCommessa] = useState(null);
  const [selectedTab, setSelectedTab] = useState("GeneraCantiere");
  const [wbsOptions, setWbsOptions] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [editData, setEditData] = useState(null); // null = creazione
  const [isLoadingApprestamenti, setIsLoadingApprestamenti] = useState(false);
  const [datiUtenze, setDatiUtenze] = useState([]);
  const [selectedWBS, setSelectedWBS] = useState("");

  const [datiApprestamenti, setDatiApprestamenti] = useState([]);

  const caricaWbsOptions = async (codiceCantiere) => {
    try {
      const dettagli = await CantiereService.nodidettagli({
        Codice: codiceCantiere,
      });
      const opzioni = dettagli
        .filter((d) => !d.CodiceNodo.startsWith("R")) // ignora nodi 'R'
        .map((d) => d.CodiceNodo);
      setWbsOptions(opzioni);
    } catch (err) {
      console.error("Errore nel caricamento WBS:", err);
      setWbsOptions([]);
    }
  };

  const caricaApprestamenti = async (IdCantiere) => {
    setIsLoadingApprestamenti(true);
    try {
      const dati = await DatiProduzioneService.carica();
      if (Array.isArray(dati)) {
        const filtratiApprestamenti = dati.filter(
          (d) => d.IdCantiere === IdCantiere && d.Tipo === "ACCANTIERAMENTO",
        );
        const filtratiUtenze = dati.filter(
          (d) => d.IdCantiere === IdCantiere && d.Tipo === "UTENZE",
        );
        setDatiApprestamenti(filtratiApprestamenti);
        setDatiUtenze(filtratiUtenze);
      } else {
        setDatiApprestamenti([]);
        setDatiUtenze([]);
      }
    } catch (err) {
      console.error("Errore nel caricamento:", err);
    } finally {
      setIsLoadingApprestamenti(false);
    }
  };

  useEffect(() => {
    if (selectedCommessa?.IdCantiere) {
      caricaApprestamenti(selectedCommessa.IdCantiere);
    }
  }, [selectedCommessa]);

  const openDrawer = async (data) => {
    if (selectedCommessa?.NomeCantiere) {
      await caricaWbsOptions(selectedCommessa.NomeCantiere);
    }
    setEditData(data);
    setSelectedWBS(data?.WBS || ""); // <<<< Qui imposti il valore iniziale
    setShowDrawer(true);
  };

  const [datiGenerali2, setDatiGenerali2] = useState({
    statoDinamico: "BLOCCATO",
  });

  useEffect(() => {
    const fetchStato = async () => {
      if (selectedCommessa?.IdCantiere) {
        try {
          const result = await CantiereService.statoCommessa({
            Codice: selectedCommessa.NomeCantiere,
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
  }, [selectedCommessa?.IdCantiere]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchTerm.trim().length >= 2) {
        try {
          const risultati = await CantiereService.ricercaCantieri({
            filtro: searchTerm,
          });
          setFilteredOptions(risultati || []);
        } catch (err) {
          console.error("Errore nella ricerca delle commesse:", err);
          setFilteredOptions([]);
        }
      } else {
        setFilteredOptions([]);
      }
    }, 300); // debounce di 300ms

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    // Esempio: valore determinato dinamicamente (può provenire da stato, form, ecc.)
    const isApprestamento = data.Tipo === "ACCANTIERAMENTO"; // oppure da uno stato, es. `tipoSelezionato`

    const payload = {
      ...data,
      IdCantiere: selectedCommessa?.IdCantiere,
      Tipo: editData?.Tipo || "UTENZE", // fallback per sicurezza
      WBS: selectedWBS,
    };

    try {
      if (editData && !editData.isNew) {
        await DatiProduzioneService.aggiorna({ ...editData, ...payload });
      } else {
        await DatiProduzioneService.inserisci(payload);
      }

      setEditData(null); // reset pulito
      setShowDrawer(false);

      await caricaApprestamenti(selectedCommessa?.IdCantiere);
    } catch (err) {
      console.error("Errore salvataggio:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await DatiProduzioneService.elimina(editData.ID);
      setEditData(null);
      await caricaApprestamenti(selectedCommessa?.IdCantiere);
      setShowDrawer(false);
    } catch (err) {
      console.error("Errore eliminazione:", err);
    }
  };

  return (
    <div style={styles.container}>
      {showDrawer && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100%",
            width: "100%",
            maxWidth: "60%",
            backgroundColor: "#f7fdf8",
            boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            zIndex: 999,
            overflowY: "auto",
            borderLeft: "1px solid #d0e5d6",
          }}
        >
          <h2 style={{ color: "#2e7d32", marginBottom: "1rem" }}>
            {editData ? "Modifica Apprestamento" : "Nuovo Apprestamento"}
          </h2>

          <form onSubmit={handleSubmit}>
            {[
              {
                label: "Descrizione",
                name: "Descrizione",
                type: "text",
                required: true,
              },
              {
                label: "Data Installazione",
                name: "DataInstallazione",
                type: "date",
              },
              { label: "Fornitore", name: "Fornitore", type: "text" },
              { label: "Quantità", name: "Quantita", type: "number" },
              { label: "Archivio CDP", name: "ArchivioCDP", type: "text" },
              { label: "Dal", name: "Dal", type: "date" },
              { label: "Al", name: "Al", type: "date" },
            ].map(({ label, name, type, required }) => (
              <div key={name} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", fontWeight: 600 }}>
                  {label}
                </label>
                <input
                  name={name}
                  type={type}
                  defaultValue={
                    type === "date" && editData?.[name]
                      ? moment(editData[name]).format("YYYY-MM-DD")
                      : editData?.[name] || ""
                  }
                  required={required}
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
            <div>
              <label style={{ display: "block", fontWeight: 600 }}>WBS</label>
              <select
                name="WBS"
                value={selectedWBS}
                onChange={(e) => setSelectedWBS(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "0.6rem",
                  borderRadius: 6,
                  border: "1px solid #cde5d4",
                  fontSize: "0.9rem",
                }}
              >
                <option value="">Seleziona WBS</option>
                {wbsOptions.map((wbs) => (
                  <option key={wbs} value={wbs}>
                    {wbs}
                  </option>
                ))}
              </select>
            </div>

            <div
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: editData ? "space-between" : "flex-end",
                gap: "0.5rem",
              }}
            >
              {editData && (
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
                onClick={() => setShowDrawer(false)}
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

      <div style={styles.topBar}>
        <button
          style={styles.grayButton}
          onClick={() => setSelectedTab("GeneraCantiere")}
        >
          Gestione cantiere
        </button>
        <button
          style={styles.grayButton}
          onClick={() => setSelectedTab("Reportcantiere")}
        >
          Report cantiere
        </button>
        <button
          style={styles.grayButton}
          onClick={() => setSelectedTab("Approvvigionamenti")}
        >
          Approvvigionamenti
        </button>
        <button
          style={{
            ...styles.grayButton,
            backgroundColor: "#d9d9d9",
            color: "#666",
          }}
          onClick={() => setSelectedTab("C.D.P.")}
        >
          C.D.P.
        </button>
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

      {selectedCommessa &&
        selectedTab !== "Approvvigionamenti" &&
        selectedTab !== "C.D.P." && (
          <div style={styles.header}>
            Cod. {selectedCommessa?.NomeCantiere}{" "}
            <b>{selectedCommessa?.RagioneSociale}</b>{" "}
            {selectedCommessa?.Indirizzo ? selectedCommessa.Indirizzo : ""}
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
        )}

      {selectedTab === "GeneraCantiere" && selectedCommessa && (
        <>
          <div style={{ marginBottom: "10px", display: "flex", gap: "20px" }}>
            <button
              onClick={() =>
                openDrawer({ Tipo: "ACCANTIERAMENTO", isNew: true })
              }
              style={{
                backgroundColor: "#00b050",
                color: "white",
                padding: "10px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              + Nuovo ACCANTIERAMENTO
            </button>

            <button
              onClick={() => openDrawer({ Tipo: "UTENZE", isNew: true })}
              style={{
                backgroundColor: "#00b050",
                color: "white",
                padding: "10px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              + Nuova Utenza
            </button>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f9f4" }}>
                <th style={styles.th}>DESCRIZIONE</th>
                <th style={styles.th}>DATA INSTALLAZIONE</th>
                <th style={styles.th}>FORNITORE</th>
                <th style={styles.th}>Q.TÀ</th>
                <th style={styles.th}>ARCHIVIO CDP</th>
                <th colSpan="3" style={{ ...styles.th, textAlign: "center" }}>
                  GESTIONE NOLEGGI
                </th>
                <th style={styles.th}></th>
              </tr>
              <tr style={{ backgroundColor: "#f2f9f4" }}>
                <th colSpan="5"></th>
                <th style={styles.th}>DAL</th>
                <th style={styles.th}>AL</th>
                <th style={styles.th}>WBS</th>
                <th style={styles.th}>GENERA CDP</th>
              </tr>
            </thead>

            {/* Sezione 1: Accantieramento */}
            <tbody>
              <tr>
                <td
                  colSpan="9"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#ddd",
                    padding: "8px",
                    fontSize: "16px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: 600 }}>1) </span>
                  <span
                    style={{
                      backgroundColor: "#f4e2e2",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontWeight: "bold",
                    }}
                  >
                    ACCANTIERAMENTO
                  </span>
                </td>
              </tr>
              {datiApprestamenti.map((item, i) => (
                <tr key={i}>
                  <td style={styles.td}>{item.Descrizione}</td>
                  <td style={styles.td}>
                    {moment(item.DataInstallazione).format("D MMMM YYYY")}
                  </td>
                  <td style={styles.td}>{item.Fornitore}</td>
                  <td style={styles.td}>{item.Quantita}</td>
                  <td style={styles.td}>{item.ArchivioCDP || "…"}</td>
                  <td style={styles.td}>
                    {moment(item.Dal).format("D MMMM YYYY")}
                  </td>
                  <td style={styles.td}>
                    {moment(item.Al).format("D MMMM YYYY")}
                  </td>
                  <td style={styles.td}>{item.WBS}</td>
                  <td style={styles.td}>
                    <button
                      style={{
                        backgroundColor: "#00b050",
                        color: "#fff",
                        padding: "8px 12px",
                        fontWeight: "bold",
                        border: "none",
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      Genera CDP
                    </button>
                    <br></br>
                    <button
                      onClick={() => openDrawer(item)}
                      style={{
                        backgroundColor: "#00b050",
                        marginTop: "10px",
                        color: "#fff",
                        padding: "8px 12px",
                        fontWeight: "bold",
                        border: "none",
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      Modifica
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan="9"
                  style={{ textAlign: "center", fontSize: "20px" }}
                >
                  …
                </td>
              </tr>
            </tbody>

            {/* Sezione 2: Utenze */}
            <tbody>
              <tr>
                <td
                  colSpan="9"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#ddd",
                    padding: "8px",
                    fontSize: "16px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: 600 }}>2) </span>
                  <span style={{ fontWeight: "bold" }}>UTENZE DI CANTIERE</span>
                </td>
              </tr>
              {datiUtenze.map((item, i) => (
                <tr key={i}>
                  <td style={styles.td}>{item.Descrizione}</td>
                  <td style={styles.td}>
                    {moment(item.DataInstallazione).format("D MMMM YYYY")}
                  </td>
                  <td style={styles.td}>{item.Fornitore}</td>
                  <td style={styles.td}>{item.Quantita}</td>
                  <td style={styles.td}>{item.ArchivioCDP || "…"}</td>
                  <td style={styles.td}>
                    {moment(item.Dal).format("D MMMM YYYY")}
                  </td>
                  <td style={styles.td}>
                    {moment(item.Al).format("D MMMM YYYY")}
                  </td>
                  <td style={styles.td}>{item.WBS}</td>
                  <td style={styles.td}>
                    <button
                      style={{
                        backgroundColor: "#00b050",
                        color: "#fff",
                        padding: "8px 12px",
                        fontWeight: "bold",
                        border: "none",
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      Genera CDP
                    </button>
                    <br></br>
                    <button
                      onClick={() => openDrawer(item)}
                      style={{
                        backgroundColor: "#00b050",
                        marginTop: "10px",
                        color: "#fff",
                        padding: "8px 12px",
                        fontWeight: "bold",
                        border: "none",
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      Modifica
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan="9"
                  style={{ textAlign: "center", fontSize: "20px" }}
                >
                  …
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {selectedTab === "Approvvigionamenti" && selectedCommessa && (
        <Approvvigionamenti
          key={selectedCommessa?.IdCantiere}
          commessa={selectedCommessa}
        />
      )}
      {selectedTab === "Reportcantiere" && selectedCommessa && (
        <CommessaSilo
          key={selectedCommessa?.IdCantiere}
          commessa={selectedCommessa}
        />
      )}

      {selectedTab === "C.D.P." && selectedCommessa && (
        <CDP key={selectedCommessa?.IdCantiere} commessa={selectedCommessa} />
      )}
    </div>
  );
}

function convertHHMMToDecimal(hhmm) {
  const [hours, minutes] = hhmm.split(":").map(Number);
  return hours + minutes / 60;
}

function CommessaSilo({ commessa }) {
  const [manodopera, setManodopera] = useState([]);
  const [noleggi, setNoleggi] = useState([]);
  const [aziende, setAziende] = useState([]);
  const [wbsOptions, setWbsOptions] = useState([]);

  const [datiGenerali2, setDatiGenerali2] = useState({
    statoDinamico: "BLOCCATO",
  });
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    marginBottom: "40px",
  };

  const thStyle = {
    backgroundColor: "#ecf5ec",
    padding: "8px",
    border: "1px solid #ccc",
    fontWeight: "bold",
    fontSize: "14px",
    textAlign: "left",
  };

  const tdStyle = {
    padding: "8px",
    border: "1px solid #ccc",
    fontSize: "12px",
  };

  const sectionTitleStyle = {
    backgroundColor: "#ecf5ec",
    fontWeight: "bold",
    fontSize: "18px",
    with: "100%",
    padding: "10px",
    marginTop: "40px",
    border: "1px solid #ccc",
  };

  function formatTimeFromISOString(isoString) {
    const date = new Date(isoString);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${minutes}:${hours}`;
  }
  async function caricaRisorse() {
    try {
      const tutteRisorse = await CantiereService.caricaRisorse({
        IdCantiere: commessa.IdCantiere,
      });

      const utentiRes = await fetch(`${BASE_URL}/RisorseUmane/CaricaRisorse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (!utentiRes.ok)
        throw new Error(`HTTP error! status: ${utentiRes.status}`);
      const utenti = await utentiRes.json();

      const mappaCostoInterno = new Map();
      utenti.forEach((utente) =>
        mappaCostoInterno.set(utente.IdUtente, utente.CostoInterno),
      );

      const manodoperaFiltrata = tutteRisorse
        .filter((r) => ["Attiv.A", "Manodopera"].includes(r.Tipologia))
        .map((r) => {
          const costo = mappaCostoInterno.get(r.IdUtente) ?? 0;
          const ore = formatTimeFromISOString(r.OreFine);
          const oreDecimali = convertHHMMToDecimal(ore);
          return {
            ...r,
            PUnit: costo,
            OreFormattate: ore,
            PTot: (costo * oreDecimali).toFixed(2),
            IdRisorseUmane: r.IdRisorseUmane, // ← Assicurati che esista
            WBS: r.WBS, // ← Questa è cruciale per visualizzare il valore nel select
          };
        });

      const noleggiFiltrati = tutteRisorse.filter(
        (r) => r.Tipologia === "Noleggio",
      );
      const aziendeFiltrate = tutteRisorse.filter(
        (r) => r.Tipologia === "Aziende",
      );

      setManodopera(manodoperaFiltrata);
      setNoleggi(noleggiFiltrati);
      setAziende(aziendeFiltrate);

      const dettagli = await CantiereService.nodidettagli({
        Codice: commessa.NomeCantiere,
      });
      const opzioni = dettagli
        .filter((d) => !d.CodiceNodo.startsWith("R"))
        .map((d) => d.CodiceNodo);
      setWbsOptions(opzioni);
    } catch (err) {
      console.error("Errore nel caricamento risorse:", err);
    }
  }

  useEffect(() => {
    if (commessa?.IdCantiere) caricaRisorse();
  }, [commessa]);

  return (
    <div style={{ padding: "20px" }}>
      {/* MANODOPERA */}
      <div style={sectionTitleStyle}>MANODOPERA</div>
      <table style={tableStyle}>
        <thead>
          <tr>
            {[
              "Data inserimento",
              "Data rapportino",
              "Tipo",
              "Operatore",
              "Nome",
              "Descrizione",
              "Ore",
              "P. Unit.",
              "P. Tot.",
              "WBS",
              "D.D.T.",
              "Stato",
              "Azione",
            ].map((header) => (
              <th key={header} style={thStyle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {manodopera.map((r, i) => (
            <tr key={i}>
              <td style={tdStyle}>{r.Data}</td>
              <td style={tdStyle}>{r.Data}</td>
              <td style={tdStyle}>{r.Tipologia}</td>
              <td style={tdStyle}>{r.IdUtente}</td>
              <td style={tdStyle}>{r.Nome + " " + r.Cognome}</td>
              <td style={tdStyle}>{r.Descrizione}</td>
              <td style={tdStyle}>{formatTimeFromISOString(r.OreFine)}</td>
              <td style={tdStyle}>{r.PUnit}</td>
              <td style={tdStyle}>{r.PTot}</td>
              <td style={tdStyle}>
                <select
                  value={r.WBS || ""}
                  onChange={async (e) => {
                    const nuovoValore = e.target.value;
                    if (r.IdRisorseUmane && nuovoValore) {
                      CantiereService.aggiornaWBS({
                        IdRisorsa: r.IdRisorseUmane,
                        WBS: nuovoValore,
                      })
                        .then(async () => {
                          await caricaRisorse();
                        })
                        .catch((err) =>
                          console.error(
                            "Errore durante aggiornamento WBS:",
                            err,
                          ),
                        );
                    }
                  }}
                  style={{ width: "100%" }}
                >
                  <option value="">Seleziona</option>
                  {wbsOptions.map((wbs) => (
                    <option key={wbs} value={wbs}>
                      {wbs}
                    </option>
                  ))}
                </select>
              </td>

              <td style={tdStyle}>Visualizza/Modifica DDT</td>
              <td style={tdStyle}>{r.Stato ? r.Stato : "INATTESA"}</td>
              <td style={tdStyle}>Registro</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* NOLEGGI */}
      <div style={sectionTitleStyle}>NOLEGGI</div>
      <table style={tableStyle}>
        <thead>
          <tr>
            {[
              "Data inserimento",
              "Data rapportino",
              "Noleggiatore",
              "Nome",
              "Descrizione",
              "Ore",
              "P. Unit.",
              "P. Tot.",
              "WBS",
              "D.D.T.",
              "Stato",
              "Azione",
            ].map((header) => (
              <th key={header} style={thStyle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {noleggi.map((r, i) => (
            <tr key={i}>
              <td style={tdStyle}>{r.Data}</td>
              <td style={tdStyle}>{r.Data}</td>
              <td style={tdStyle}>{r.IdUtente}</td>
              <td style={tdStyle}>{r.Nome + " " + r.Cognome}</td>
              <td style={tdStyle}>{r.Descrizione}</td>
              <td style={tdStyle}>{formatTimeFromISOString(r.OreFine)}</td>
              <td style={tdStyle}>{r.PUnit}</td>
              <td style={tdStyle}>{r.PTot}</td>
              <td style={tdStyle}>
                <select
                  value={r.WBS || ""}
                  onChange={(e) => {
                    const nuovoValore = e.target.value;
                    setManodopera((prev) =>
                      prev.map((item, idx) =>
                        idx === i ? { ...item, WBS: nuovoValore } : item,
                      ),
                    );
                  }}
                  style={{ width: "100%" }}
                >
                  <option value="">Seleziona</option>
                  {wbsOptions.map((wbs) => (
                    <option key={wbs} value={wbs}>
                      {wbs}
                    </option>
                  ))}
                </select>
              </td>

              <td style={tdStyle}>Visualizza/Modifica DDT</td>
              <td style={tdStyle}>{r.Stato ? r.Stato : "INATTESA"}</td>
              <td style={tdStyle}>Registro</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* AZIENDE */}
      <div style={sectionTitleStyle}>AZIENDE</div>
      <table style={tableStyle}>
        <thead>
          <tr>
            {[
              "Data inserimento",
              "Data rapportino",
              "Azienda",
              "Nome",
              "Descrizione",
              "Ore",
              "D.D.T.",
              "Stato",
              "Azione",
            ].map((header) => (
              <th key={header} style={thStyle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {aziende.map((r, i) => (
            <tr key={i}>
              <td style={tdStyle}>{r.Data}</td>
              <td style={tdStyle}>{r.Data}</td>
              <td style={tdStyle}>{r.IdUtente}</td>
              <td style={tdStyle}>{r.Nome + " " + r.Cognome}</td>
              <td style={tdStyle}>{r.Descrizione}</td>
              <td style={tdStyle}>{formatTimeFromISOString(r.OreFine)}</td>

              <td style={tdStyle}>Visualizza/Modifica DDT</td>
              <td style={tdStyle}>{r.Stato ? r.Stato : "INATTESA"}</td>
              <td style={tdStyle}>Registro</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
