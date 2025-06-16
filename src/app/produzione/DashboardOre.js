import React, { useState, useEffect } from "react";
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
import { PieChart, Pie, Cell } from "recharts";
import CantiereService from "../services/cantiere";
const COLORS = ["#1f77b4", "#ff7f0e"];

const Card = ({ children }) => (
  <div className="rounded-2xl shadow-md p-4 bg-white h-full flex flex-col">
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="space-y-4 flex flex-col h-full justify-between">
    {children}
  </div>
);

const referentiData = [
  { nome: "Moris", manodopera: 1, noleggi: 3, aziende: 4 },
  { nome: "Vincenzo", manodopera: 1, noleggi: 3, aziende: 4 },
  { nome: "Andrea", manodopera: 1, noleggi: 3, aziende: 4 },
  { nome: "Antonio", manodopera: 1, noleggi: 3, aziende: 4 },
  { nome: "Roberto", manodopera: 1, noleggi: 3, aziende: 4 },
];

const manodoperaData = [
  { name: "Coem", value: 10 },
  { name: "P. Biondo", value: 5 },
];

const aziendeData = [
  { name: "Gilli", value: 9 },
  { name: "Lodi", value: 7 },
];

function RegistroProduzione() {
  return (
    <div className="p-4 space-y-8">
      {/*<Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-4 text-center">
            Righe da registrare
          </h2>
          <table className="w-full text-center border">
            <thead className="bg-green-100">
              <tr>
                <th>Referente</th>
                <th>Manodopera</th>
                <th>Noleggi</th>
                <th>Aziende</th>
                <th>Totale</th>
              </tr>
            </thead>
            <tbody>
              {referentiData.map((r, i) => (
                <tr key={i} className="border-t">
                  <td>{r.nome}</td>
                  <td>{r.manodopera}</td>
                  <td>{r.noleggi}</td>
                  <td>{r.aziende}</td>
                  <td className="font-bold">
                    {r.manodopera + r.noleggi + r.aziende}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>*/}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold mb-2 text-center">
                Produzione manodopera
              </h2>
              <table className="w-full text-center">
                <thead className="bg-green-100">
                  <tr>
                    <th>Manodopera</th>
                    <th>Ore lavorate</th>
                  </tr>
                </thead>
                <tbody>
                  {manodoperaData.map((m, i) => (
                    <tr key={i}>
                      <td>{m.name}</td>
                      <td>{m.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <PieChart width={300} height={250} className="mx-auto">
                <Pie
                  data={manodoperaData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {manodoperaData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col space-y-4">
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold mb-2 text-center">
                Produzione aziende
              </h2>
              <table className="w-full text-center">
                <thead className="bg-green-100">
                  <tr>
                    <th>Azienda</th>
                    <th>Ore lavorate</th>
                  </tr>
                </thead>
                <tbody>
                  {aziendeData.map((a, i) => (
                    <tr key={i}>
                      <td>{a.name}</td>
                      <td>{a.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <PieChart width={300} height={250} className="mx-auto">
                <Pie
                  data={aziendeData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {aziendeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const getCurrentWeekDates = () => {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + 1); // lunedì

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d.toLocaleDateString("it-IT"); // "gg/mm/aaaa"
  });
};

const giorni = getCurrentWeekDates();

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
  const [datiOreCommessa, setDatiOreCommessa] = useState([]);
  const [datiOreSettimana, setDatiOreSettimana] = useState([]);
  useEffect(() => {
    const caricaDati = async () => {
      try {
        const dati = await CantiereService.caricarisorsedashboard({});
        const dataAggregata = {};
        const dettaglioCommessa = {};

        dati.forEach((item) => {
          const { OreInizio, NomeCantiere, Azienda } = item;
          if (!OreInizio || !NomeCantiere || !Azienda) return;

          const data = new Date(OreInizio);
          const giorno = data.toLocaleDateString("it-IT");
          const oreRaw = data.getHours() + data.getMinutes() / 60;
          const ore = Math.round(oreRaw); // ⬅️ Arrotondamento a 0 decimali

          // Aggregato per grafico
          if (!dataAggregata[giorno]) {
            dataAggregata[giorno] = {
              giorno,
              AttivA: 0,
              Manodopera: 0,
              Aziende: 0,
            };
          }
          if (Azienda === "Attiva Costruzioni S.r.l.") {
            dataAggregata[giorno].AttivA += ore;
          } else if (Azienda === "Manodopera") {
            dataAggregata[giorno].Manodopera += ore;
          } else {
            dataAggregata[giorno].Aziende += ore;
          }

          // Dettaglio per tabella
          const key = `${NomeCantiere}|||${Azienda}`;
          if (!dettaglioCommessa[key]) {
            dettaglioCommessa[key] = {
              NomeCantiere,
              Azienda,
            };
          }

          dettaglioCommessa[key][giorno] =
            (dettaglioCommessa[key][giorno] || 0) + ore;
        });

        const weekDates = getCurrentWeekDates();

        // Popola i dati per il grafico
        const weekData = weekDates.map(
          (g) =>
            dataAggregata[g] || {
              giorno: g,
              AttivA: 0,
              Manodopera: 0,
              Aziende: 0,
            }
        );
        setDatiOreSettimana(weekData);

        // Normalizza i dati per la tabella
        const tabellaCommessa = Object.values(dettaglioCommessa).map((r) => {
          const riga = { ...r };
          weekDates.forEach((g) => {
            riga[g] = r[g] || 0;
          });
          return riga;
        });
        setDatiOreCommessa(tabellaCommessa);
      } catch (err) {
        console.error("Errore caricamento dati dashboard:", err);
      }
    };

    caricaDati();
  }, []);

  const cellStyle = {
    border: "1px solid #ccc",
    padding: "6px",
    textAlign: "center",
  };

  const headerStyle = {
    backgroundColor: "#e6f2e6",
    fontWeight: "bold",
    padding: "6px",
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
      <h3 style={{ marginBottom: 20, borderBottom: "2px solid #ccc" }}>
        ANDAMENTO ORE LAVORATE
      </h3>
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
          <tr>
            {giorni.map((_, i) => {
              if (i === 5) {
                return (
                  <th key="dal" style={{ ...headerStyle, color: "gray" }}>
                    DaL.
                  </th>
                );
              }
              if (i === 6) {
                return (
                  <th key="al" style={{ ...headerStyle, color: "gray" }}>
                    Al
                  </th>
                );
              }
              return <th key={`empty-${i}`} style={headerStyle}></th>;
            })}
          </tr>
        </thead>
        <tbody>
          {datiOreCommessa.map((riga, idx) => (
            <tr key={idx}>
              <td style={cellStyle}>{riga.NomeCantiere}</td>
              <td
                style={{
                  ...cellStyle,
                  fontWeight: "bold",
                  backgroundColor:
                    riga.Azienda === "Attiva Costruzioni S.r.l."
                      ? "#4CAF50" // verde
                      : riga.Azienda === "Manodopera"
                      ? "#FFC107" // giallo
                      : "#FF8A80", // rosso
                  color: "#000",
                }}
              >
                {riga.Azienda}
              </td>

              {giorni.map((g) => (
                <td key={g} style={cellStyle}>
                  {riga[g] || 0}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={2} style={{ ...cellStyle, fontWeight: "bold" }}>
              Totale ore lavorate
            </td>
            {giorni.map((g, idx) => {
              const totale = datiOreCommessa.reduce(
                (sum, r) => sum + (r[g] || 0),
                0
              );
              return (
                <td key={idx} style={{ ...cellStyle, fontWeight: "bold" }}>
                  {totale}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>

      <h3 style={{ marginBottom: 10 }}>Grafico ore lavorate</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={datiOreSettimana}>
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
      <RegistroProduzione />
    </div>
  );
};

export default DashboardOre;
