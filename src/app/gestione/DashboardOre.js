import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const giorni = [
  "11/10/25",
  "12/10/25",
  "13/10/25",
  "14/10/25",
  "15/10/25",
  "16/10/25",
  "17/10/25",
];

const dataOre = [
  { giorno: "11/10/25", AttivA: 20, Manodopera: 34, Aziende: 16 },
  { giorno: "12/10/25", AttivA: 30, Manodopera: 24, Aziende: 24 },
  { giorno: "13/10/25", AttivA: 14, Manodopera: 15, Aziende: 18 },
  { giorno: "14/10/25", AttivA: 18, Manodopera: 24, Aziende: 15 },
  { giorno: "15/10/25", AttivA: 34, Manodopera: 14, Aziende: 30 },
  { giorno: "16/10/25", AttivA: 31, Manodopera: 22, Aziende: 12 },
  { giorno: "17/10/25", AttivA: 12, Manodopera: 18, Aziende: 32 },
];

const DashboardOre = () => {
  const cellStyle = {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "center",
  };

  const headerStyle = {
    backgroundColor: "#e6f2e6",
    fontWeight: "bold",
    padding: "8px",
    textAlign: "center",
    border: "1px solid #ccc",
  };

  const tipologie = ["Attiv.A", "Manodopera", "Aziende"];

  const getOre = (giorno, tipo) => {
    const entry = dataOre.find((d) => d.giorno === giorno);
    return entry ? entry[tipo.replace(".", "")] : 0;
  };

  const totaleGiorno = (giorno) => {
    const entry = dataOre.find((d) => d.giorno === giorno);
    return entry
      ? Object.values(entry).reduce(
          (a, b) => a + (typeof b === "number" ? b : 0),
          0
        )
      : 0;
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h3 style={{ marginBottom: 20 }}>ANDAMENTO ORE LAVORATE</h3>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginBottom: 30 }}
      >
        <thead>
          <tr>
            <th rowSpan="2" style={headerStyle}>
              Commessa
            </th>
            <th rowSpan="2" style={headerStyle}>
              Tipo
            </th>
            {giorni.map((g) => (
              <th key={g} style={headerStyle}>
                {g}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {["Cod. 365 Bunge", "Cod. 364 Pir"].map((commessa) =>
            tipologie.map((tipo, idx) => (
              <tr key={`${commessa}-${tipo}`}>
                {idx === 0 && (
                  <td rowSpan={3} style={{ ...cellStyle, fontWeight: "bold" }}>
                    {commessa}
                  </td>
                )}
                <td
                  style={{
                    ...cellStyle,
                    backgroundColor:
                      tipo === "Attiv.A"
                        ? "#4CAF50"
                        : tipo === "Manodopera"
                        ? "#FFC107"
                        : "#90CAF9",
                    color: tipo === "Aziende" ? "#000" : "#000",
                    fontWeight: "bold",
                  }}
                >
                  {tipo}
                </td>
                {giorni.map((g) => (
                  <td key={g} style={cellStyle}>
                    {commessa === "Cod. 365 Bunge" ? getOre(g, tipo) : 0}
                  </td>
                ))}
              </tr>
            ))
          )}
          <tr>
            <td style={{ ...cellStyle, fontWeight: "bold" }} colSpan={2}>
              Totale ore lavorate
            </td>
            {giorni.map((g) => (
              <td key={g} style={{ ...cellStyle, fontWeight: "bold" }}>
                {totaleGiorno(g)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <h3 style={{ marginBottom: 10 }}>Grafico ore lavorate</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dataOre}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="giorno" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Aziende" stackId="a" fill="#90CAF9" />
            <Bar dataKey="Manodopera" stackId="a" fill="#FFC107" />
            <Bar dataKey="AttivA" stackId="a" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardOre;
