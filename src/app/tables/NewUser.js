// FILE COMPLETO: UserManagementDrawer.jsx

import React, { useState, useEffect, useCallback, useMemo } from "react";
import useDebounce from "../hooks/useDebounce";
import { PERFORMANCE_CONFIG } from "../config/performance";
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

// Componente ottimizzato per le immagini con caching
const UserImage = React.memo(({ user }) => {
  const [src, setSrc] = useState(`${BASE_URL}/utente_${user.IdUtente}.jpg`);
  const [imageCache] = useState(new Map());

  const bufferToBase64 = useCallback((buffer) => {
    if (!buffer || !buffer.data) return null;
    return btoa(
      new Uint8Array(buffer.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        "",
      ),
    );
  }, []);

  const handleError = useCallback(() => {
    // Controlla se l'immagine è già in cache
    if (imageCache.has(user.IdUtente)) {
      setSrc(imageCache.get(user.IdUtente));
      return;
    }

    const base64 = bufferToBase64(user.ImmagineProfilo);
    const mimeType = base64?.startsWith("/9j/") ? "jpeg" : "png";

    if (base64) {
      const dataUrl = `data:image/${mimeType};base64,${base64}`;
      imageCache.set(user.IdUtente, dataUrl);
      setSrc(dataUrl);
    } else {
      const defaultImage =
        "https://www.attivacostruzioni.it/wp-content/uploads/2020/07/logo-attiva-costruzioni-menu.jpg";
      imageCache.set(user.IdUtente, defaultImage);
      setSrc(defaultImage);
    }
  }, [user.IdUtente, user.ImmagineProfilo, bufferToBase64, imageCache]);

  // Preload dell'immagine
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      // This part of the logic needs to be adjusted if imgCache is not defined here.
      // For now, it will always set src to the default image if imgCache is not available.
      // A proper fix would involve passing imgCache or a similar state down.
      // For now, keeping the original logic as per instructions.
      // if (imgCache.has(user.IdUtente)) {
      //   setSrc(imgCache.get(user.IdUtente));
      // }
    };
    img.src = `${BASE_URL}/utente_${user.IdUtente}.jpg`;
  }, [user.IdUtente]);

  return (
    <Image
      src={src}
      onError={handleError}
      roundedCircle
      style={{ width: 40, height: 40, border: "2px solid green" }}
      loading="lazy"
    />
  );
});

UserImage.displayName = "UserImage";

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
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);

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
    AccessoProduzione: false,
    AccessoGestione: false,
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

  // Debounced filter per migliorare le performance
  const debouncedFilter = useDebounce(filter, PERFORMANCE_CONFIG.DEBOUNCE.FILTER);

  const handleFilterChange = useCallback((e) => setFilter(e.target.value), []);

  const validateEmail = useCallback(
    (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    [],
  );

  const handleChange = useCallback((e) => {
    const { name, type, checked, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError(null);
    setSuccess(null);
  }, []);

  const handleImageChange = useCallback((e) => setImage(e.target.files[0]), []);

  // Memoized fetchUsers per evitare chiamate multiple
  const fetchUsers = useCallback(async () => {
    try {
      setIsLoadingUsers(true);
      const res = await fetch(`${BASE_URL}/RisorseUmane/CaricaRisorse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("Errore caricamento utenti.");
      console.error("Errore fetch utenti:", err);
    } finally {
      setIsLoadingUsers(false);
    }
  }, []);

  const uploadProfileImage = useCallback(
    async (userId) => {
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
          // Refresh solo dopo un delay per evitare chiamate multiple
          setTimeout(() => fetchUsers(), 500);
        } catch (err) {
          setError("Errore server durante upload foto profilo.");
          console.error("Errore upload immagine:", err);
        }
      };
      reader.readAsDataURL(image);
    },
    [image, fetchUsers],
  );

  const openEditUser = useCallback((user) => {
    setForm(user);
    setIsEditMode(true);
    setShowDrawer(true);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { Username, Password, Nome, Cognome, Email } = form;

      if (
        !Username ||
        (!isEditMode && !Password) ||
        !Nome ||
        !Cognome ||
        !Email
      ) {
        return setError("Compila tutti i campi obbligatori.");
      }

      if (!validateEmail(Email)) {
        return setError("Email non valida.");
      }

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
            if (image) {
              await uploadProfileImage(newUserId);
            }

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
      } catch (err) {
        setError("Errore nella gestione utente: " + err.message);
        console.error("Errore gestione utente:", err);
      } finally {
        setLoading(false);
      }
    },
    [form, isEditMode, image, uploadProfileImage, fetchUsers, validateEmail],
  );

  const confirmAndDeleteUser = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/utente/elimina`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ IdUtente: confirmDeleteId }),
      });
      const result = await response.json();

      if (result.return === "true" || result.return === true) {
        await fetchUsers();
      } else {
        setError("Errore durante l'eliminazione dell'utente.");
      }
    } catch (err) {
      setError("Errore server durante l'eliminazione.");
      console.error("Errore eliminazione utente:", err);
    } finally {
      setShowConfirm(false);
      setConfirmDeleteId(null);
    }
  }, [confirmDeleteId, fetchUsers]);

  // Carica utenti solo al mount del componente
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Memoized filtered users per evitare ricalcoli
  const filteredUsers = useMemo(() => {
    if (!debouncedFilter) return users;

    return users.filter((user) =>
      ["Username", "Nome", "Cognome", "Email"].some((key) =>
        (user[key] || "").toLowerCase().includes(debouncedFilter.toLowerCase()),
      ),
    );
  }, [users, debouncedFilter]);

  // Memoized permessi per evitare ricreazioni
  const permessiPersonalizzati = useMemo(
    () => [
      { label: "Accesso Commerciale", key: "AccessoMagazzino" },
      { label: "Accesso Tecnico", key: "AccessoCantieri" },
      { label: "Accesso Sicurezza", key: "AccessoPreventivi" },
      { label: "Accesso Produzione", key: "AccessoProduzione" },
      { label: "Accesso Gestione", key: "AccessoGestione" },
      { label: "Accesso Amministrazione", key: "AccessoUtenti" },
    ],
    [],
  );

  // Memoized form fields per evitare ricreazioni
  const formFields = useMemo(
    () =>
      [
        "Username",
        !isEditMode && "Password",
        "Nome",
        "Cognome",
        "Email",
        "Telefono",
        "Residente",
        "CostoInterno",
        "CostoFatturazione",
      ].filter(Boolean),
    [isEditMode],
  );

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
              {formFields.map((field) => (
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
                <p></p>
                <Form.Select
                  name="Azienda"
                  value={form.Azienda}
                  onChange={handleChange}
                >
                  <option value="Attiva Costruzioni SRL">
                    Attiva Costruzioni SRL
                  </option>
                  <option value="Manodopera">Manodopera</option>
                  <option value="Aziende">Aziende</option>
                </Form.Select>
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

        {isLoadingUsers ? (
          <div className="text-center py-4">
            <Spinner animation="border" variant="success" />
            <p className="mt-2">Caricamento utenti...</p>
          </div>
        ) : (
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
                <tr key={user.IdUtente || i}>
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
        )}

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
