import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { Select, Input } from "antd";
import CantiereService from "../services/cantiere";
const { Option } = Select;

const cellHeaderStyle = {
  padding: "10px 8px",
  backgroundColor: "#dbe8dc",
  fontWeight: "bold",
  fontSize: "14px",
  textAlign: "left",
};

const calcolaGiorniUltimoAgg = (data) => {
  if (!data) return { text: "n.d.", color: "#999" };
  const [dd, mm, yyyy] = data.split("/");
  const dataAgg = new Date(`${yyyy}-${mm}-${dd}`);
  const giorni = Math.floor((new Date() - dataAgg) / (1000 * 60 * 60 * 24));
  if (giorni > 60) return { text: "> 60 gg", color: "red" };
  if (giorni > 30) return { text: "> 30 gg", color: "#ff9800" };
  return { text: "< 30 gg", color: "#2e7d32" };
};

const parseData = (str) => {
  if (!str) return new Date(0);
  const [dd, mm, yyyy] = str.split("/");
  return new Date(`${yyyy}-${mm}-${dd}`);
};
const headerTitleStyle = {
  backgroundColor: "#dbe8dc",
  textAlign: "center",
  padding: "12px 8px",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#333",
  borderBottom: "1px solid #ccc",
};

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

const TabelleCantieri = () => {
  const [tabellaGestione, setTabellaGestione] = useState([]);
  const [tabellaEsposizione, setTabellaEsposizione] = useState([]);
  const [visibleRowsGestione, setVisibleRowsGestione] = useState(10);
  const [visibleRowsEsposizione, setVisibleRowsEsposizione] = useState(10);

  useEffect(() => {
    const fetchCommesse = async () => {
      try {
        const dati = await CantiereService.ricercaCantieri({});

        const gestione = dati.map((c) => {
          const parsedDate = parseData(c.DataCreazioneCantiere);
          return {
            cod: c.IdCantiere,
            commessa: c.Indirizzo || "-",
            respUfficio: c.RespUfficio || "-",
            costi60gg:
              parseFloat((c.CostiUltimi60gg || "0").replace(/[^\d.-]/g, "")) ||
              0,
            aggiornataDa: calcolaGiorniUltimoAgg(c.DataCreazioneCantiere),
            dataObj: parsedDate,
          };
        });

        gestione.sort((a, b) => b.dataObj - a.dataObj);

        const esposizione = dati.map((c) => ({
          cod: c.IdCantiere,
          commessa: c.Indirizzo || "-",
          respUfficio: c.RespUfficio || "-",
          costiSostenuti:
            parseFloat((c.CostiSostenuti || "0").replace(/[^\d.-]/g, "")) || 0,
          esposizione:
            parseFloat(
              (c.EsposizioneEconomica || "0").replace(/[^\d.-]/g, "")
            ) || 0,
        }));

        setTabellaGestione(gestione);
        setTabellaEsposizione(esposizione);
      } catch (err) {
        console.error("Errore nel recupero delle commesse:", err);
      }
    };

    fetchCommesse();
  }, []);

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (nearBottom) {
        setVisibleRowsGestione((prev) => prev + 10);
        setVisibleRowsEsposizione((prev) => prev + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: "30px",
        flexWrap: "nowrap",
      }}
    >
      {/* Tabella sinistra */}
      <div style={{ width: "50%" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#eaf4ea",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <thead>
            <tr>
              <th colSpan="5" style={headerTitleStyle}>
                Aggiornamento controllo gestione
              </th>
            </tr>
            <tr>
              {[
                "Cod.",
                "Commessa",
                "Resp. Ufficio",
                "Costi ultimi 60 gg.",
                "Aggiornata da",
              ].map((label, idx) => (
                <th key={idx} style={cellHeaderStyle}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "white" }}>
            {tabellaGestione.slice(0, visibleRowsGestione).map((r, idx) => (
              <tr key={idx}>
                <td style={cellStyle}>{r.cod}</td>
                <td style={cellStyle}>{r.commessa}</td>
                <td style={cellStyle}>{r.respUfficio}</td>
                <td style={cellStyle}>€ {r.costi60gg.toFixed(2)}</td>
                <td
                  style={{
                    ...cellStyle,
                    color: r.aggiornataDa.color,
                    fontWeight: "bold",
                  }}
                >
                  {r.aggiornataDa.text}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabella destra */}
      <div style={{ width: "50%" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#eaf4ea",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <thead>
            <tr>
              <th colSpan="5" style={headerTitleStyle}>
                Esposizione cantieri
              </th>
            </tr>
            <tr>
              {[
                "Cod.",
                "Commessa",
                "Resp. Ufficio",
                "Costi sostenuti",
                "Esposizione",
              ].map((label, idx) => (
                <th key={idx} style={cellHeaderStyle}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "white" }}>
            {tabellaEsposizione
              .slice(0, visibleRowsEsposizione)
              .map((r, idx) => (
                <tr key={idx}>
                  <td style={cellStyle}>{r.cod}</td>
                  <td style={cellStyle}>{r.commessa}</td>
                  <td style={cellStyle}>{r.respUfficio}</td>
                  <td style={cellStyle}>€ {r.costiSostenuti.toFixed(2)}</td>
                  <td
                    style={{
                      ...cellStyle,
                      fontWeight: "bold",
                      color:
                        r.esposizione > 0
                          ? "red"
                          : r.esposizione === 0
                          ? "#ff9800"
                          : "#2e7d32",
                    }}
                  >
                    €{" "}
                    {r.esposizione.toLocaleString("it-IT", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
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
  const [tabellaGestione, setTabellaGestione] = useState([]);
  const [tabellaEsposizione, setTabellaEsposizione] = useState([]);

  useEffect(() => {
    const fetchCommesse = async () => {
      try {
        const dati = await CantiereService.ricercaCantieri({});

        // Funzione parsing data
        const parseData = (str) => {
          if (!str) return new Date(0);
          const [dd, mm, yyyy] = str.split("/");
          return new Date(`${yyyy}-${mm}-${dd}`);
        };

        // Dati tabella 1
        const gestione = dati.map((c) => {
          const parsedDate = parseData(c.DataCreazioneCantiere);
          return {
            cod: c.IdCantiere,
            commessa: c.Indirizzo || "-",
            respUfficio: c.RespUfficio || "-",
            costi60gg:
              parseFloat((c.CostiUltimi60gg || "0").replace(/[^\d.-]/g, "")) ||
              0,
            aggiornataDa: calcolaGiorniUltimoAgg(c.DataCreazioneCantiere),
            dataObj: parsedDate,
          };
        });

        // Ordina per data discendente (più recente in alto)
        gestione.sort((a, b) => b.dataObj - a.dataObj);

        // Dati tabella 2
        const esposizione = dati.map((c) => ({
          cod: c.IdCantiere,
          commessa: c.Indirizzo || "-",
          respUfficio: c.RespUfficio || "-",
          costiSostenuti:
            parseFloat((c.CostiSostenuti || "0").replace(/[^\d.-]/g, "")) || 0,
          esposizione:
            parseFloat(
              (c.EsposizioneEconomica || "0").replace(/[^\d.-]/g, "")
            ) || 0,
        }));

        setTabellaGestione(gestione);
        setTabellaEsposizione(esposizione);
      } catch (err) {
        console.error("Errore nel recupero delle commesse:", err);
      }
    };

    fetchCommesse();
  }, []);

  const calcolaGiorniUltimoAgg = (data) => {
    if (!data) return "n.d.";
    const [dd, mm, yyyy] = data.split("/");
    const dataAgg = new Date(`${yyyy}-${mm}-${dd}`);
    const giorni = Math.floor((new Date() - dataAgg) / (1000 * 60 * 60 * 24));
    if (giorni > 60) return { text: "> 60 gg", color: "red" };
    if (giorni > 30) return { text: "> 30 gg", color: "#ff9800" };
    return { text: "< 30 gg", color: "#2e7d32" };
  };

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
    0
  );

  const totaleSil = filteredCommesse.reduce(
    (acc, c) => acc + (parseInt(c.SilDaSalizzare) || 0),
    0
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
    0
  );

  const totaleLavoriAFinire = filteredCommesse.reduce(
    (acc, c) => acc + getEuroValue(c.LavoriAFinire),
    0
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
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
          marginBottom: 30,
        }}
      >
        {summaryCards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f3f6f4",
              padding: "30px 20px",
              borderRadius: 20,
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              minHeight: 100,
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600 }}>{card.label}</div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                marginTop: 10,
                color: card.color,
              }}
            >
              {card.value}
            </div>
          </div>
        ))}
      </div>

      <TabelleCantieri />
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
