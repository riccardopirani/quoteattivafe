import React, { useState, useEffect, useMemo } from "react";
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
import { BASE_URL } from "../services/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CantiereService from "../services/cantiere";
import ApprovvigionamentoService from "../services/approvigionamenti";
import html2canvas from "html2canvas";
import { useRef } from "react";
import dayjs from "dayjs";
import CDPService from "../services/cdp";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/it";
import { BarChart, Bar } from "recharts";
import CruscottoCommessa from "./CruscottoCommessa.js";
import CostiRicavi from "./CostiRicavi.js";
import "sweetalert2/dist/sweetalert2.min.css";
import GestioneContratto from "./GestioneContratto.js";
moment.locale("it");

const tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
  fontSize: "0.85rem",
};
const cellStyle = {
  border: "1px solid #ccc",
  padding: "4px",
  textAlign: "left",

  verticalAlign: "middle",
};

const DatiCommessa = ({ commessa }) => {
  const [triggered, setTriggered] = useState(false);
  const [dataInizio, setDataInizio] = useState(new Date());
  const [dataFine, setDataFine] = useState(new Date());
  const [mappaUrl, setMappaUrl] = useState(null);
  const [zonaImageUrl, setZonaImageUrl] = useState(null);
  const [users, setUsers] = useState([]);
  const inizializzato = useRef(false);
  const [error, setError] = useState(null);
  const [datiGenerali, setDatiGenerali] = useState({
    codice: "",
    cliente: "",
    indirizzo: "",
    tipoLavori: "",
    tipoAppalto: "",
    respUfficio: "",
    respCantiere: "",
    contratto: "",
    centroCosto: "",
    gant: "",
    condivisione: "",
    sicurezza: "",
    foto: "",
    AnagraficaCliente_Nome: "",
    AnagraficaCliente_Telefono: "",
    AnagraficaCliente_Email: "",
    AnagraficaDI_Nome: "",
    AnagraficaDI_Telefono: "",
    AnagraficaDI_Email: "",
    AnagraficaProgettista_Nome: "",
    AnagraficaProgettista_Telefono: "",
    AnagraficaProgettista_Email: "",
    AnagraficaCSE_Nome: "",
    AnagraficaCSE_Telefono: "",
    AnagraficaCSE_Email: "",
  });

  const [datiGenerali2, setDatiGenerali2] = useState({
    statoDinamico: "APERTO",
  });

  useEffect(() => {
    if (datiGenerali.indirizzo && typeof datiGenerali.indirizzo === "string") {
      const encodedAddress = encodeURIComponent(datiGenerali.indirizzo);
      const url = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
      setMappaUrl(url);
    }
  }, [datiGenerali.indirizzo]);

  useEffect(() => {
    const caricaCommessa = async () => {
      let id = new URLSearchParams(window.location.search).get("codice");
      if (!id) {
        const saved = localStorage.getItem("ultimaCommessa");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            id = parsed?.IdCantiere;
          } catch (e) {
            console.warn("Errore parsing localStorage:", e);
          }
        }
      }

      if (id && !commessa) {
      }
    };

    caricaCommessa();
  }, []);

  useEffect(() => {
    const fetchStato = async () => {
      if (commessa?.IdCantiere) {
        try {
          const result = await CantiereService.statoCommessa({
            Codice: commessa.NomeCantiere,
          });
          const statoPulito = result.trim().toUpperCase();
          let statoLabel = "BLOCCATO";
          if (statoPulito.includes("A")) statoLabel = "APERTO";
          else if (statoPulito.includes("B")) statoLabel = "BLOCCATO";
          else if (statoPulito.includes("C")) statoLabel = "CHIUSO";
          setDatiGenerali2((prev) => ({ ...prev, statoDinamico: statoLabel }));
        } catch (error) {
          console.error("Errore nel recupero dello stato cantiere:", error);
        }
      }
    };
    fetchStato();
  }, [commessa?.IdCantiere]);

  useEffect(() => {}, [dataInizio, dataFine]);
  useEffect(() => {
    if (commessa && commessa.IdCantiere && !inizializzato.current) {
      setDatiGenerali({
        codice: commessa.NomeCantiere || "",
        cliente: commessa.RagioneSociale || "",
        indirizzo: commessa.Indirizzo || "",
        tipoLavori: commessa.TipoLavori || "",
        tipoAppalto: commessa.TipoAppalto || "",
        respUfficio: commessa.ResponsabileUfficio || "",
        respCantiere: commessa.ResponsabileCantiere || "",
        contratto: commessa.LinkCartellaContratto || "",
        centroCosto: commessa.LinkCentroDiCosto || "",
        gant: commessa.LinkGantt || "",
        condivisione: commessa.LinkCartellaCondivisione || "",
        sicurezza: commessa.LinkCartellaSicurezza || "",
        foto: commessa.LinkCartellaFoto || "",
        AnagraficaCliente_Nome: commessa.AnagraficaCliente_Nome || "",
        AnagraficaCliente_Telefono: commessa.AnagraficaCliente_Telefono || "",
        AnagraficaCliente_Email: commessa.AnagraficaCliente_Email || "",
        AnagraficaDI_Nome: commessa.AnagraficaDI_Nome || "",
        AnagraficaDI_Telefono: commessa.AnagraficaDI_Telefono || "",
        AnagraficaDI_Email: commessa.AnagraficaDI_Email || "",
        AnagraficaProgettista_Nome: commessa.AnagraficaProgettista_Nome || "",
        AnagraficaProgettista_Telefono:
          commessa.AnagraficaProgettista_Telefono || "",
        AnagraficaProgettista_Email: commessa.AnagraficaProgettista_Email || "",
        AnagraficaCSE_Nome: commessa.AnagraficaCSE_Nome || "",
        AnagraficaCSE_Telefono: commessa.AnagraficaCSE_Telefono || "",
        AnagraficaCSE_Email: commessa.AnagraficaCSE_Email || "",
      });

      setDataInizio(
        commessa.DataInizio ? new Date(commessa.DataInizio) : new Date(),
      );
      setDataFine(commessa.DataFine ? new Date(commessa.DataFine) : new Date());
      fetchUsers(commessa.ResponsabileUfficio, commessa.ResponsabileCantiere);
      inizializzato.current = true;
    }
  }, [commessa]);
  const handleChange = (field) => async (e) => {
    const value = e.target.value ?? "";
    const nuovo = { ...datiGenerali, [field]: value };
    setDatiGenerali(nuovo);

    if (commessa && commessa.IdCantiere) {
      await CantiereService.aggiornaCantiere({
        IdCantiere: commessa.IdCantiere,
        Stato: datiGenerali2?.statoDinamico ?? "BLOCCATO",
        DescrizioneEstesa: "",
        StatoFatturazione: 0,
        NomeCantiere: nuovo.codice,
        CommessaCliente: nuovo.codice,
        IndirizzoCantiere: nuovo.indirizzo,
        TipoLavori: nuovo.tipoLavori,
        TipoAppalto: nuovo.tipoAppalto,
        ResponsabileUfficio: nuovo.respUfficio,
        ResponsabileCantiere: nuovo.respCantiere,
        LinkCartellaContratto: nuovo.contratto,
        LinkCentroDiCosto: nuovo.centroCosto,
        LinkGantt: nuovo.gant,
        LinkCartellaCondivisione: nuovo.condivisione,
        LinkCartellaSicurezza: nuovo.sicurezza,
        LinkCartellaFoto: nuovo.foto,
        DataInizio: dataInizio.toISOString(),
        DataFine: dataFine.toISOString(),
        AnagraficaCliente_Nome: nuovo.AnagraficaCliente_Nome,
        AnagraficaCliente_Telefono: nuovo.AnagraficaCliente_Telefono,
        AnagraficaCliente_Email: nuovo.AnagraficaCliente_Email,
        AnagraficaDI_Nome: nuovo.AnagraficaDI_Nome,
        AnagraficaDI_Telefono: nuovo.AnagraficaDI_Telefono,
        AnagraficaDI_Email: nuovo.AnagraficaDI_Email,
        AnagraficaProgettista_Nome: nuovo.AnagraficaProgettista_Nome,
        AnagraficaProgettista_Telefono: nuovo.AnagraficaProgettista_Telefono,
        AnagraficaProgettista_Email: nuovo.AnagraficaProgettista_Email,
        AnagraficaCSE_Nome: nuovo.AnagraficaCSE_Nome,
        AnagraficaCSE_Telefono: nuovo.AnagraficaCSE_Telefono,
        AnagraficaCSE_Email: nuovo.AnagraficaCSE_Email,
      });
    }
  };

  const fetchUsers = async (respUfficio, respCantiere) => {
    try {
      const res = await fetch(`${BASE_URL}/RisorseUmane/CaricaRisorse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      const data = await res.json();
      const nomiEsistenti = new Set(data.map((u) => u.Nome));

      if (respUfficio && !nomiEsistenti.has(respUfficio)) {
        data.unshift({
          IdUtente: "ufficio-selezionato",
          Nome: respUfficio,
        });
      }

      if (respCantiere && !nomiEsistenti.has(respCantiere)) {
        data.unshift({
          IdUtente: "cantiere-selezionato",
          Nome: respCantiere,
        });
      }

      setUsers(data);
    } catch (error) {
      console.error("Errore caricamento utenti:", error);
      setError("Errore caricamento utenti.");
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^\+?\d{7,15}$/.test(phone);
  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      >
        Cod. {datiGenerali.codice || "—"}{" "}
        <span style={{ color: "brown" }}>{datiGenerali.cliente || ""}</span>{" "}
        {datiGenerali.indirizzo}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                backgroundColor: "#e6f0e6",
                padding: "0.5rem 1rem",
                fontWeight: "bold",
                fontSize: "0.85rem",
                whiteSpace: "nowrap",
              }}
            >
              Data inizio cantiere
            </div>
            <div style={{ padding: "0.5rem 1rem" }}>
              <DatePicker
                selected={dataInizio}
                onChange={setDataInizio}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              border: "1px solid #ccc",
              marginLeft: "100px",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                backgroundColor: "#e6f0e6",
                padding: "0.5rem 1rem",
                fontWeight: "bold",
                fontSize: "0.85rem",
                whiteSpace: "nowrap",
              }}
            >
              Data fine cantiere
            </div>
            <div style={{ padding: "0.5rem 1rem" }}>
              <DatePicker
                selected={dataFine}
                onChange={setDataFine}
                dateFormat="dd/MM/yyyy"
                // opzionale: customInput={<CustomInput />}
              />
            </div>
          </div>
        </div>

        <span
          style={{
            float: "right",
            backgroundColor: (() => {
              const stato = datiGenerali2?.statoDinamico || "";
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
          {datiGenerali2?.statoDinamico || "BLOCCATO"}
        </span>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{ flex: 2 }}>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <table
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th
                      colSpan="2"
                      style={{
                        ...cellStyle,
                        backgroundColor: "#ddf0e3",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      DATI GENERALI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Codice", key: "codice" },
                    { label: "Indirizzo cantiere", key: "indirizzo" },
                    { label: "Tipo lavori", key: "tipoLavori" },
                    { label: "Tipo appalto", key: "tipoAppalto" },
                    { label: "Resp. Ufficio", key: "respUfficio" },
                    { label: "Resp. Cantiere", key: "respCantiere" },
                  ].map(({ label, key }) => (
                    <tr key={key}>
                      <td
                        style={{
                          ...cellStyle,
                          backgroundColor: "#e0eee3",
                          fontWeight: "bold",
                        }}
                      >
                        {label}
                      </td>
                      <td style={cellStyle}>
                        {label === "Resp. Ufficio" ? (
                          <>
                            {datiGenerali.respUfficio && (
                              <div
                                style={{
                                  marginBottom: "0.4rem",
                                  fontStyle: "italic",
                                  color: "#555",
                                }}
                              >
                                Attuale: {datiGenerali.respUfficio}
                              </div>
                            )}
                            <select
                              value={datiGenerali.respUfficio}
                              onChange={async (e) => {
                                const selected = e.target.value;
                                setDatiGenerali((prev) => ({
                                  ...prev,
                                  respUfficio: selected,
                                }));
                                await handleChange("respUfficio")({
                                  target: { value: selected },
                                });
                              }}
                              style={{
                                width: "100%",
                                padding: "0.6rem 1rem",
                                fontSize: "1rem",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                appearance: "none",
                                backgroundColor: "#fff",
                                backgroundImage:
                                  "url(\"data:image/svg+xml;utf8,<svg fill='%23666' height='10' viewBox='0 0 10 6' width='10' xmlns='http://www.w3.org/2000/svg'><path d='M0 0l5 6 5-6z'/></svg>\")",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 1rem center",
                                backgroundSize: "12px",
                                color: "#333",
                                transition: "all 0.3s ease",
                                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                              }}
                            >
                              <option value="">Seleziona responsabile</option>
                              {users.map((user) => (
                                <option key={user.IdUtente} value={user.Nome}>
                                  {user.Nome}
                                </option>
                              ))}
                            </select>
                          </>
                        ) : label === "Resp. Cantiere" ? (
                          <>
                            {datiGenerali.respCantiere && (
                              <div
                                style={{
                                  marginBottom: "0.4rem",
                                  fontStyle: "italic",
                                  color: "#555",
                                }}
                              >
                                Attuale: {datiGenerali.respCantiere}
                              </div>
                            )}
                            <select
                              value={datiGenerali.respCantiere}
                              onChange={async (e) => {
                                const selected = e.target.value;
                                setDatiGenerali((prev) => ({
                                  ...prev,
                                  respCantiere: selected,
                                }));
                                await handleChange("respCantiere")({
                                  target: { value: selected },
                                });
                              }}
                              style={{
                                width: "100%",
                                padding: "0.6rem 1rem",
                                fontSize: "1rem",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                appearance: "none",
                                backgroundColor: "#fff",
                                backgroundImage:
                                  "url(\"data:image/svg+xml;utf8,<svg fill='%23666' height='10' viewBox='0 0 10 6' width='10' xmlns='http://www.w3.org/2000/svg'><path d='M0 0l5 6 5-6z'/></svg>\")",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 1rem center",
                                backgroundSize: "12px",
                                color: "#333",
                                transition: "all 0.3s ease",
                                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                              }}
                            >
                              <option value="">Seleziona responsabile</option>
                              {users.map((user) => (
                                <option key={user.IdUtente} value={user.Nome}>
                                  {user.Nome}
                                </option>
                              ))}
                            </select>
                          </>
                        ) : (
                          <input
                            type="text"
                            value={datiGenerali[key] ?? ""}
                            onChange={handleChange(key)}
                            placeholder={`Inserisci ${label}`}
                            style={{ width: "100%", border: "none" }}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Colonna 2: DOCUMENTI */}
            <div style={{ flex: 1 }}>
              <table
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th
                      colSpan="2"
                      style={{
                        ...cellStyle,
                        backgroundColor: "#ddf0e3",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      DOCUMENTI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Link cartella contratto", key: "contratto" },
                    { label: "Link centro di costo", key: "centroCosto" },
                    { label: "Link Gant", key: "gant" },
                    {
                      label: "Link cartella condivisione",
                      key: "condivisione",
                    },
                    { label: "Link cartella sicurezza", key: "sicurezza" },
                    { label: "Link cartella foto", key: "foto" },
                  ].map(({ label, key }) => (
                    <tr key={key}>
                      <td
                        style={{
                          ...cellStyle,
                          backgroundColor: "#e0eee3",
                          fontWeight: "bold",
                        }}
                      >
                        {label}
                      </td>
                      <td style={cellStyle}>
                        <input
                          type="text"
                          value={datiGenerali[key] ?? ""}
                          onChange={handleChange(key)}
                          placeholder={`Inserisci ${label}`}
                          style={{ width: "100%", border: "none" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <table style={{ ...tableStyle, marginTop: "1rem" }}>
            <thead>
              <tr>
                <th
                  colSpan="6"
                  style={{
                    ...cellStyle,
                    textAlign: "center",
                    backgroundColor: "#ddf0e3",
                  }}
                >
                  ANAGRAFICA
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Cliente & D.I. */}
              <tr>
                <td
                  rowSpan="3"
                  style={{
                    ...cellStyle,
                    backgroundColor: "#e0eee3",
                    fontWeight: "bold",
                  }}
                >
                  Cliente
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCliente_Nome}
                    onChange={handleChange("AnagraficaCliente_Nome")}
                    placeholder="Nome"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
                <td
                  rowSpan="3"
                  style={{
                    ...cellStyle,
                    backgroundColor: "#e0eee3",
                    fontWeight: "bold",
                  }}
                >
                  D.I.
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaDI_Nome}
                    onChange={handleChange("AnagraficaDI_Nome")}
                    placeholder="Nome"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCliente_Telefono}
                    onChange={handleChange("AnagraficaCliente_Telefono")}
                    placeholder="Telefono"
                    style={{
                      width: "100%",
                      border: isValidPhone(
                        datiGenerali.AnagraficaCliente_Telefono,
                      )
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaDI_Telefono}
                    onChange={handleChange("AnagraficaDI_Telefono")}
                    placeholder="Telefono"
                    style={{
                      width: "100%",
                      border: isValidPhone(datiGenerali.AnagraficaDI_Telefono)
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCliente_Email}
                    onChange={handleChange("AnagraficaCliente_Email")}
                    placeholder="Email"
                    style={{
                      width: "100%",
                      border: isValidEmail(datiGenerali.AnagraficaCliente_Email)
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaDI_Email}
                    onChange={handleChange("AnagraficaDI_Email")}
                    placeholder="Email"
                    style={{
                      width: "100%",
                      border: isValidEmail(datiGenerali.AnagraficaDI_Email)
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
              </tr>

              {/* Progettista & C.S.E. */}
              <tr>
                <td
                  rowSpan="3"
                  style={{
                    ...cellStyle,
                    backgroundColor: "#e0eee3",
                    fontWeight: "bold",
                  }}
                >
                  Progettista
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaProgettista_Nome}
                    onChange={handleChange("AnagraficaProgettista_Nome")}
                    placeholder="Nome"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
                <td
                  rowSpan="3"
                  style={{
                    ...cellStyle,
                    backgroundColor: "#e0eee3",
                    fontWeight: "bold",
                  }}
                >
                  C.S.E.
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCSE_Nome}
                    onChange={handleChange("AnagraficaCSE_Nome")}
                    placeholder="Nome"
                    style={{ width: "100%", border: "none" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaProgettista_Telefono}
                    onChange={handleChange("AnagraficaProgettista_Telefono")}
                    placeholder="Telefono"
                    style={{
                      width: "100%",
                      border: isValidPhone(
                        datiGenerali.AnagraficaProgettista_Telefono,
                      )
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCSE_Telefono}
                    onChange={handleChange("AnagraficaCSE_Telefono")}
                    placeholder="Telefono"
                    style={{
                      width: "100%",
                      border: isValidPhone(datiGenerali.AnagraficaCSE_Telefono)
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaProgettista_Email}
                    onChange={handleChange("AnagraficaProgettista_Email")}
                    placeholder="Email"
                    style={{
                      width: "100%",
                      border: isValidEmail(
                        datiGenerali.AnagraficaProgettista_Email,
                      )
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    value={datiGenerali.AnagraficaCSE_Email}
                    onChange={handleChange("AnagraficaCSE_Email")}
                    placeholder="Email"
                    style={{
                      width: "100%",
                      border: isValidEmail(datiGenerali.AnagraficaCSE_Email)
                        ? "none"
                        : "1px solid red",
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {mappaUrl && (
            <iframe
              title="Mappa"
              src={mappaUrl}
              width="100%"
              height="200"
              style={{ border: "1px solid #ccc" }}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default DatiCommessa;
