// FILE COMPLETO: UserManagementDrawer.jsx

import React, { useState, useEffect } from "react";
import {
  Form,
  Alert,
  Spinner,
  Table,
  Button,
  Image,
  Dropdown,
} from "react-bootstrap";
import { BASE_URL } from "../services/api";
import "./UserManagementDrawer.css";

const UserImage = ({ user }) => {
  const [src, setSrc] = useState(`${BASE_URL}/utente_${user.IdUtente}.jpg`);

  const bufferToBase64 = (buffer) => {
    if (!buffer || !buffer.data) return null;
    return btoa(
      new Uint8Array(buffer.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
  };

  const handleError = () => {
    const base64 = bufferToBase64(user.ImmagineProfilo);
    const mimeType = base64?.startsWith("/9j/") ? "jpeg" : "png";
    if (base64) setSrc(`data:image/${mimeType};base64,${base64}`);
    else
      setSrc(
        "https://www.attivacostruzioni.it/wp-content/uploads/2020/07/logo-attiva-costruzioni-menu.jpg"
      );
  };

  return (
    <Image
      src={src}
      onError={handleError}
      roundedCircle
      style={{ width: 40, height: 40, border: "2px solid green" }}
    />
  );
};

const UserManagementDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showImageDrawer, setShowImageDrawer] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const defaultForm = {
    Tipo: "Utente",
    Username: "",
    Password: "",
    Nome: "",
    Cognome: "",
    Email: "",
    Azienda: "Attiva Costruzioni SRL",
    Residente: "",
    Telefono: "",
    Stato: "Attivo",
    IdAzienda: 1,
    CostoFatturazione: 0,
    CostoInterno: 0,
    AccessoFatturazioneCantieri: false,
    AccessoEliminazioneCantiere: false,
    AccessoArticoli: false,
    AccessoPreventivi: false,
    AccessoCantieri: false,
    AccessoImportazioneArticoli: false,
    AccessoUtenti: false,
    AccessoClienti: false,
    AccessoDistinte: false,
    AccessoCaricoBolle: false,
    AccessoMarcaTempo: false,
    AccessoMagazzino: false,
  };

  const [form, setForm] = useState(defaultForm);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleFilterChange = (e) => setFilter(e.target.value);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setError(null);
    setSuccess(null);
  };

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${BASE_URL}/RisorseUmane/CaricaRisorse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      setUsers(data);
    } catch {
      setError("Errore caricamento utenti.");
    }
  };

  const uploadProfileImage = async (userId) => {
    if (!image) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const base64Data = reader.result.split(",")[1];
        await fetch(`${BASE_URL}/utente/aggiorna/immagineprofilo`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            IdUtente: userId,
            ImmagineProfilo: base64Data,
          }),
        });
        setShowImageDrawer(false);
        setTimeout(() => fetchUsers(), 500);
      } catch {
        setError("Errore server durante upload foto profilo.");
      }
    };
    reader.readAsDataURL(image);
  };

  const openEditUser = (user) => {
    setForm(user);
    setIsEditMode(true);
    setShowDrawer(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Username, Password, Nome, Cognome, Email } = form;
    if (!Username || (!isEditMode && !Password) || !Nome || !Cognome || !Email)
      return setError("Compila tutti i campi obbligatori.");
    if (!validateEmail(Email)) return setError("Email non valida.");
    setLoading(true);

    try {
      const endpoint1 = `${BASE_URL}/utente/modificautente`;
      const endpoint2 = `${BASE_URL}/utente/aggiornapermessi`;

      if (isEditMode) {
        if (image) await uploadProfileImage(form.IdUtente);

        await fetch(endpoint1, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        await fetch(endpoint2, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        setSuccess("Utente aggiornato");
      } else {
        const response = await fetch(`${BASE_URL}/utente/nuovoutente`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const result = await response.json();
        if (result.return && result.return !== 0) {
          const newUserId = result.return;

          // 1. Carica immagine (se presente)
          await uploadProfileImage(newUserId);

          // 2. Aggiorna form con ID utente
          const formWithId = { ...form, IdUtente: newUserId };

          // 3. Salva permessi
          await fetch(endpoint2, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formWithId),
          });

          // 4. Success & refresh
          setSuccess("Utente creato con successo!");
          await fetchUsers();
        }
      }

      setForm(defaultForm);
      setImage(null);
      setShowDrawer(false);
      setIsEditMode(false);
      fetchUsers();
    } catch (err) {
      setError("Errore nella gestione utente: " + err.message);
    }
    setLoading(false);
  };

  const confirmAndDeleteUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/utente/elimina`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ IdUtente: confirmDeleteId }),
      });
      const result = await response.json();
      if (result.return === "true" || result.return === true) fetchUsers();
      else setError("Errore durante l'eliminazione dell'utente.");
    } catch {
      setError("Errore server durante l'eliminazione.");
    } finally {
      setShowConfirm(false);
      setConfirmDeleteId(null);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    ["Username", "Nome", "Cognome", "Email"].some((key) =>
      (user[key] || "").toLowerCase().includes(filter.toLowerCase())
    )
  );

  const permessiPersonalizzati = [
    { label: "Accesso Commerciale", key: "AccessoMagazzino" },
    { label: "Accesso Tecnico", key: "AccessoCantieri" },
    { label: "Accesso Sicurezza", key: "AccessoPreventivi" },
    { label: "Accesso Gestione", key: "AccessoArticoli" },
    { label: "Accesso Amministrazione", key: "AccessoUtenti" },
  ];

  return (
    <div className="user-mgmt-container">
      <button
        className="green-button"
        onClick={() => {
          setForm(defaultForm);
          setIsEditMode(false);
          setShowDrawer(true);
        }}
      >
        + Crea nuovo utente
      </button>

      {showDrawer && (
        <div className="drawer open">
          <div className="drawer-header">
            <h5>{isEditMode ? "Modifica Utente" : "Nuovo Utente"}</h5>
            <button className="close-btn" onClick={() => setShowDrawer(false)}>
              ×
            </button>
          </div>
          <div className="drawer-body">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
              {[
                "Username",
                !isEditMode && "Password",
                "Nome",
                "Cognome",
                "Email",
                "Telefono",
                "Residente",
              ]
                .filter(Boolean)
                .map((field) => (
                  <Form.Group key={field} className="mb-3">
                    <Form.Label>{field}</Form.Label>
                    <Form.Control
                      name={field}
                      type={
                        field === "Password"
                          ? "password"
                          : field === "Email"
                          ? "email"
                          : "text"
                      }
                      value={form[field] || ""}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                ))}

              <Form.Group className="mb-3">
                <Form.Label>Azienda</Form.Label>
                <Form.Control
                  name="Azienda"
                  value="Attiva Costruzioni SRL"
                  readOnly
                  disabled
                />
              </Form.Group>

              <h6 style={{ marginTop: 20 }}>Permessi</h6>
              {permessiPersonalizzati.map(({ label, key }) => (
                <Form.Check
                  key={key}
                  label={label}
                  name={key}
                  checked={form[key]}
                  onChange={handleChange}
                />
              ))}

              <button
                type="submit"
                className="green-button full"
                disabled={loading}
              >
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : isEditMode ? (
                  "Salva Modifiche"
                ) : (
                  "Salva Utente"
                )}
              </button>
            </Form>
          </div>
        </div>
      )}

      {showDrawer && (
        <div className="drawer-overlay" onClick={() => setShowDrawer(false)} />
      )}

      <div className={`drawer image-drawer ${showImageDrawer ? "open" : ""}`}>
        <div className="drawer-header">
          <h5>Carica Immagine Profilo</h5>
          <button
            className="close-btn"
            onClick={() => setShowImageDrawer(false)}
          >
            ×
          </button>
        </div>
        <div className="drawer-body">
          <Form.Group className="mb-3">
            <Form.Label>Immagine</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>
          <Button
            className="green-button"
            onClick={() => uploadProfileImage(selectedUserId)}
          >
            Carica
          </Button>
        </div>
      </div>

      <div className="user-list">
        <h4>Utenti Attivi</h4>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Filtra per nome, cognome, email..."
          value={filter}
          onChange={handleFilterChange}
        />

        <Table responsive hover className="user-table">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Username</th>
              <th>Nome</th>
              <th>Cognome</th>
              <th>Email</th>
              <th style={{ textAlign: "center" }}>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, i) => (
              <tr key={i}>
                <td>
                  <UserImage user={user} />
                </td>
                <td>{user.Username}</td>
                <td>{user.Nome}</td>
                <td>{user.Cognome}</td>
                <td>{user.Email}</td>
                <td style={{ textAlign: "center" }}>
                  <Dropdown align="end" className="airbnb-dropdown">
                    <Dropdown.Toggle
                      size="sm"
                      variant="link"
                      className="airbnb-toggle"
                    >
                      ⋮
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          setSelectedUserId(user.IdUtente);
                          setShowImageDrawer(true);
                        }}
                      >
                        Carica Immagine
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => openEditUser(user)}>
                        Modifica
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setConfirmDeleteId(user.IdUtente);
                          setShowConfirm(true);
                        }}
                      >
                        Elimina
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {showConfirm && (
          <div className="confirm-overlay">
            <div className="confirm-box">
              <h5>Sei sicuro di voler eliminare questo utente?</h5>
              <div className="confirm-buttons">
                <Button variant="danger" onClick={confirmAndDeleteUser}>
                  Elimina
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setShowConfirm(false)}
                >
                  Annulla
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagementDrawer;
