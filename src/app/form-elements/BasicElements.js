import React, { useState } from "react";
import { format } from "date-fns";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, Button } from "antd";
import { Select, Input } from "antd";

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
  const [activeTab, setActiveTab] = useState("Panoramica");
  const [commessaOption, setCommessaOption] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const summaryCards = [
    { label: "Aperte", value: 4, color: "#2e7d32" },
    { label: "Bloccate", value: 2, color: "#ff9800" },
    { label: "Chiuse", value: 3, color: "#d32f2f" },
    { label: "Costi 30 gg.", value: "€ 500.000", color: "#2e7d32" },
    { label: "Lavori a finire", value: "100.000", color: "#2e7d32" },
    { label: "Margine % medio", value: "20%", color: "#2e7d32" },
  ];

  const dashboardCards = [
    { label: "Commesse gestite", value: 4 },
    { label: "Sal da fatturare", value: "€ 10.000", highlight: true },
    { label: "Sil da salizzare", value: 4 },
    { label: "Commesse da aggiornare", value: 4 },
    { label: "Commessa migliore", value: "Cod 361", highlight: true },
    { label: "Commessa peggiore", value: "Cod 363", highlight: true },
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
      title="Crea Gara"
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
      <h3 style={{ backgroundColor: "#dbe8dc", padding: "10px" }}>Dashboard</h3>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
        <Button type="primary" onClick={() => setIsDrawerOpen(true)}>
          CREA GARA
        </Button>
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
