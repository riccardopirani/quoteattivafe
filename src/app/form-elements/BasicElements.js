import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { Select, Input } from "antd";
import CantiereService from "../services/cantiere";
const { Option } = Select;

const tabStyle = {
  padding: "10px 20px",
  cursor: "pointer",
  borderBottom: "3px solid transparent",
  fontWeight: "bold",
};

const activeTabStyle = {
  ...tabStyle,
  borderBottom: "3px solid #2e7d32",
  color: "#2e7d32",
};

const cellStyle = {
  textAlign: "center",
  padding: "10px",
  border: "1px solid #ccc",
};

const headerStyle = {
  backgroundColor: "#dbe8dc",
  fontWeight: "bold",
};

function DashboardTabsPanoramica() {
  const [commesse, setCommesse] = useState([]);
  const [filteredCommesse, setFilteredCommesse] = useState([]);
  const [filters, setFilters] = useState({
    codice: "",
    indirizzo: "",
    stato: "",
    respUfficio: "",
  });
  const [activeTab, setActiveTab] = useState("Panoramica");
  const [commessaOption, setCommessaOption] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [summaryCards, setSummaryCards] = useState([]);

  useEffect(() => {
    const filtra = commesse.filter((c) => {
      return (
        (filters.codice === "" ||
          c.IdCantiere.toString().includes(filters.codice)) &&
        (filters.indirizzo === "" ||
          (c.Indirizzo || "")
            .toLowerCase()
            .includes(filters.indirizzo.toLowerCase())) &&
        (filters.stato === "" ||
          (c.StatoCantiere || "")
            .toLowerCase()
            .includes(filters.stato.toLowerCase())) &&
        (filters.respUfficio === "" ||
          (c.RespUfficio || "")
            .toLowerCase()
            .includes(filters.respUfficio.toLowerCase()))
      );
    });
    setFilteredCommesse(filtra);
  }, [filters, commesse]);

  useEffect(() => {
    const fetchCommesse = async () => {
      const dati = await CantiereService.ricercaCantieri({});
      setCommesse(dati); // Salva per la tabella

      try {
        const dati = await CantiereService.ricercaCantieri({});
        let aperte = 0,
          bloccate = 0,
          chiuse = 0;

        dati.forEach((c) => {
          console.log("Cantiere:", c);
          const stato = (c.StatoCantiere || "").toLowerCase();

          if (stato.includes("chiuso")) {
            chiuse++;
          } else if (
            stato === "incorso" ||
            stato.includes("lavoro terminato")
          ) {
            aperte++;
          } else {
            bloccate++;
          }
        });
        setSummaryCards([
          { label: "Aperte", value: aperte, color: "#2e7d32" },
          { label: "Bloccate", value: bloccate, color: "#ff9800" },
          { label: "Chiuse", value: chiuse, color: "red" },
          {
            label: "Costi 30 gg.",
            value: `€ ${totaleCosti30gg.toLocaleString("it-IT", {
              maximumFractionDigits: 0,
            })}`,
            color: "#2e7d32",
          },
          {
            label: "Lavori a finire",
            value: `€ ${totaleLavoriAFinire.toLocaleString("it-IT", {
              maximumFractionDigits: 0,
            })}`,
            color: "#2e7d32",
          },
          {
            label: "Margine % medio",
            value: `${mediaMargine}%`,
            color: "#2e7d32",
          },
        ]);
      } catch (err) {
        console.error("Errore nel recupero delle commesse:", err);
      }
    };

    fetchCommesse();
  }, []);

  // FUNZIONE UTILITY
  const getEuroValue = (str) =>
    parseFloat((str || "0").replace(/[^\d.-]/g, "")) || 0;

  const now = new Date();
  const MILLISECONDS_IN_30_DAYS = 30 * 24 * 60 * 60 * 1000;

  // 🔢 CALCOLI PRIMA DI dashboardCards
  const totaleSal = filteredCommesse.reduce(
    (acc, c) => acc + getEuroValue(c.SalDaFatturare),
    0,
  );

  const totaleSil = filteredCommesse.reduce(
    (acc, c) => acc + (parseInt(c.SilDaSalizzare) || 0),
    0,
  );

  const commesseDaAggiornare = filteredCommesse.filter((c) => {
    const dataAgg = c.DataCreazioneCantiere;
    if (!dataAgg) return false;
    const [day, month, year] = dataAgg.split("/");
    const dateObj = new Date(`${year}-${month}-${day}`);
    return now - dateObj > MILLISECONDS_IN_30_DAYS;
  }).length;

  let commessaMigliore = null;
  let commessaPeggiore = null;
  let maxMargine = -Infinity;
  let minMargine = Infinity;

  filteredCommesse.forEach((c) => {
    const margine = getEuroValue(c.MarginePercentuale);
    if (margine > maxMargine) {
      maxMargine = margine;
      commessaMigliore = c;
    }
    if (margine < minMargine) {
      minMargine = margine;
      commessaPeggiore = c;
    }
  });
  const totaleCosti30gg = filteredCommesse.reduce(
    (acc, c) => acc + getEuroValue(c.Costi30gg),
    0,
  );

  const totaleLavoriAFinire = filteredCommesse.reduce(
    (acc, c) => acc + getEuroValue(c.LavoriAFinire),
    0,
  );

  const marginiValidi = filteredCommesse
    .map((c) => getEuroValue(c.MarginePercentuale))
    .filter((v) => !isNaN(v));

  const mediaMargine =
    marginiValidi.length > 0
      ? (
          marginiValidi.reduce((acc, val) => acc + val, 0) /
          marginiValidi.length
        ).toFixed(1)
      : "0";
  // ✅ ORA PUOI DEFINIRE dashboardCards
  const dashboardCards = [
    { label: "Commesse gestite", value: filteredCommesse.length },
    {
      label: "Sal da fatturare",
      value: `€ ${totaleSal.toLocaleString("it-IT", {
        maximumFractionDigits: 0,
      })}`,
      highlight: true,
    },
    {
      label: "Sil da salizzare",
      value: totaleSil,
    },
    {
      label: "Commesse da aggiornare",
      value: commesseDaAggiornare,
    },
    {
      label: "Commessa migliore",
      value: commessaMigliore ? `Cod ${commessaMigliore.IdCantiere}` : "-",
      highlight: true,
    },
    {
      label: "Commessa peggiore",
      value: commessaPeggiore ? `Cod ${commessaPeggiore.IdCantiere}` : "-",
      highlight: true,
    },
  ];

  const handleCommessaSelection = (value) => {
    setCommessaOption(value);
    if (value === "nuova") {
      setIsDrawerOpen(false);
      window.location.href = "/gestione/commesse?modalita=nuova";
    }
  };

  const renderDrawer = () => (
    <Drawer
      title="Crea Commessa"
      placement="right"
      closable
      onClose={() => setIsDrawerOpen(false)}
      open={isDrawerOpen}
    >
      <Select
        style={{ width: "100%" }}
        placeholder="Seleziona un'opzione"
        onChange={handleCommessaSelection}
      >
        <Option value="aggancia">Aggancia a commessa esistente</Option>
        <Option value="nuova">Nuova commessa</Option>
      </Select>

      {commessaOption === "aggancia" && (
        <div style={{ marginTop: 20 }}>
          <Input placeholder="Filtro per Codice" style={{ marginBottom: 10 }} />
          <Input placeholder="Filtro per Ragione Sociale" />
        </div>
      )}

      <div style={{ marginTop: 20, textAlign: "right" }}>
        <Button onClick={() => setIsDrawerOpen(false)}>Chiudi</Button>
      </div>
    </Drawer>
  );

  filteredCommesse.forEach((c) => {
    const margine = getEuroValue(c.MarginePercentuale); // assume e.g., "20%" or "0%"
    if (margine > maxMargine) {
      maxMargine = margine;
      commessaMigliore = c;
    }
    if (margine < minMargine) {
      minMargine = margine;
      commessaPeggiore = c;
    }
  });

  const renderPanoramica = () => (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 30 }}
      >
        {summaryCards.map((card, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 30%",
              backgroundColor: "#f1f5f3",
              padding: 20,
              borderRadius: 10,
              textAlign: "center",
              minWidth: 150,
            }}
          >
            <div style={{ fontWeight: "bold" }}>{card.label}</div>
            <div
              style={{ fontSize: 24, color: card.color, fontWeight: "bold" }}
            >
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const renderDashboard = () => (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 30 }}
      >
        {dashboardCards.map((card, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 15%",
              backgroundColor: "#e6efe7",
              borderRadius: 10,
              padding: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div>{card.label}</div>
            <div
              style={{
                color: card.highlight ? "#2e7d32" : "#000",
                fontSize: 22,
              }}
            >
              {card.value}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40 }}>
        <h3 style={{ backgroundColor: "#dbe8dc", padding: "10px" }}>
          Dashboard
        </h3>
        <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
          <Input
            placeholder="Filtra Codice"
            value={filters.codice}
            onChange={(e) => setFilters({ ...filters, codice: e.target.value })}
            style={{ width: 120 }}
          />
          <Input
            placeholder="Filtra Indirizzo"
            value={filters.indirizzo}
            onChange={(e) =>
              setFilters({ ...filters, indirizzo: e.target.value })
            }
            style={{ width: 200 }}
          />
          <Input
            placeholder="Filtra Resp. Ufficio"
            value={filters.respUfficio}
            onChange={(e) =>
              setFilters({ ...filters, respUfficio: e.target.value })
            }
            style={{ width: 200 }}
          />
          <Input
            placeholder="Filtra Stato"
            value={filters.stato}
            onChange={(e) => setFilters({ ...filters, stato: e.target.value })}
            style={{ width: 160 }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <Button
            onClick={() => setIsDrawerOpen(true)}
            style={{
              backgroundColor: "#9e9e9e", // grigio chiaro
              color: "#ffffff", // testo bianco
              border: "none",
              fontWeight: "bold",
            }}
          >
            Crea Commessa
          </Button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#f9f9f9",
              marginTop: 10,
            }}
          >
            <thead>
              <tr>
                {[
                  "Cod.",
                  "Indirizzo",
                  "Resp. Ufficio",
                  "Stato",
                  "Delta costi Fatture",
                  "Costi 30 gg.",
                  "Avanz. %",
                  "Lavori a finire",
                  "Sil da salizzare",
                  "Sal da fatturare",
                  "Margine %",
                  "Data aggiornamento",
                ].map((label, idx) => (
                  <th key={idx} style={{ ...cellStyle, ...headerStyle }}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCommesse.map((c, i) => (
                <tr key={i}>
                  <td style={cellStyle}>{c.IdCantiere}</td>
                  <td style={cellStyle}>{c.Indirizzo}</td>
                  <td style={cellStyle}>{c.RespUfficio || "-"}</td>
                  <td style={cellStyle}>{c.StatoCantiere}</td>
                  <td style={cellStyle}>€ 0</td>
                  <td style={cellStyle}>€ 0</td>
                  <td style={cellStyle}>0%</td>
                  <td style={cellStyle}>€ 0</td>
                  <td style={cellStyle}>0</td>
                  <td style={cellStyle}>€ 0</td>
                  <td style={cellStyle}>0%</td>
                  <td style={cellStyle}>{c.DataCreazioneCantiere}</td>
                </tr>
              ))}
              <tr style={{ backgroundColor: "#eaf4ea", fontWeight: "bold" }}>
                <td style={cellStyle} colSpan={4}>
                  TOTALI
                </td>
                <td style={cellStyle}>€ 0</td>
                <td style={cellStyle}>€ 0</td>
                <td style={cellStyle}></td>
                <td style={cellStyle}>€ 0</td>
                <td style={cellStyle}></td>
                <td style={cellStyle}>€ 0</td>
                <td style={cellStyle}>0%</td>
                <td style={cellStyle}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {renderDrawer()}
    </>
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #ccc",
          marginBottom: 20,
        }}
      >
        <div
          style={activeTab === "Panoramica" ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab("Panoramica")}
        >
          Panoramica
        </div>
        <div
          style={activeTab === "Dashboard" ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab("Dashboard")}
        >
          Dashboard
        </div>
      </div>
      {activeTab === "Panoramica" ? renderPanoramica() : renderDashboard()}
    </div>
  );
}

export default DashboardTabsPanoramica;
