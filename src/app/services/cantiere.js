import axios from "axios";
import { BASE_URL } from "./api";

const CantiereService = {
  ricercaCantieri: async (params = {}) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cantieri/ricerca`,
        params,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
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
        }
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
        }
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
        }
      );

      return response.data;
    } catch (error) {
      console.error("Errore aggiornamento cantiere:", error);
      throw error;
    }
  },
};

export default CantiereService;
