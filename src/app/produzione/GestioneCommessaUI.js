import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CantiereService from "../services/cantiere";
import ApprovvigionamentoService from "../services/approvigionamenti";
import CDPService from "../services/cdp";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/it";

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
    border: "1px solid #ccc",
    padding: "8px",
    backgroundColor: "#dff0d8",
    textAlign: "left",
    verticalAlign: "middle",
  },
  td: {
    border: "1px solid #ccc",
    padding: "8px",
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
  const [selectedTab, setSelectedTab] = useState("GeneraCantiere");

  const [datiCommessa, setDatiCommessa] = useState(null);
  const [contratti, setContratti] = useState([]);
  const [datiContratti, setDatiContratti] = useState([]);
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

  return (
    <div style={styles.container}>
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

      {selectedCommessa && (
        <div style={styles.header}>
          Cod. {selectedCommessa?.NomeCantiere}{" "}
          <b>{selectedCommessa?.RagioneSociale}</b>{" "}
          {selectedCommessa?.Indirizzo ? selectedCommessa.Indirizzo : ""}
          <button style={styles.blockedButton}>
            {(selectedCommessa?.StatoDinamico || "BLOCCATO").toUpperCase()}
          </button>
        </div>
      )}

      {selectedTab === "GeneraCantiere" && selectedCommessa && (
        <>
          <div style={styles.sectionTitle}>APPRESTAMENTI DI CANTIERE</div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>DESCRIZIONE</th>
                <th style={styles.th}>DATA INSTALLAZIONE</th>
                <th style={styles.th}>FORNITORE</th>
                <th style={styles.th}>Q.TÀ</th>
                <th style={styles.th}>ARCHIVIO CDP</th>
                <th style={styles.th}>DAL</th>
                <th style={styles.th}>AL</th>
                <th style={styles.th}>WBS</th>
                <th style={styles.th}>GENERA CDP</th>
              </tr>
            </thead>
            <tbody>
              <tr style={styles.tableTitleRow}>
                <td colSpan={9}>1) ACCANTIERAMENTO</td>
              </tr>
              {[
                ["Ponteggio", "100 ponteggi srl", "100 Mq", "A01"],
                ["Baracca di cantiere", "Baschieri srl", "Cad. 1", "A02"],
                ["Wc chimico", "Sebach", "Cad. 1", "A03"],
                ["Quadro elettrico", "Attiv A Srl", "Cad. 1", "A04"],
                ["Gru edile", "Martin gru srl", "Cad. 1", "A05"],
              ].map(([desc, fornitore, qta, wbs], i) => (
                <tr key={i}>
                  <td style={styles.td}>{desc}</td>
                  <td style={styles.td}>1 gennaio 2025</td>
                  <td style={styles.td}>{fornitore}</td>
                  <td style={styles.td}>{qta}</td>
                  <td style={styles.td}>…</td>
                  <td style={styles.td}>1 febbraio 2025</td>
                  <td style={styles.td}>28 febbraio 2025</td>
                  <td style={styles.td}>{wbs}</td>
                  <td style={styles.td}>
                    <button style={styles.greenButton}>Genera CDP</button>
                  </td>
                </tr>
              ))}

              <tr style={styles.tableTitleRow}>
                <td colSpan={9}>2) UTENZE DI CANTIERE</td>
              </tr>
              {[
                ["Luce", "ENEL", "A06"],
                ["Acqua", "SORGEEA", "A06"],
              ].map(([desc, fornitore, wbs], i) => (
                <tr key={i + 10}>
                  <td style={styles.td}>{desc}</td>
                  <td style={styles.td}>1 gennaio 2025</td>
                  <td style={styles.td}>{fornitore}</td>
                  <td style={styles.td}>…</td>
                  <td style={styles.td}>1 febbraio 2025</td>
                  <td style={styles.td}>28 febbraio 2025</td>
                  <td style={styles.td}></td>
                  <td style={styles.td}>{wbs}</td>
                  <td style={styles.td}>
                    <button style={styles.greenButton}>Genera CDP</button>
                  </td>
                </tr>
              ))}
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

function CommessaSilo() {
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
    fontSize: "14px",
  };

  const redText = { color: "red", fontWeight: "bold", fontSize: "13px" };
  const grayText = { color: "gray" };
  const sectionTitleStyle = {
    backgroundColor: "#ecf5ec",
    fontWeight: "bold",
    fontSize: "18px",
    padding: "10px",
    marginTop: "40px",
    border: "1px solid #ccc",
  };

  const blockBtn = {
    backgroundColor: "#ffc107",
    color: "#333",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "4px",
    float: "right",
    marginTop: "-50px",
  };

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
          <tr>
            <td style={tdStyle}>10-07-25</td>
            <td style={tdStyle}>11-07-25</td>
            <td style={tdStyle}>Manodopera</td>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>Nicola Coem</td>
            <td style={tdStyle}>Smontato ponteggio</td>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>€ 25,00</td>
            <td style={tdStyle}>€ 25,00</td>
            <td style={tdStyle}>A.05</td>
            <td style={tdStyle}>Visualizza/modifica</td>
            <td style={tdStyle}>In attesa</td>
            <td style={tdStyle}>Registra</td>
          </tr>
          <tr>
            <td style={tdStyle}>
              <span style={{ color: "red", fontWeight: "bold" }}>Attiv.A</span>
            </td>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>Carmelo</td>
            <td style={tdStyle}>Smontato ponteggio</td>

            <td style={tdStyle}>
              <span style={grayText}>€ 25,00</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Calcolo</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Da elenco</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Foto modificabile</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Automatico</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Da cliccare</span>
            </td>
          </tr>
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
          <tr>
            <td style={tdStyle}>10-07-25</td>
            <td style={tdStyle}>11-07-25</td>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>Baschieri</td>
            <td style={tdStyle}>Piattaforma aerea</td>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>€ 25,00</td>
            <td style={tdStyle}>€ 25,00</td>
            <td style={tdStyle}>A.05</td>
            <td style={tdStyle}>Visualizza/modifica/crea</td>
            <td style={tdStyle}>In attesa</td>
            <td style={tdStyle}>Registra</td>
          </tr>
          <tr>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>Baschieri</td>
            <td style={tdStyle}>Piattaforma aerea</td>

            <td style={tdStyle}>
              <span style={grayText}>€ 25,00</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Calcolo</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Da elenco</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Foto modificabile</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Automatico</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Da cliccare</span>
            </td>
          </tr>
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
          <tr>
            <td style={tdStyle}>10-07-25</td>
            <td style={tdStyle}>11-07-25</td>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>Lodi</td>
            <td style={tdStyle}>Montato finestre</td>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>Visualizza/modifica/crea</td>
            <td style={tdStyle}>In attesa</td>
            <td style={tdStyle}>Registra DDT</td>
          </tr>
          <tr>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>Lodi</td>
            <td style={tdStyle}>Montato finestre</td>

            <td style={tdStyle}>
              <span style={redText}>Foto modificabile</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Automatico</span>
            </td>
            <td style={tdStyle}>
              <span style={redText}>Da cliccare</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
