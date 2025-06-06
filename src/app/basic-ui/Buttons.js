import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import GaraService from "../services/api";
import ClienteService from "../services/cliente";
import Swal from "sweetalert2";

const COLORS = ["#4CAF50", "#FFEB3B", "#2196F3"];

const getObbligatori = (tipo) => {
  switch (tipo) {
    case "In Studio":
      return [
        "codice",
        "cliente",
        "telefono",
        "tipoLavori",
        "tipoAppalto",
        "indirizzo",
        "scadenzaConsegna",
        "responsabileCliente",
        "responsabileGara",
        "importoOffAgg",
      ];
    case "Consegnata":
      return [
        "codice",
        "cliente",
        "telefono",
        "mail",
        "tipoLavori",
        "tipoAppalto",
        "indirizzo",
        "scadenzaConsegna",
        "dataConsegna",
        "responsabileCliente",
        "responsabileGara",
        "importoOffAgg",
        "opereEdili",
        "impiantiMeccanici",
        "impiantiElettrici",
      ];
    case "Aggiudicata":
      return drawerFields.map((f) => f.name); // tutti i campi del form
    case "Persa":
      return [
        "codice",
        "cliente",
        "indirizzo",
        "telefono",
        "mail",
        "tipoLavori",
        "tipoAppalto",
        "scadenzaConsegna",
        "responsabileCliente",
        "responsabileGara",
        "importoOffAgg",
      ];
    default:
      return [];
  }
};

const drawerFieldToGaraKey = {
  codice: "CodiceGara",
  cliente: "Cliente",
  indirizzo: "UbicazioneLavori",
  telefono: "Telefono",
  mail: "Mail",
  pivaCf: "PivaCf",
  progettista: "Progettista",
  progettistaTelefono: "ProgettistaTelefono",
  progettistaMail: "ProgettistaMail",
  dl: "DL",
  dlTelefono: "DLTel",
  dlMail: "DLEmail",
  cse: "CSE",
  cseTelefono: "CSETel",
  cseMail: "CSEEmail",
  tipoAppalto: "TipoAppalto",
  scadenzaConsegna: "ScadenzaConsegna",
  dataConsegna: "DataConsegna",
  dataInizioCantiere: "DataInizioCantiere",
  responsabileCliente: "ResponsabileCliente",
  responsabileGara: "ResponsabileGara",
  importoOffAgg: "Importo",
  opereEdili: "TotaleEdili",
  impiantiMeccanici: "TotaleMeccanici",
  impiantiElettrici: "TotaleElettrici",
};

const drawerFields = [
  { name: "codice", label: "Codice" },
  { name: "cliente", label: "Cliente" },
  { name: "telefono", label: "Telefono" },
  { name: "mail", label: "Mail" },
  { name: "pivaCf", label: "P.iva/C.F." },
  { name: "progettista", label: "Progettista" },
  { name: "progettistaTelefono", label: "Telefono Progettista" },
  { name: "progettistaMail", label: "Mail Progettista" },
  { name: "dl", label: "D.L." },
  { name: "dlTelefono", label: "Telefono D.L." },
  { name: "dlMail", label: "Mail D.L." },
  { name: "cse", label: "C.S.E." },
  { name: "cseTelefono", label: "Telefono C.S.E." },
  { name: "cseMail", label: "Mail C.S.E." },
  { name: "tipoAppalto", label: "Tipo appalto" },
  { name: "indirizzo", label: "Indirizzo cantiere" },
  { name: "scadenzaConsegna", label: "Scadenza consegna", type: "date" },
  { name: "dataConsegna", label: "Data consegna", type: "date" },
  { name: "dataInizioCantiere", label: "Data inizio cantiere", type: "date" },
  { name: "responsabileCliente", label: "Resp. cliente" },
  { name: "responsabileGara", label: "Resp. gara" },
  { name: "importoOffAgg", label: "Importo off./agg." },
  { name: "opereEdili", label: "Opere edili" },
  { name: "impiantiMeccanici", label: "Impianti meccanici" },
  { name: "impiantiElettrici", label: "Impianti elettrici" },
];
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
  // Stato iniziale del form aggiornato
  // Stato iniziale del form aggiornato
  const [form, setForm] = useState({
    codice: "",
    cliente: "",
    telefono: "",
    mail: "",
    pivaCf: "",
    progettista: "",
    progettistaTelefono: "",
    progettistaMail: "",
    dl: "",
    dlTelefono: "",
    dlMail: "",
    cse: "",
    cseTelefono: "",
    cseMail: "",
    tipoLavori: "",
    indirizzo: "",

    tipoAppalto: "",
    scadenzaConsegna: "",
    dataConsegna: "",
    dataInizioCantiere: "",
    responsabileCliente: "",
    responsabileGara: "",
    importoOffAgg: "",
    opereEdili: "",
    impiantiMeccanici: "",
    impiantiElettrici: "",
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

  const getMapUrl = async (indirizzo) => {
    const encoded = encodeURIComponent(indirizzo);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1`,
      {
        headers: {
          "User-Agent": "CentoImpiantiMap/1.0 (centoimpianti.com)",
          "Accept-Language": "it",
        },
      }
    );
    const data = await res.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      const url = `https://www.google.com/maps?q=${lat},${lon}&output=embed`;
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
    if (!gara) {
      setForm({
        ...drawerFields.reduce((acc, { name }) => {
          acc[name] = "";
          return acc;
        }, {}),
        tipoLavori: tipoLavoriMap[selectedMenu],
      });
    } else {
      const updatedForm = drawerFields.reduce(
        (acc, { name, type = "text" }) => {
          const garaKey = drawerFieldToGaraKey[name] || name;
          let value = gara[garaKey];

          if (value === null || value === undefined) {
            value = "";
          } else if (type === "date") {
            value = toInputDateString(value); // normalizza formato date
          }

          acc[name] = value;
          return acc;
        },
        {}
      );

      updatedForm.tipoLavori = gara.TipoLavori || tipoLavoriMap[selectedMenu];

      setForm(updatedForm);
    }
    setDrawerOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const getLabelStyle = (name) => {
    const obbligatori = getObbligatori(form.tipoLavori || "");
    return {
      fontWeight: "500",
      marginBottom: 4,
      color: obbligatori.includes(name) ? "red" : "#333",
    };
  };

  const handleSubmit = async () => {
    const obbligatori = getObbligatori(form.tipoLavori);
    const mancanti = obbligatori.filter(
      (campo) =>
        typeof form[campo] === "undefined" || String(form[campo]).trim() === ""
    );

    if (mancanti.length > 0) {
      Swal.fire({
        title: "Campi obbligatori mancanti",
        icon: "warning",
        html: `<ul style="text-align:left;">${mancanti
          .map((c) => `<li><b>${c}</b></li>`)
          .join("")}</ul>`,
        confirmButtonText: "Ok",
        confirmButtonColor: "#3085d6",
        backdrop: true,
        allowOutsideClick: false,
      });
      return;
    }

    const baseGara = {
      CodiceGara: form.codice,
      Cliente: form.cliente,
      UbicazioneLavori: form.indirizzo,
      IndirizzoCantiere: form.indirizzo,
      Telefono: form.telefono,
      Mail: form.mail,
      PivaCf: form.pivaCf,
      Progettista: form.progettista,
      ProgettistaTelefono: form.progettistaTelefono,
      ProgettistaMail: form.progettistaMail,
      DL: form.dl,
      DLTel: form.dlTelefono,
      DLEmail: form.dlMail,
      CSE: form.cse,
      CSETel: form.cseTelefono,
      CSEEmail: form.cseMail,
      TipoLavori: form.tipoLavori,
      TipoAppalto: form.tipoAppalto,
      ScadenzaConsegna: form.scadenzaConsegna,
      DataConsegna: form.dataConsegna,
      DataInizioCantiere: form.dataInizioCantiere,
      ResponsabileCliente: form.responsabileCliente,
      ResponsabileGara: form.responsabileGara,
      Importo: parseFloat(form.importoOffAgg || "0"),
      TotaleEdili: parseFloat(form.opereEdili || "0"),
      TotaleMeccanici: parseFloat(form.impiantiMeccanici || "0"),
      TotaleElettrici: parseFloat(form.impiantiElettrici || "0"),
      DataInserimento: new Date().toISOString().split("T")[0],
    };

    try {
      if (selectedGara) {
        await GaraService.aggiornaGara({
          ...baseGara,
          IdGara: selectedGara.IdGara,
        });
      } else {
        await GaraService.creaGara(baseGara);
      }

      await loadGare();

      setSelectedGara(null);
      setForm({
        ...drawerFields.reduce((acc, { name }) => {
          acc[name] = "";
          return acc;
        }, {}),
        tipoLavori: tipoLavoriMap[selectedMenu],
      });
      setDrawerOpen(false);
    } catch (error) {
      console.error("Errore durante il salvataggio della gara:", error);
      alert(
        "Errore durante il salvataggio della gara:\n" +
          (error?.message || "Errore sconosciuto")
      );
    }
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
                <td style={centeredCellStyle}>{g.CodiceGara}</td>
                <td style={centeredCellStyle}>{g.Cliente}</td>
                <td style={centeredCellStyle}>{g.UbicazioneLavori}</td>
                <td style={centeredCellStyle}>{formatDate(g.DataConsegna)}</td>
                <td style={centeredCellStyle}>{g.ResponsabileGara}</td>
                <td style={centeredCellStyle}>€{g.TotaleEdili}</td>
                <td style={centeredCellStyle}>€{g.TotaleMeccanici}</td>
                <td style={centeredCellStyle}>€{g.TotaleElettrici}</td>
                <td style={centeredCellStyle}>
                  €
                  {(g.TotaleEdili || 0) +
                    (g.TotaleMeccanici || 0) +
                    (g.TotaleElettrici || 0)}
                </td>

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
                  0
                )}
              </td>
              <td style={centeredCellStyle}>
                €
                {filteredGare.reduce(
                  (sum, g) => sum + (g.TotaleElettrici || 0),
                  0
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
              key={mappaUrl}
              width="100%"
              height="300"
              frameBorder="0"
              style={{
                border: 0,
                pointerEvents: "none", // <-- qui la modifica
                zIndex: 1,
              }}
              src={mappaUrl}
              allowFullScreen
            />
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
        <div
          style={{
            flexShrink: 0,
            padding: "16px 24px 8px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "#f9f9f9",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Aggiungi / modifica gara</h3>
          <select
            name="tipoLavori"
            value={form.tipoLavori || ""}
            onChange={(e) => {
              const newTipo = e.target.value;
              setForm((prev) => ({
                ...prev,
                tipoLavori: newTipo,
              }));
            }}
            style={{
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "14px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
            }}
          >
            <option value="">Seleziona stato</option>
            <option value="In Studio">In Studio</option>
            <option value="Consegnata">Consegnata</option>
            <option value="Aggiudicata">Aggiudicata</option>
            <option value="Persa">Persa</option>
          </select>
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
          {drawerFields.map(({ name, label, type = "text" }) => (
            <div
              key={name}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label style={getLabelStyle(name)}>{label}</label>
              <input
                type={type}
                name={name}
                value={form[name] || ""}
                onChange={handleChange}
                disabled={name === "codice" && selectedGara !== null}
                style={{
                  width: "100%",
                  padding: 8,
                  borderRadius: 4,
                  border: "1px solid #ccc",
                  backgroundColor:
                    name === "codice" && selectedGara !== null
                      ? "#eee"
                      : "#fff",
                }}
              />
            </div>
          ))}

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
