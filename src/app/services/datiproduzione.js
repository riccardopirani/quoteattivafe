import axios from "axios";
import { BASE_URL } from "./api";

const DatiProduzioneService = {
  carica: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/datiproduzione/carica`);
      return response.data;
    } catch (error) {
      console.error("Errore caricamento dati produzione:", error);
      throw error;
    }
  },

  inserisci: async (dato) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/datiproduzione/inserisci`,
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
        `${BASE_URL}/datiproduzione/aggiorna`,
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
      const response = await axios.post(`${BASE_URL}/datiproduzione/elimina`, {
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
