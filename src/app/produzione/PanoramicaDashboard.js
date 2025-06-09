import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "11/10/25", attivA: 20, manodopera: 30, aziende: 20 },
  { date: "12/10/25", attivA: 25, manodopera: 25, aziende: 30 },
  { date: "13/10/25", attivA: 15, manodopera: 20, aziende: 15 },
  { date: "14/10/25", attivA: 30, manodopera: 25, aziende: 15 },
];

const StatCard = ({ title, value, color }) => (
  <div
    style={{
      backgroundColor: "#e9f5ec",
      padding: "24px",
      borderRadius: "12px",
      textAlign: "center",
      minHeight: "100px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    }}
  >
    <div style={{ fontSize: "20px", fontWeight: "600" }}>{title}</div>
    <div style={{ fontSize: "36px", fontWeight: "800", color }}>{value}</div>
  </div>
);

const TableTop3 = ({ title }) => (
  <div style={{ width: "100%", maxWidth: "350px" }}>
    <div
      style={{
        backgroundColor: "#e9f5ec",
        textAlign: "center",
        fontWeight: "600",
        padding: "10px",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      {title}
    </div>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        border: "1px solid #ccc",
        fontSize: "14px",
      }}
    >
      <thead style={{ backgroundColor: "#f4f4f4" }}>
        <tr>
          <th style={{ padding: "8px", textAlign: "left" }}>Num.</th>
          <th style={{ padding: "8px", textAlign: "left" }}>Azienda</th>
          <th style={{ padding: "8px", textAlign: "left" }}>Ore lavorate</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(3)].map((_, idx) => (
          <tr key={idx}>
            <td style={{ padding: "8px", color: "#888" }}>{idx + 1}</td>
            <td style={{ padding: "8px", color: "#bbb" }}>-</td>
            <td style={{ padding: "8px", color: "#bbb" }}>-</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function PanoramicaDashboard() {
  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>
        Panoramica
      </h1>

      {/* STAT CARDS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <StatCard title="Aperte" value="4" color="#2e7d32" />
        <StatCard title="Bloccate" value="2" color="#ff9800" />
        <StatCard title="Chiuse" value="3" color="red" />
      </div>

      {/* TABELLE */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginBottom: "40px",
        }}
      >
        <TableTop3 title="Top 3 produzione aziende" />
        <TableTop3 title="Top 3 produzione manodopera" />
        <TableTop3 title="Top 3 produzione cantieri" />
      </div>

      {/* GRAFICO */}
      <div>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "10px",
            color: "#333",
          }}
        >
          Andamento ore lavorate
        </h2>
        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="attivA" stackId="a" fill="#90caf9" name="Attiv.A" />
              <Bar
                dataKey="manodopera"
                stackId="a"
                fill="#ffca28"
                name="Manodopera"
              />
              <Bar
                dataKey="aziende"
                stackId="a"
                fill="#66bb6a"
                name="Aziende"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
