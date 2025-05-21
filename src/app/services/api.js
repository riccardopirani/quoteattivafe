// src/services/garaService.js
import axios from "axios";
export const BASE_URL = "http://cloud.centoimpianti.com:4501"; // Cambia la porta o dominio se necessario

const GaraService = {
  // CREA una nuova gara
  creaGara: async (garaData) => {
    try {
      const response = await axios.post(`${BASE_URL}/gara`, garaData);
      return response.data;
    } catch (error) {
      console.error("Errore creazione gara:", error);
      throw error;
    }
  },

  // LEGGI l'elenco delle gare per un cliente
  leggiGare: async (idCliente) => {
    try {
      const response = await axios.post(`${BASE_URL}/gara/lista`, {
        IdCliente: idCliente ?? null,
      });
      return response.data;
    } catch (error) {
      console.error("Errore lettura gare:", error);
      throw error;
    }
  },

  // AGGIORNA una gara (ora invia direttamente i campi come JSON)
  aggiornaGara: async (garaData) => {
    try {
      const response = await axios.post(`${BASE_URL}/gara/aggiorna`, garaData);
      return response.data;
    } catch (error) {
      console.error("Errore aggiornamento gara:", error);
      throw error;
    }
  },

  // ELIMINA una gara
  eliminaGara: async (idGara) => {
    try {
      const response = await axios.post(`${BASE_URL}/gara/elimina`, {
        IdGara: idGara,
      });
      return response.data;
    } catch (error) {
      console.error("Errore eliminazione gara:", error);
      throw error;
    }
  },
};

export default GaraService;
