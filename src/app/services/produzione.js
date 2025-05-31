import axios from "axios";
import { BASE_URL } from "./api";

const ProduzioneService = {
  // PRODUZIONE ------------------------------------

  // CREA una nuova produzione
  creaProduzione: async (produzioneData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/produzione/crea`,
        produzioneData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("❌ Errore creazione produzione:", error);
      throw error;
    }
  },

  // LEGGI tutte le produzioni o quelle di un cantiere specifico
  leggiProduzione: async (IdCantiere = null) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/produzione/leggi`,
        IdCantiere ? { IdCantiere } : {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("❌ Errore lettura produzione:", error);
      throw error;
    }
  },

  // AGGIORNA una produzione esistente
  aggiornaProduzione: async (IdProduzione, aggiornamentoData) => {
    try {
      const payload = {
        IdProduzione,
        ...aggiornamentoData,
      };

      const response = await axios.post(
        `${BASE_URL}/produzione/aggiorna`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("❌ Errore aggiornamento produzione:", error);
      throw error;
    }
  },

  // ELIMINA una produzione
  eliminaProduzione: async (IdProduzione) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/produzione/elimina`,
        { IdProduzione },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("❌ Errore eliminazione produzione:", error);
      throw error;
    }
  },

  // SAL (Stato Avanzamento Lavori) -----------------------

  // CREA nuovo SAL
  creaSal: async (salData) => {
    try {
      const response = await axios.post(`${BASE_URL}/sal/inserisci`, salData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("❌ Errore creazione SAL:", error);
      throw error;
    }
  },

  // LEGGI SAL per cantiere
  leggiSal: async (IdCantiere) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/sal/leggi`,
        { IdCantiere },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("❌ Errore lettura SAL:", error);
      throw error;
    }
  },

  // AGGIORNA un record SAL
  aggiornaSal: async (IdSal, data) => {
    try {
      const payload = {
        IdSal,
        ...data,
      };

      const response = await axios.post(`${BASE_URL}/sal/aggiorna`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("❌ Errore aggiornamento SAL:", error);
      throw error;
    }
  },

  // ELIMINA un record SAL
  eliminaSal: async (IdSal) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/sal/elimina`,
        { IdSal },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("❌ Errore eliminazione SAL:", error);
      throw error;
    }
  },
};

export default ProduzioneService;
