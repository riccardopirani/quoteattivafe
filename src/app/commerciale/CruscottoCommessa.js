import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "react-datepicker/dist/react-datepicker.css";
import CantiereService from "../services/cantiere";
import dayjs from "dayjs";
import moment from "moment";
import "moment/locale/it";
import { BarChart, Bar } from "recharts";
import { getTotaliCostiERicavi } from "../shared/Helper.js";
import "sweetalert2/dist/sweetalert2.min.css";
moment.locale("it");

const CruscottoCommessa = ({
  commessa,
  percentualeAvanzamento,
  totaleProduzione,
  produzioneResidua,
  avanzamentoSAL,
  totaleSAL,
  salNonFatturati,
  percentualeFatturazione,
  totaleFatturato,
  produzioneNonFatturata,
}) => {
  const [chartData, setChartData] = useState([]);
  const [marginePerc, setMarginePerc] = useState(0);
  const [margineVal, setMargineVal] = useState(0);
  const [dataAggiornamento, setDataAggiornamento] = useState("");
  const [fattureTotali, setFattureTotali] = useState(0);
  const [ricaviTotali, setTotalRicavi] = useState(0);
  const [costiTotali, setCostiTotali] = useState(0);

  const [datiGenerali, setDatiGenerali] = useState({
    statoDinamico: "BLOCCATO",
  });
  const [contratti, setContratti] = useState([]);
  const [datiContratti, setDatiContratti] = useState([]);
  const [righeFatture, setRigheFatture] = useState([]);

  useEffect(() => {
    if (commessa?.IdCantiere) {
      CantiereService.statoCommessa({ Codice: commessa.NomeCantiere })
        .then((result) => {
          const statoPulito = result.trim().toUpperCase();
          let statoLabel = "BLOCCATO";
          if (statoPulito.includes("A")) statoLabel = "APERTO";
          else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
          else if (statoPulito.includes("C")) statoLabel = "CHIUSO";
          setDatiGenerali({ statoDinamico: statoLabel });
        })
        .catch((err) =>
          console.error("Errore nel recupero dello stato cantiere:", err)
        );

      CantiereService.graficoCommessa({ Codice: commessa.NomeCantiere })
        .then((dati) => {
          const datiPerMese = {};
          let totaleCosti = 0;
          let totaleRicavi = 0;
          let ultimaData = null;

          const totaleCostiSenzaRicavi = dati
            .filter((voce) => voce.Descrizione.toLowerCase() === "costi")
            .filter((voce) => {
              const codiceNodo = voce.CodiceNodo || "";
              return !codiceNodo.startsWith("R");
            })
            .reduce((acc, voce) => acc + (Number(voce.CostoTotale) || 0), 0);

          for (const voce of dati) {
            const mese = voce.MeseAnno;
            if (!datiPerMese[mese]) {
              datiPerMese[mese] = { month: mese, costi: 0, ricavi: 0 };
            }

            if (
              voce.Descrizione.toLowerCase() === "costi" &&
              !(voce.CodiceNodo || "").startsWith("R")
            ) {
              datiPerMese[mese].costi += voce.CostoTotale;
              totaleCosti += voce.CostoTotale;
            } else if (voce.Descrizione.toLowerCase() === "ricavi") {
              datiPerMese[mese].ricavi += voce.CostoTotale;
              totaleRicavi += voce.CostoTotale;
            }

            if (!ultimaData || dayjs(mese).isAfter(dayjs(ultimaData))) {
              ultimaData = mese;
            }
          }

          const margine = totaleRicavi - totaleCosti;
          const perc =
            totaleRicavi > 0
              ? (((totaleCosti - totaleRicavi) / totaleCosti) * 100).toFixed(2)
              : "0.00";
          setCostiTotali(totaleCostiSenzaRicavi);
          setMargineVal(margine);
          setMarginePerc(perc);
          setDataAggiornamento(dayjs(ultimaData).format("DD MMM YYYY"));

          const chart = Object.values(datiPerMese)
            .sort((a, b) => a.month.localeCompare(b.month))
            .map((el) => ({
              ...el,
              label: dayjs(el.month).format("MMM-YY"),
            }));

          setChartData(chart);
        })
        .catch((err) => console.error("Errore caricamento dati grafico:", err));

      getTotaliCostiERicavi(commessa.IdCantiere, commessa.NomeCantiere)
        .then(({ totaleCostiSenzaRicavi, totaleRicavi }) => {
          const esposizione = totaleRicavi - totaleCostiSenzaRicavi;
          console.log(totaleCostiSenzaRicavi, totaleRicavi);
          setCostiTotali(totaleCostiSenzaRicavi);
          setTotalRicavi(totaleRicavi);
          setMargineVal(esposizione);
          setMarginePerc(
            totaleRicavi > 0
              ? ((esposizione / totaleRicavi) * 100).toFixed(2)
              : "0.00"
          );
        })
        .catch((err) => console.error("Errore nel calcolo costi/ricavi:", err));
    }
  }, [commessa]);
  useEffect(() => {
    const iniziali = contratti.map((c) => {
      const costo = Number(c?.Costo || 0);
      const quantita = Number(c?.Quantita || 1);
      const produzioneTotale = costo * quantita;
      return {
        ...c,
        produzioneTotale,
        produzioneResidua: produzioneTotale,
      };
    });
    setDatiContratti(iniziali);
    const fetchStato = async () => {
      if (!commessa?.NomeCantiere) return;

      try {
        const result = await CantiereService.statoCommessa({
          Codice: commessa.NomeCantiere,
        });

        const statoPulito = result?.trim().toUpperCase();
        let statoLabel = "BLOCCATO";

        if (statoPulito.includes("A")) statoLabel = "APERTO";
        else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
        else if (statoPulito.includes("C")) statoLabel = "CHIUSO";

        setDatiGenerali((prev) => ({
          ...prev,
          statoDinamico: statoLabel,
        }));
      } catch (error) {
        console.error("Errore nel recupero dello stato cantiere:", error);
      }
    };

    fetchStato();
  }, [contratti]);

  return (
    <div style={{ padding: "1rem", backgroundColor: "white" }}>
      <div
        style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1rem" }}
      >
        Cod. {commessa?.NomeCantiere || "—"} {commessa?.RagioneSociale || ""}{" "}
        {commessa?.Indirizzo || ""}
        <span
          style={{
            float: "right",
            backgroundColor: (() => {
              const stato = datiGenerali.statoDinamico || "";
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
          {datiGenerali?.statoDinamico || "BLOCCATO"}
        </span>
      </div>

      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        Costi Ricavi Margine
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "0.85rem",
          marginBottom: "0.5rem",
        }}
      >
        <span style={{ backgroundColor: "#e0e0e0", padding: "0.2rem 1rem" }}>
          Data aggiornamento
        </span>
        <span style={{ padding: "0.2rem 1rem" }}>
          {moment(dataAggiornamento).format("D MMM YYYY")}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#e0eee3",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
          }}
        >
          Margine %
          <span style={{ marginLeft: "1rem" }}>{Math.ceil(marginePerc)} %</span>
        </div>
        <div
          style={{
            backgroundColor: "#e0eee3",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
          }}
        >
          Margine di commessa
          <span style={{ marginLeft: "1rem" }}>
            € {Math.ceil(Math.abs(margineVal)).toLocaleString()}
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `${value.toLocaleString()} €`} />
          <Tooltip formatter={(value) => `${value.toLocaleString()} €`} />
          <Legend />
          <Line type="monotone" dataKey="costi" stroke="red" name="Costi" />
          <Line type="monotone" dataKey="ricavi" stroke="green" name="Ricavi" />
        </LineChart>
      </ResponsiveContainer>
      <div
        style={{
          fontFamily: "Arial, sans-serif",

          padding: "1rem",
        }}
      >
        {/* GESTIONE FINANZIARIA */}
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          Gestione finanziaria
        </div>

        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span
            style={{
              background: "#ddd",
              padding: "0.3rem 1rem",
              borderRadius: 4,
            }}
          >
            Data aggiornamento
          </span>
          <span
            style={{
              marginLeft: 10,
              padding: "0.3rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          >
            {dataAggiornamento}
          </span>
        </div>

        {/* Bars */}
        {[
          {
            label: "Avanzamento commessa",
            text: `Avanzamento produzione: ${Number(
              percentualeAvanzamento
            ).toFixed(2)}%`,
            value: "",
            barColor: "#b6dfc4",
            rightLabel: "Produzione non salizzata",
            rightValue: `€ ${Number(produzioneResidua).toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}`,
            rightBg: "#f5f5f5",
          },
          {
            label: "Avanzamento SAL",
            text: `Avanzamento SAL: ${Number(avanzamentoSAL).toFixed(2)}%`,
            value: `€ ${Number(totaleSAL).toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}`,
            barColor: "#b6dfc4",
            rightLabel: "SAL non fatturati",
            rightValue: `€ ${Number(salNonFatturati).toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}`,
            rightBg: "#f5f5f5",
          },
          {
            label: "Avanzamento fatturazione",
            text: `Avanzamento fatturazione: ${Number(
              percentualeFatturazione
            ).toFixed(2)}%`,
            value: `€ ${Number(totaleFatturato).toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}`,
            barColor: "#b6dfc4",
            rightLabel: "Produzione non fatturata",
            rightValue: `€ ${Number(produzioneNonFatturata).toLocaleString(
              "it-IT",
              {
                minimumFractionDigits: 2,
              }
            )}`,
            rightBg: "#f6b6b6",
          },
        ].map((r, i) => (
          <div key={i} style={{ display: "flex", marginBottom: "0.5rem" }}>
            <div
              style={{
                width: "15%",
                background: "#eee",
                padding: "0.3rem",
                textAlign: "right",
                fontWeight: "bold",
                border: "1px solid #ccc",
              }}
            >
              {r.label}
            </div>
            <div
              style={{
                width: "55%",
                background: r.barColor,
                padding: "0.3rem",
                textAlign: "center",
                border: "1px solid #ccc",
              }}
            >
              {r.text} <strong>{r.value}</strong>
            </div>
            <div
              style={{
                width: "15%",
                background: r.rightBg,
                padding: "0.3rem",
                textAlign: "right",
                border: "1px solid #ccc",
              }}
            >
              {r.rightLabel}
            </div>
            <div
              style={{
                width: "15%",
                background: "#fff",
                padding: "0.3rem",
                textAlign: "center",
                fontWeight: "bold",
                border: "1px solid #ccc",
              }}
            >
              {r.rightValue}
            </div>
          </div>
        ))}

        {/* ESPOSIZIONE ROW */}
        <div style={{ display: "flex", marginBottom: "1.5rem" }}>
          <div
            style={{
              width: "15%",
              background: "#eee",
              padding: "0.3rem",
              textAlign: "right",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            Esposizione
          </div>
          <div
            style={{
              width: "20%",
              background: "#ffe8a1",
              padding: "0.3rem",
              textAlign: "center",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            €{" "}
            {(ricaviTotali - costiTotali).toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>
          <div
            style={{
              width: "15%",
              background: "#eee",
              padding: "0.3rem",
              textAlign: "right",
              border: "1px solid #ccc",
            }}
          >
            Costi sostenuti
          </div>
          <div
            style={{
              width: "20%",
              background: "#f6b6b6",
              padding: "0.3rem",
              textAlign: "center",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            €{" "}
            {costiTotali.toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>

          <div
            style={{
              width: "15%",
              background: "#eee",
              padding: "0.3rem",
              textAlign: "right",
              border: "1px solid #ccc",
            }}
          >
            Fatture emesse
          </div>
          <div
            style={{
              width: "15%",
              background: "#d7f0d7",
              padding: "0.3rem",
              textAlign: "center",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            € {ricaviTotali.toLocaleString("it-IT")}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          Andamento produzione
        </div>

        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span
            style={{
              background: "#ddd",
              padding: "0.3rem 1rem",
              borderRadius: 4,
            }}
          >
            Data aggiornamento
          </span>
          <span
            style={{
              marginLeft: 10,
              padding: "0.3rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          >
            {dataAggiornamento}
          </span>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              width: "50%",
              background: "#b6dfc4",
              padding: "0.3rem",
              textAlign: "center",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            <div>
              Avanzamento produzione:{" "}
              {Number(percentualeAvanzamento).toFixed(2)}%
            </div>
          </div>

          <div
            style={{
              width: "50%",
              background: "#eee",
              padding: "0.3rem",
              textAlign: "center",
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            Lavori residui: €{" "}
            {totaleProduzione.toLocaleString("it-IT", {
              minimumFractionDigits: 2,
            })}
          </div>
        </div>

        <div
          style={{
            width: "100%",
            borderTop: "1px solid #ccc",
            paddingTop: "1rem",
            textAlign: "center",
            color: "gray",
          }}
        >
          <div style={{ fontStyle: "italic" }}>
            <GraficoCostiMese
              chartData={chartData}
              dataAggiornamento={dataAggiornamento}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const GraficoCostiMese = ({ chartData }) => {
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "EUR",
              }).format(value)
            }
          />
          <Bar dataKey="costi" fill="#90D19C" name="Costi mese" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CruscottoCommessa;
