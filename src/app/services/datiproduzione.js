import axios from "axios";
import { BASE_URL } from "./api";

const DatiProduzioneService = {
  carica: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/produzione/carica`);
      return response.data;
    } catch (error) {
      console.error("Errore caricamento dati produzione:", error);
      throw error;
    }
  },

  inserisci: async (dato) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/produzione/inserisci`,
        dato,
      );
      return response.data;
    } catch (error) {
      console.error("Errore inserimento dato produzione:", error);
      throw error;
    }
  },

  aggiorna: async (dato) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/produzione/aggiorna`,
        dato,
      );
      return response.data;
    } catch (error) {
      console.error("Errore aggiornamento dato produzione:", error);
      throw error;
    }
  },

  elimina: async (id) => {
    try {
      const response = await axios.post(`${BASE_URL}/produzione/elimina`, {
        ID: id,
      });
      return response.data;
    } catch (error) {
      console.error("Errore eliminazione dato produzione:", error);
      throw error;
    }
  },
};

export default DatiProduzioneService;
