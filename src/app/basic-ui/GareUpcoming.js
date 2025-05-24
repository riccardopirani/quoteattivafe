import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import GaraService from "../services/api";
import Dashboard from "../dashboard/Dashboard";

const cellStyle = {
  textAlign: "center",
  verticalAlign: "middle",
  padding: "10px",
  border: "1px solid #b4c2b9",
};

const headerStyle = {
  backgroundColor: "#dbe8dc",
  color: "#000",
  fontWeight: "bold",
};

function parseDate(dateString) {
  return new Date(dateString);
}

function isAfter(date1, date2) {
  return date1.getTime() > date2.getTime();
}

function isBefore(date1, date2) {
  return date1.getTime() < date2.getTime();
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date) {
  return date.toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatCurrency(value) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value) {
  return `${value.toFixed(1)}%`;
}

function GareUpcoming() {
  const [gare, setGare] = useState([]);

  useEffect(() => {
    const fetchGare = async () => {
      const data = await GaraService.leggiGare();
      setGare(data);
    };
    fetchGare();
  }, []);

  const now = new Date();
  const in30Days = addDays(now, 30);

  const upcomingDelivery = gare.filter((g) => {
    const data = parseDate(g.ScadenzaConsegna);
    return isAfter(data, now) && isBefore(data, in30Days);
  });

  const recentlyDelivered = gare.filter((g) => {
    const data = parseDate(g.DataConsegna);
    return isAfter(data, now) && isBefore(data, in30Days);
  });

  const createChartData = (gareList) =>
    gareList.map((g) => {
      const total = g.TotaleEdili + g.TotaleMeccanici + g.TotaleElettrici;
      return {
        CodiceGara: g.IdGara,
        Edili: (g.TotaleEdili / total) * 100,
        Idraulici: (g.TotaleMeccanici / total) * 100,
        Elettrici: (g.TotaleElettrici / total) * 100,
      };
    });

  const upcomingChartData = createChartData(upcomingDelivery);
  const deliveredChartData = createChartData(recentlyDelivered);

  const sumColumn = (list, key) =>
    list.reduce((acc, g) => acc + (g[key] || 0), 0);

  const sumThreeColumns = (list) =>
    sumColumn(list, "TotaleEdili") +
    sumColumn(list, "TotaleMeccanici") +
    sumColumn(list, "TotaleElettrici");

  return (
    <div>
      <Dashboard />
      <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
        <h3 style={{ backgroundColor: "#dbe8dc", padding: "10px" }}>
          Gare da consegnare nei prossimi 30 gg.
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={headerStyle}>
              <th style={cellStyle}>Cod.</th>
              <th style={cellStyle}>Cliente</th>
              <th style={cellStyle}>Indirizzo cantiere</th>
              <th style={cellStyle}>Scadenza consegna</th>
              <th style={cellStyle}>Resp. gara</th>
              <th style={cellStyle}>Edili</th>
              <th style={cellStyle}>Meccanici</th>
              <th style={cellStyle}>Elettrici</th>
              <th style={cellStyle}>Totale</th>
            </tr>
          </thead>
          <tbody>
            {upcomingDelivery.map((g, i) => (
              <tr key={i}>
                <td style={cellStyle}>{g.IdGara}</td>
                <td style={cellStyle}>{g.Cliente}</td>
                <td style={cellStyle}>{g.UbicazioneLavori}</td>
                <td style={cellStyle}>
                  {formatDate(parseDate(g.ScadenzaConsegna))}
                </td>
                <td style={cellStyle}>{g.ResponsabileGara}</td>
                <td style={cellStyle}>{formatCurrency(g.TotaleEdili)}</td>
                <td style={cellStyle}>{formatCurrency(g.TotaleMeccanici)}</td>
                <td style={cellStyle}>{formatCurrency(g.TotaleElettrici)}</td>
                <td style={cellStyle}>
                  {formatCurrency(
                    g.TotaleEdili + g.TotaleMeccanici + g.TotaleElettrici,
                  )}
                </td>
              </tr>
            ))}
            <tr style={{ backgroundColor: "#edf3ed", fontWeight: "bold" }}>
              <td style={cellStyle} colSpan={5}>
                Totale importi gare da consegnare
              </td>
              <td style={cellStyle}>
                {formatCurrency(sumColumn(upcomingDelivery, "TotaleEdili"))}
              </td>
              <td style={cellStyle}>
                {formatCurrency(sumColumn(upcomingDelivery, "TotaleMeccanici"))}
              </td>
              <td style={cellStyle}>
                {formatCurrency(sumColumn(upcomingDelivery, "TotaleElettrici"))}
              </td>
              <td style={cellStyle}>
                {formatCurrency(sumThreeColumns(upcomingDelivery))}
              </td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ backgroundColor: "#dbe8dc", padding: "10px" }}>
          Gare da consegnate da più di 30 gg.
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={headerStyle}>
              <th style={cellStyle}>Cod.</th>
              <th style={cellStyle}>Cliente</th>
              <th style={cellStyle}>Indirizzo cantiere</th>
              <th style={cellStyle}>Data consegna</th>
              <th style={cellStyle}>Resp. gara</th>
              <th style={cellStyle}>Edili</th>
              <th style={cellStyle}>Meccanici</th>
              <th style={cellStyle}>Elettrici</th>
              <th style={cellStyle}>Totale</th>
            </tr>
          </thead>
          <tbody>
            {recentlyDelivered.map((g, i) => (
              <tr key={i}>
                <td style={cellStyle}>{g.IdGara}</td>
                <td style={cellStyle}>{g.Cliente}</td>
                <td style={cellStyle}>{g.UbicazioneLavori}</td>
                <td style={cellStyle}>
                  {formatDate(parseDate(g.DataConsegna))}
                </td>
                <td style={cellStyle}>{g.ResponsabileGara}</td>
                <td style={cellStyle}>{formatCurrency(g.TotaleEdili)}</td>
                <td style={cellStyle}>{formatCurrency(g.TotaleMeccanici)}</td>
                <td style={cellStyle}>{formatCurrency(g.TotaleElettrici)}</td>
                <td style={cellStyle}>
                  {formatCurrency(
                    g.TotaleEdili + g.TotaleMeccanici + g.TotaleElettrici,
                  )}
                </td>
              </tr>
            ))}
            <tr style={{ backgroundColor: "#edf3ed", fontWeight: "bold" }}>
              <td style={cellStyle} colSpan={5}>
                Totale importi gare consegnate
              </td>
              <td style={cellStyle}>
                {formatCurrency(sumColumn(recentlyDelivered, "TotaleEdili"))}
              </td>
              <td style={cellStyle}>
                {formatCurrency(
                  sumColumn(recentlyDelivered, "TotaleMeccanici"),
                )}
              </td>
              <td style={cellStyle}>
                {formatCurrency(
                  sumColumn(recentlyDelivered, "TotaleElettrici"),
                )}
              </td>
              <td style={cellStyle}>
                {formatCurrency(sumThreeColumns(recentlyDelivered))}
              </td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          <div>
            <h4 style={{ textAlign: "center" }}>Gare prossimi 30 gg</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={upcomingChartData}>
                <XAxis dataKey="CodiceGara" />
                <YAxis unit="%" />
                <Tooltip formatter={(value) => formatPercent(value)} />
                <Legend />
                <Bar dataKey="Edili" stackId="a" fill="#4CAF50" />
                <Bar dataKey="Idraulici" stackId="a" fill="#FFEB3B" />
                <Bar dataKey="Elettrici" stackId="a" fill="#2196F3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 style={{ textAlign: "center" }}>
              Gare Consegnate da più di 30gg
            </h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deliveredChartData}>
                <XAxis dataKey="CodiceGara" />
                <YAxis unit="%" />
                <Tooltip formatter={(value) => formatPercent(value)} />
                <Legend />
                <Bar dataKey="Edili" stackId="a" fill="#4CAF50" />
                <Bar dataKey="Idraulici" stackId="a" fill="#FFEB3B" />
                <Bar dataKey="Elettrici" stackId="a" fill="#2196F3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GareUpcoming;
