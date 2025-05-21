import React, { useRef, useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";

const cellStyle = {
  textAlign: "center",
  padding: "10px",
  border: "1px solid #ccc",
};

const headerStyle = {
  backgroundColor: "#dbe8dc",
  fontWeight: "bold",
};

function DashboardPanoramica() {
  const bottomRef = useRef(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!bottomRef.current) return;
      const rect = bottomRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setScrolledToBottom(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>Panoramica</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          marginBottom: 30,
        }}
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

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          marginBottom: 40,
        }}
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

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <h4>Aggiornamento controllo gestione</h4>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={headerStyle}>
                <th style={cellStyle}>Cod.</th>
                <th style={cellStyle}>Commessa</th>
                <th style={cellStyle}>Resp. Ufficio</th>
                <th style={cellStyle}>Costi ultimi 60 gg.</th>
                <th style={cellStyle}>Aggiornata da</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cellStyle}>269</td>
                <td style={cellStyle}>Grillenzoni - Via Torre Portello</td>
                <td style={cellStyle}>Gabriele</td>
                <td style={cellStyle}>0,00 €</td>
                <td
                  style={{
                    ...cellStyle,
                    backgroundColor: "#f44336",
                    color: "#fff",
                  }}
                >
                  {"> 60 gg"}
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>270</td>
                <td style={cellStyle}>
                  Palazzo Veneziani - Via Frassoni 17 Finale
                </td>
                <td style={cellStyle}>Gabriele</td>
                <td style={cellStyle}>370,11 €</td>
                <td
                  style={{
                    ...cellStyle,
                    backgroundColor: "#ff9800",
                    color: "#fff",
                  }}
                >
                  {"> 30 gg"}
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>271</td>
                <td style={cellStyle}>Petocchi</td>
                <td style={cellStyle}>Filippo</td>
                <td style={cellStyle}>0,00 €</td>
                <td
                  style={{
                    ...cellStyle,
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                  }}
                >
                  {"< 30 gg"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4>Esposizione cantieri</h4>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={headerStyle}>
                <th style={cellStyle}>Cod.</th>
                <th style={cellStyle}>Commessa</th>
                <th style={cellStyle}>Resp. Ufficio</th>
                <th style={cellStyle}>Costi sostenuti</th>
                <th style={cellStyle}>Esposizione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cellStyle}>269</td>
                <td style={cellStyle}>Grillenzoni - Via Torre Portello</td>
                <td style={cellStyle}>Gabriele</td>
                <td style={cellStyle}>0,00 €</td>
                <td
                  style={{
                    ...cellStyle,
                    backgroundColor: "#f44336",
                    color: "#fff",
                  }}
                >
                  - € 50.000
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>270</td>
                <td style={cellStyle}>
                  Palazzo Veneziani - Via Frassoni 17 Finale
                </td>
                <td style={cellStyle}>Gabriele</td>
                <td style={cellStyle}>370,11 €</td>
                <td
                  style={{
                    ...cellStyle,
                    backgroundColor: "#ff9800",
                    color: "#fff",
                  }}
                >
                  € 0
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>271</td>
                <td style={cellStyle}>Petocchi</td>
                <td style={cellStyle}>Filippo</td>
                <td style={cellStyle}>0,00 €</td>
                <td
                  style={{
                    ...cellStyle,
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                  }}
                >
                  - € 50.000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div ref={bottomRef} style={{ marginTop: 40 }}>
        <h3 style={{ backgroundColor: "#dbe8dc", padding: "10px" }}>
          Dashboard
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: 20,
          }}
        >
          <thead>
            <tr style={headerStyle}>
              <th style={cellStyle}>Cod.</th>
              <th style={cellStyle}>Indirizzo</th>
              <th style={cellStyle}>Resp. Ufficio</th>
              <th style={cellStyle}>Stato</th>
              <th style={cellStyle}>Delta costi Fatture</th>
              <th style={cellStyle}>Costi 30 gg.</th>
              <th style={cellStyle}>Avanz. %</th>
              <th style={cellStyle}>Lavori a finire</th>
              <th style={cellStyle}>Sil da salizzare</th>
              <th style={cellStyle}>Sal da fatturare</th>
              <th style={cellStyle}>Margine %</th>
              <th style={cellStyle}>Data aggiornamento</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i}>
                {[...Array(12)].map((_, j) => (
                  <td key={j} style={cellStyle}></td>
                ))}
              </tr>
            ))}
            <tr style={{ backgroundColor: "#edf3ed", fontWeight: "bold" }}>
              <td style={cellStyle} colSpan={12}>
                TOTALI
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button className="btn btn-light">IMPORTA GARA</button>
          <button className="btn btn-light">CREA GARA</button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPanoramica;
