import axios from "axios";
export const BASE_URL = "http://cloud.centoimpianti.com:4501";

const GaraService = {
  creaGara: async (garaData) => {
    try {
      const response = await axios.post(`${BASE_URL}/gara`, garaData);
      return response.data;
    } catch (error) {
      console.error("Errore creazione gara:", error);
      throw error;
    }
  },

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

  aggiornaGara: async (garaData) => {
    try {
      const response = await axios.post(`${BASE_URL}/gara/aggiorna`, garaData);
      return response.data;
    } catch (error) {
      console.error("Errore aggiornamento gara:", error);
      throw error;
    }
  },

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
