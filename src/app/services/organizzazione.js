import axios from "axios";
import { BASE_URL } from "./api";

const OrganizzazioneService = {
  creaMezzo: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/mezzi/crea`, data);
      return response.data;
    } catch (error) {
      console.error("Errore creazione mezzo:", error);
      throw error;
    }
  },

  aggiornaMezzo: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/mezzi/aggiorna`, data);
      return response.data;
    } catch (error) {
      console.error("Errore aggiornamento mezzo:", error);
      throw error;
    }
  },

  eliminaMezzo: async (idMezzo) => {
    try {
      const response = await axios.post(`${BASE_URL}/mezzi/elimina`, {
        Id: idMezzo,
      });
      return response.data;
    } catch (error) {
      console.error("Errore eliminazione mezzo:", error);
      throw error;
    }
  },

  leggiMezzi: async (idCantiere = null) => {
    try {
      const response = await axios.post(`${BASE_URL}/mezzi/leggi`, {
        IdCantiere: idCantiere,
      });
      return response.data;
    } catch (error) {
      console.error("Errore lettura mezzi:", error);
      throw error;
    }
  },
  creaAttrezzo: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/attrezzi/crea`, data);
      return response.data;
    } catch (error) {
      console.error("Errore creazione attrezzo:", error);
      throw error;
    }
  },

  aggiornaAttrezzo: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/attrezzi/aggiorna`, data);
      return response.data;
    } catch (error) {
      console.error("Errore aggiornamento attrezzo:", error);
      throw error;
    }
  },

  eliminaAttrezzo: async (idAttrezzo) => {
    try {
      const response = await axios.post(`${BASE_URL}/attrezzi/elimina`, {
        Id: idAttrezzo,
      });
      return response.data;
    } catch (error) {
      console.error("Errore eliminazione attrezzo:", error);
      throw error;
    }
  },

  leggiAttrezzi: async (idCantiere = null) => {
    try {
      const response = await axios.post(`${BASE_URL}/attrezzi/leggi`, {
        IdCantiere: idCantiere,
      });
      return response.data;
    } catch (error) {
      console.error("Errore lettura attrezzi:", error);
      throw error;
    }
  },
};

export default OrganizzazioneService;
