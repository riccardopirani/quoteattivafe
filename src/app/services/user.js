import { BASE_URL } from "./api"; // Assicurati di avere un file config.js con l'URL base
export async function login(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Username: username, Password: password }),
    });

    const result = await response.json();

    // Se il login ha successo (ritorna un ID utente valido), salvalo
    if (result.return && result.return !== 0) {
      return result.return; // ID utente
    } else {
      throw new Error("Credenziali non valide");
    }
  } catch (error) {
    throw new Error("Errore durante la login: " + error.message);
  }
}
