import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import GaraService from "../services/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inStudio: null,
      consegnate: null,
      aggiudicate: null,
      perse: null,
    };
  }

  componentDidMount() {
    this.caricaGare();
  }

  caricaGare = async () => {
    try {
      const tutte = await GaraService.leggiGare();

      this.setState({
        inStudio: this.estraiDati(tutte, "In Studio"),
        consegnate: this.estraiDati(tutte, "Consegnata"),
        aggiudicate: this.estraiDati(tutte, "Aggiudicata"),
        perse: this.estraiDati(tutte, "Persa"),
      });
    } catch (err) {
      console.error("Errore nel caricamento delle gare:", err);
    }
  };

  estraiDati = (gare, tipoLavori) => {
    const gareFiltrate = gare.filter((g) => g.TipoLavori === tipoLavori);
    const totali = gareFiltrate.reduce(
      (acc, g) => {
        acc[0] += g.TotaleEdili || 0;
        acc[1] += g.TotaleElettrici || 0;
        acc[2] += g.TotaleMeccanici || 0;
        return acc;
      },
      [0, 0, 0],
    );

    return {
      data: totali,
      count: gareFiltrate.length,
    };
  };

  render() {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      rotation: Math.PI * 0.5,
      plugins: {
        legend: { display: false },
      },
    };

    const sezioni = [
      { label: "In Studio", key: "inStudio" },
      { label: "Consegnate", key: "consegnate" },
      { label: "Aggiudicate", key: "aggiudicate" },
      { label: "Perse", key: "perse" },
    ];

    const lavoratoriColorMap = {
      "In Studio": "#3e83f3",
      Consegnate: "#f7d235",
      Aggiudicate: "#19d895",
      Perse: "#f44336",
    };

    const backgroundColor = ["#19d895", "#f7d235", "#3e83f3"];

    return (
      <div className="container-fluid" style={{ padding: "40px" }}>
        <div className="row">
          {sezioni.map(({ label, key }, index) => {
            const stato = this.state[key];

            if (!stato) {
              return (
                <div className="col-md-6 col-lg-3 mb-4" key={index}>
                  <div className="card text-center p-4">Caricamento...</div>
                </div>
              );
            }

            const { data, count } = stato;
            const totaleImporto = data.reduce((a, b) => a + b, 0);

            const chartData = {
              datasets: [
                {
                  data,
                  backgroundColor,
                  borderWidth: 0,
                },
              ],
            };

            return (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div
                  className="card"
                  style={{
                    borderRadius: "10px",
                    background: "#f5f5f5",
                    padding: "20px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h5 className="text-center mb-3" style={{ fontWeight: 600 }}>
                    {label}
                  </h5>

                  <h2
                    style={{
                      fontWeight: "bold",
                      margin: 0,
                      color: lavoratoriColorMap[label] || "#000",
                    }}
                  >
                    {count}
                  </h2>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "1.4rem",
                      color: "#333",
                      marginBottom: 16,
                      textAlign: "center",
                    }}
                  >
                    Totale:{" "}
                    <strong style={{ fontSize: "1.6rem", color: "#000" }}>
                      €{totaleImporto.toLocaleString()}
                    </strong>
                  </div>
                </div>

                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <b style={{ marginBottom: "8px", fontSize: "16px" }}>
                    Gare: {label}
                  </b>
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      height: "180px",
                    }}
                  >
                    <Doughnut data={chartData} options={chartOptions} />
                  </div>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    fontSize: "0.9rem",
                    marginTop: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingInline: "10px",
                  }}
                >
                  <li style={{ color: "#19d895" }}>Edili</li>
                  <li style={{ color: "#f7d235" }}>Elettrici</li>
                  <li style={{ color: "#3e83f3" }}>Meccanici</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;
