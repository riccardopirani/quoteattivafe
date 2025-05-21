import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import GaraService from "../services/api";
import ClienteService from "../services/cliente";

const COLORS = ["#4CAF50", "#FFEB3B", "#2196F3"];

const centeredCellStyle = {
  textAlign: "center",
  verticalAlign: "middle",
  padding: "10px",
  borderBottom: "1px solid #ccc",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none",
};

const labelStyle = {
  fontWeight: "500",
  marginBottom: "4px",
  color: "#333",
};

const tipoLavoriMap = {
  studio: "In Studio",
  consegnate: "Consegnata",
  aggiudicate: "Aggiudicata",
  perse: "Persa",
};

function toInputDateString(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function Buttons() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedMenu = params.get("menu") || "studio";
  const [filteredClienti, setFilteredClienti] = useState([]);
  const [showClientiDropdown, setShowClientiDropdown] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerClienteOpen, setDrawerClienteOpen] = useState(false);
  const [gare, setGare] = useState([]);
  const [clienti, setClienti] = useState([]);
  const [form, setForm] = useState({
    cliente: "",
    titoloGara: "",
    tipoAppalto: "",
    scadenzaConsegna: "",
    dataConsegna: "",
    responsabileCliente: "",
    responsabileGara: "",
    indirizzo: "",
    edili: 0,
    tipoLavoro: tipoLavoriMap[selectedMenu],
    idraulici: 0,
    elettrici: 0,
  });

  const [selectedGara, setSelectedGara] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [mappaUrl, setMappaUrl] = useState(null);

  const menuTitles = {
    studio: "Gare In Studio",
    consegnate: "Gare Consegnate",
    aggiudicate: "Gare Aggiudicate",
    perse: "Gare Perse",
  };

  const fetchLocationSuggestions = async (query) => {
    if (!query) return;

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?country=Italia&format=json&limit=5&q=${encodeURIComponent(
          query,
        )}`,
        {
          headers: {
            "User-Agent": "CentoImpiantiMap/1.0",
          },
        },
      );
      const data = await res.json();

      if (Array.isArray(data)) {
        const filtered = data.filter((place) =>
          ["city", "town", "village"].includes(place.type),
        );
        setSuggestions(filtered.map((item) => item.display_name));
      } else {
        console.warn("Risposta inattesa dal server Nominatim:", data);
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Errore durante il recupero dei suggerimenti:", error);
      setSuggestions([]);
    }
  };

  const getMapUrl = async (indirizzo) => {
    const encoded = encodeURIComponent(indirizzo);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1`,
      {
        headers: {
          "User-Agent": "CentoImpiantiMap/1.0 (centoimpianti.com)",
          "Accept-Language": "it",
        },
      },
    );
    const data = await res.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      const delta = 0.002;
      const left = parseFloat(lon) - delta;
      const right = parseFloat(lon) + delta;
      const top = parseFloat(lat) + delta;
      const bottom = parseFloat(lat) - delta;
      const url = `https://www.openstreetmap.org/export/embed.html?bbox=${left},${bottom},${right},${top}&layer=mapnik&marker=${lat},${lon}`;
      setMappaUrl(url);
    }
  };

  const [formCliente, setFormCliente] = useState({
    PEC: "",
    FAX: "",
    CodiceFiscale: "",
    PartitaIVA: "",
    RagioneSociale: "",
    Titolo: "",
    Indirizzo: "",
    Provincia: "",
    Citta: "",
    Cap: "",
    Telefono: "",
    Email: "",
    Nome1: "",
    Cellulare1: "",
    Nome2: "",
    Cellulare2: "",
  });

  const toggleDrawer = (gara = null) => {
    setSelectedGara(gara);
    setForm(
      gara
        ? {
            cliente: gara.Cliente,
            titoloGara: gara.TitoloGara,
            tipoAppalto: gara.TipoAppalto,
            scadenzaConsegna: toInputDateString(gara.ScadenzaConsegna),
            dataConsegna: toInputDateString(gara.DataConsegna),
            responsabileCliente: gara.ResponsabileCliente,
            responsabileGara: gara.ResponsabileGara,
            indirizzo: gara.UbicazioneLavori,
            edili: gara.TotaleEdili,
            idraulici: gara.TotaleMeccanici,
            elettrici: gara.TotaleElettrici,
            tipoLavoro: gara.TipoLavori,
          }
        : {
            cliente: "",
            titoloGara: "",
            tipoAppalto: "",
            scadenzaConsegna: "",
            dataConsegna: "",
            responsabileCliente: "",
            responsabileGara: "",
            indirizzo: "",
            edili: 0,
            idraulici: 0,
            elettrici: 0,
            tipoLavoro: tipoLavoriMap[selectedMenu],
          },
    );
    setDrawerOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "indirizzo") fetchLocationSuggestions(value);
  };

  const handleSubmit = async () => {
    const clienteObj = clienti.find((c) => {
      const ragione = c?.RagioneSociale?.toLowerCase().trim();
      const input = form?.cliente?.toLowerCase().trim();
      return ragione && input && ragione === input;
    });

    const idCliente = clienteObj?.IdCliente;
    if (!idCliente) {
      alert("Cliente non valido");
      return;
    }

    const totale =
      Number(form.edili) + Number(form.idraulici) + Number(form.elettrici);

    const baseGara = {
      CodiceGara: selectedGara ? selectedGara.CodiceGara : `GARA-${Date.now()}`,
      IdCliente: idCliente,
      TitoloGara: form.titoloGara,
      TipoLavori: form.tipoLavoro,
      UbicazioneLavori: form.indirizzo,
      ImportoStimato: totale,
      DataInserimento: selectedGara
        ? selectedGara.DataInserimento
        : new Date().toISOString().split("T")[0],
      ResponsabileCliente: form.responsabileCliente,
      TipoAppalto: form.tipoAppalto,
      ScadenzaConsegna: form.scadenzaConsegna,
      DataConsegna: form.dataConsegna,
      ResponsabileGara: form.responsabileGara,
      Importo: totale,
      TotaleEdili: Number(form.edili),
      TotaleMeccanici: Number(form.idraulici),
      TotaleElettrici: Number(form.elettrici),
    };

    if (selectedGara) {
      await GaraService.aggiornaGara(baseGara);
    } else {
      await GaraService.creaGara(baseGara);
    }

    await loadGare();
    setDrawerOpen(false);
  };

  const loadGare = async () => {
    const data = await GaraService.leggiGare();
    setGare(data);
  };

  const loadClienti = async () => {
    const data = await ClienteService.ricerca({});
    setClienti(data);
  };

  useEffect(() => {
    loadGare();
    loadClienti();
  }, []);

  useEffect(() => {
    if (gare.length > 0) {
      const prima = gare.find((g) => g.UbicazioneLavori);
      if (prima) getMapUrl(prima.UbicazioneLavori);
    }
  }, [gare]);

  const handleDeleteGara = async (idGara) => {
    if (!window.confirm("Sei sicuro di voler eliminare questa gara?")) return;
    try {
      await GaraService.eliminaGara(idGara);
      loadGare();
    } catch (err) {
      console.error("Errore durante l'eliminazione della gara", err);
    }
  };

  const filteredGare = gare.filter((g) => {
    return g.TipoLavori === tipoLavoriMap[selectedMenu];
  });

  const chartData = [
    {
      name: "Edili",
      value: filteredGare.reduce((acc, g) => acc + (g.TotaleEdili || 0), 0),
    },
    {
      name: "Idraulici",
      value: filteredGare.reduce((acc, g) => acc + (g.TotaleMeccanici || 0), 0),
    },
    {
      name: "Elettrici",
      value: filteredGare.reduce((acc, g) => acc + (g.TotaleElettrici || 0), 0),
    },
  ];

  const totalImporto = chartData.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      {/* Tabella gare */}
      <div style={{ marginBottom: 40 }}>
        <h4>{menuTitles[selectedMenu]}</h4>
        <table
          style={{
            width: "100%",
            backgroundColor: "white",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#e6f4ea", color: "black" }}>
              <th style={centeredCellStyle}>Cod.</th>
              <th style={centeredCellStyle}>Cliente</th>
              <th style={centeredCellStyle}>Ubicazione</th>
              <th style={centeredCellStyle}>Data Consegna</th>
              <th style={centeredCellStyle}>Resp. Gara</th>
              <th style={centeredCellStyle} colSpan={4}>
                Importi stimati
              </th>
              <th style={centeredCellStyle}>Visualizza Mappa</th>
              <th style={centeredCellStyle}>Modifica/Crea</th>
              <th style={centeredCellStyle}>Azione</th>
            </tr>
            <tr style={{ backgroundColor: "#e6f4ea", color: "black" }}>
              <th colSpan={5}></th>
              <th style={centeredCellStyle}>Edili</th>
              <th style={centeredCellStyle}>Idraulici</th>
              <th style={centeredCellStyle}>Elettrici</th>
              <th style={centeredCellStyle}>Totale</th>
              <th colSpan={3}></th>
            </tr>
          </thead>

          <tbody>
            {filteredGare.map((g, index) => (
              <tr key={index}>
                <td style={centeredCellStyle}>{g.IdGara}</td>
                <td style={centeredCellStyle}>{g.Cliente}</td>
                <td style={centeredCellStyle}>{g.UbicazioneLavori}</td>
                <td style={centeredCellStyle}>{formatDate(g.DataConsegna)}</td>
                <td style={centeredCellStyle}>{g.ResponsabileGara}</td>
                <td style={centeredCellStyle}>€{g.TotaleEdili}</td>
                <td style={centeredCellStyle}>€{g.TotaleMeccanici}</td>
                <td style={centeredCellStyle}>€{g.TotaleElettrici}</td>
                <td style={centeredCellStyle}>€{g.Importo}</td>
                <td style={centeredCellStyle}>
                  <button
                    onClick={() => getMapUrl(g.UbicazioneLavori)}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: 4,
                      cursor: "pointer",
                      padding: "4px 8px",
                    }}
                  >
                    Mappa
                  </button>
                </td>

                <td style={centeredCellStyle}>
                  <button
                    onClick={() => toggleDrawer(g)}
                    title="Modifica Gara"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 24,
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    ⋮
                  </button>
                </td>
                <td style={centeredCellStyle}>
                  <button
                    onClick={() => handleDeleteGara(g.IdGara)}
                    style={{
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: 4,
                      cursor: "pointer",
                      padding: "4px 8px",
                    }}
                  >
                    Elimina
                  </button>
                </td>
              </tr>
            ))}
            <tr style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
              <td colSpan={5} style={centeredCellStyle}>
                Totali
              </td>
              <td style={centeredCellStyle}>
                €
                {filteredGare.reduce((sum, g) => sum + (g.TotaleEdili || 0), 0)}
              </td>
              <td style={centeredCellStyle}>
                €
                {filteredGare.reduce(
                  (sum, g) => sum + (g.TotaleMeccanici || 0),
                  0,
                )}
              </td>
              <td style={centeredCellStyle}>
                €
                {filteredGare.reduce(
                  (sum, g) => sum + (g.TotaleElettrici || 0),
                  0,
                )}
              </td>
              <td style={centeredCellStyle}>
                €{filteredGare.reduce((sum, g) => sum + (g.Importo || 0), 0)}
              </td>
              <td style={centeredCellStyle}>
                <button
                  onClick={() => toggleDrawer(null)}
                  title="Azioni"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 24,
                    lineHeight: 1,
                    textAlign: "center",
                  }}
                >
                  ⋮
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mappa e grafico */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginBottom: 30,
        }}
      >
        <div>
          {mappaUrl ? (
            <iframe
              title="Mappa indirizzo"
              key={mappaUrl} // forza il rerender
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={mappaUrl}
              allowFullScreen
            ></iframe>
          ) : (
            <div
              style={{ textAlign: "center", padding: "20px", color: "#888" }}
            >
              Nessun indirizzo selezionato
            </div>
          )}
        </div>
        <div style={{ textAlign: "center" }}>
          <h4 style={{ marginBottom: 20 }}>{menuTitles[selectedMenu]}</h4>
          <div style={{ textAlign: "center" }}>
            <PieChart width={350} height={300} style={{ marginLeft: 100 }}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) =>
                  `${name}: ${((value / totalImporto) * 100).toFixed(1)}%`
                }
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `€${value}`} />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          right: drawerOpen ? 0 : "-400px",
          height: "100%",
          width: 400,
          backgroundColor: "#f9f9f9",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          transition: "right 0.3s ease-in-out",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header fisso */}
        <div
          style={{
            flexShrink: 0,
            padding: "16px 24px 8px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "#f9f9f9",
            zIndex: 1,
          }}
        >
          <button
            onClick={toggleDrawer}
            style={{
              float: "right",
              fontSize: 18,
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          <h3 style={{ margin: 0, textAlign: "center" }}>
            Nuova Gara - {menuTitles[selectedMenu]}
          </h3>
        </div>

        <div
          style={{
            flexGrow: 1,
            overflowY: "auto",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Tipo Lavoro */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>Tipologia Gara</label>
            <select
              name="tipoLavoro"
              value={form.tipoLavoro}
              onChange={handleChange}
              style={{ ...inputStyle, backgroundColor: "#fff" }}
            >
              <option value="">Seleziona tipologia</option>
              <option value="In Studio">In Studio</option>
              <option value="Consegnata">Consegnata</option>
              <option value="Aggiudicata">Aggiudicata</option>
              <option value="Persa">Persa</option>
            </select>
          </div>
          {/* Campo */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <label style={labelStyle}>Cliente</label>
            <input
              name="cliente"
              placeholder="Inizia a digitare il cliente..."
              value={form.cliente}
              onChange={(e) => {
                handleChange(e); // aggiorna form.cliente
                const query = e.target.value.toLowerCase();
                const filtered = clienti
                  .filter((c) => c.RagioneSociale.toLowerCase().includes(query))
                  .slice(0, 5); // massimo 5 suggerimenti
                setFilteredClienti(filtered);
                setShowClientiDropdown(true);
              }}
              onBlur={() => {
                setTimeout(() => setShowClientiDropdown(false), 200); // chiudi dropdown dopo selezione
              }}
              style={inputStyle}
            />

            {showClientiDropdown && filteredClienti.length > 0 && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderTop: "none",
                  zIndex: 10,
                  maxHeight: "150px",
                  overflowY: "auto",
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {filteredClienti.map((c, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setForm((prev) => ({
                        ...prev,
                        cliente: c.RagioneSociale,
                      }));
                      setShowClientiDropdown(false);
                    }}
                    style={{
                      padding: "8px 12px",
                      cursor: "pointer",
                      borderBottom: "1px solid #eee",
                      backgroundColor:
                        form.cliente === c.RagioneSociale ? "#f0f0f0" : "#fff",
                    }}
                  >
                    {c.RagioneSociale}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Suggerimento per aggiunta cliente */}
          <span style={{ marginTop: 4, fontSize: "13px", color: "#666" }}>
            Cliente non presente?{" "}
            <button
              onClick={() => setDrawerClienteOpen(true)}
              style={{
                background: "none",
                border: "none",
                color: "#007BFF",
                cursor: "pointer",
                padding: 0,
                fontSize: "13px",
                textDecoration: "underline",
              }}
            >
              Crea nuovo cliente
            </button>
          </span>

          {/* Titolo Gara */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>Titolo Gara</label>
            <input
              name="titoloGara"
              placeholder="Inserisci titolo"
              value={form.titoloGara}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Tipo Appalto */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>Tipo Appalto</label>
            <select
              name="tipoAppalto"
              value={form.tipoAppalto}
              onChange={handleChange}
              style={{ ...inputStyle, backgroundColor: "#fff" }}
            >
              <option value="">Seleziona tipo appalto</option>
              <option value="Edili">Edili</option>
              <option value="Idraulici">Idraulici</option>
              <option value="Elettrici">Elettrici</option>
            </select>
          </div>

          {/* Date */}
          {[
            { label: "Scadenza Consegna", name: "scadenzaConsegna" },
            { label: "Data Consegna", name: "dataConsegna" },
          ].map(({ label, name }) => (
            <div
              key={name}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label style={labelStyle}>{label}</label>
              <input
                type="date"
                name={name}
                value={form[name]}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          ))}

          {/* Responsabili */}
          {[
            { label: "Responsabile Cliente", name: "responsabileCliente" },
            { label: "Responsabile Gara", name: "responsabileGara" },
          ].map(({ label, name }) => (
            <div
              key={name}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label style={labelStyle}>{label}</label>
              <input
                name={name}
                placeholder={`Inserisci ${label.toLowerCase()}`}
                value={form[name]}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          ))}

          {/* Comune/Città */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>Comune / Città / Paese</label>
            <input
              list="suggested-locations"
              name="indirizzo"
              placeholder="Inserisci località"
              value={form.indirizzo}
              onChange={handleChange}
              style={inputStyle}
            />
            <datalist id="suggested-locations">
              {suggestions.map((s, i) => (
                <option key={i} value={s} />
              ))}
            </datalist>
          </div>

          {/* Importi */}
          {[
            { label: "Totale Edili", name: "edili" },
            { label: "Totale Idraulici", name: "idraulici" },
            { label: "Totale Elettrici", name: "elettrici" },
          ].map(({ label, name }) => (
            <div
              key={name}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label style={labelStyle}>{label}</label>
              <input
                type="number"
                name={name}
                placeholder={`Inserisci ${label.toLowerCase()}`}
                value={form[name]}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          ))}

          {/* Salva */}
          <button
            onClick={handleSubmit}
            style={{
              marginTop: 12,
              padding: 12,
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: 6,
              fontSize: 15,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Salva Gara
          </button>
        </div>
      </div>

      {drawerClienteOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100%",
            width: 400,
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header fisso */}
          <div
            style={{
              flexShrink: 0,
              padding: "16px 24px 8px",
              borderBottom: "1px solid #ddd",
              backgroundColor: "#f9f9f9",
            }}
          >
            <button
              onClick={() => setDrawerClienteOpen(false)}
              style={{
                float: "right",
                fontSize: 18,
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            <h3 style={{ margin: 0, textAlign: "center" }}>Nuovo Cliente</h3>
          </div>

          {/* Corpo scrollabile */}
          <div
            style={{
              flexGrow: 1,
              overflowY: "auto",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {[
              "RagioneSociale",
              "Titolo",
              "CodiceFiscale",
              "PartitaIVA",
              "PEC",
              "FAX",
              "Email",
              "Telefono",
              "Indirizzo",
              "Provincia",
              "Citta",
              "Cap",
              "Nome1",
              "Cellulare1",
              "Nome2",
              "Cellulare2",
            ].map((field) => (
              <div
                key={field}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label style={labelStyle}>{field}</label>
                <input
                  name={field}
                  value={formCliente[field] || ""}
                  onChange={(e) => {
                    const { name, value } = e.currentTarget;
                    setFormCliente((prev) => ({
                      ...prev,
                      [name]: value,
                    }));
                  }}
                  style={inputStyle}
                  placeholder={`Inserisci ${field}`}
                />
              </div>
            ))}

            <button
              onClick={async () => {
                if (!formCliente.RagioneSociale.trim()) {
                  alert("La Ragione Sociale è obbligatoria");
                  return;
                }

                try {
                  const res = await ClienteService.creaCliente(formCliente);

                  await loadClienti();
                  setDrawerClienteOpen(false);
                  setForm((prev) => ({
                    ...prev,
                    cliente: formCliente.RagioneSociale.trim(),
                  }));
                } catch (err) {
                  console.error("Errore nella creazione cliente:", err);
                  alert("Errore tecnico");
                }
              }}
              style={{
                marginTop: 16,
                padding: 12,
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: 6,
                fontSize: 15,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Salva Cliente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buttons;
