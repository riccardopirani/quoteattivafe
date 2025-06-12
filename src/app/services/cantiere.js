import axios from "axios";
import { BASE_URL } from "./api";

const CantiereService = {
  aggiornaWBS: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/risorse/aggionawbs`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore inserimento documento:", error);
      throw error;
    }
  },
  attivitaADD: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/attivita/load`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore inserimento documento:", error);
      throw error;
    }
  },
  caricaAttivita: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/attivita/load`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore inserimento documento:", error);
      throw error;
    }
  },
  caricaRisorse: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/RisorseUmane/CaricaRisorseCantiere`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore inserimento documento:", error);
      throw error;
    }
  },
  aggiornaCustom: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/aggiorna/marginecosti`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore inserimento documento:", error);
      throw error;
    }
  },
  statoCommessa: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/external/stato`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore inserimento documento:", error);
      throw error;
    }
  },
  graficoCommessa: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/external/nodi/grafici`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore inserimento documento:", error);
      throw error;
    }
  },
  nodidettagli: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/external/nodi/dettagli`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore inserimento documento:", error);
      throw error;
    }
  },
  caricadocumenti: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/caricadocumenti`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore inserimento documento:", error);
      throw error;
    }
  },
  inserisciDocumento: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/inserimentodocumento`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore inserimento documento:", error);
      throw error;
    }
  },
  ricercaCantieriArca: async (params = {}) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/ricerca/progetti`,
        params,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Errore nella ricerca delle commesse:", error);
      throw error;
    }
  },
  ricercaCantieri: async (params = {}) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/ricerca`,
        params,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Errore nella ricerca delle commesse:", error);
      throw error;
    }
  },

  creaCantiere: async (IdCliente, NomeCantiere) => {
    try {
      const idUser = await localStorage.getItem("userId");

      const response = await axios.post(
        `${BASE_URL}/cantieri/generacantiere`,
        {
          IdCliente,
          IdUtente: parseInt(idUser), // assicurati che sia un numero se necessario
          NomeCantiere,
          Tipo: "Consuntivo",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore creazione cantiere:", error);
      throw error;
    }
  },

  creaCliente: async (clienteData) => {
    // clienteData è un oggetto con i campi richiesti dal backend (PEC, FAX, CodiceFiscale, ecc.)
    try {
      const response = await axios.post(
        `${BASE_URL}/cliente/crea`,
        clienteData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      // La response contiene un oggetto con la proprietà "return" che è true/false
      return response.data;
    } catch (error) {
      console.error("Errore creazione cliente:", error);
      throw error;
    }
  },
  aggiornaCantiere: async (cantiereData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/aggiornacantiere`,
        cantiereData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Errore aggiornamento cantiere:", error);
      throw error;
    }
  },
  // 🔹 COSTI COMMESSA

  creaCosto: async (costoData) => {
    try {
      const response = await axios.post(`${BASE_URL}/costi/crea`, costoData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Errore creazione costo:", error);
      throw error;
    }
  },

  aggiornaMargineCosti: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/aggiorna/marginecosti`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Errore creazione costo:", error);
      throw error;
    }
  },

  leggiCosti: async (idCantiere) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/costi/leggi`,
        { IdCantiere: idCantiere },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Errore lettura costi:", error);
      throw error;
    }
  },

  aggiornaCosto: async (id, costoData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/costi/aggiorna`,
        { Id: id, ...costoData },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Errore aggiornamento costo:", error);
      throw error;
    }
  },

  eliminaCosto: async (id) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/costi/elimina`,
        { Id: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Errore eliminazione costo:", error);
      throw error;
    }
  },
};

export default CantiereService;
