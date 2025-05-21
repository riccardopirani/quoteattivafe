// src/services/garaService.js
import axios from "axios";
import { BASE_URL } from "./api"; // Assicurati di avere un file config.js con l'URL base
const ClienteService = {
  // Ricerca clienti (può accettare parametri opzionali)
  ricerca: async (params = {}) => {
    try {
      const response = await axios.post(`${BASE_URL}/cliente/ricerca`, params);
      return response.data;
    } catch (error) {
      console.error("Errore ricerca clienti:", error);
      throw error;
    }
  },

  // Carica riferimenti del cliente
  caricaRiferimenti: async (idCliente) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cliente/caricariferimenticliente`,
        { IdCliente: idCliente },
      );
      return response.data;
    } catch (error) {
      console.error("Errore caricamento riferimenti cliente:", error);
      throw error;
    }
  },

  // Carica filiali del cliente
  caricaFiliali: async (idCliente) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cliente/caricafilialicliente`,
        { IdCliente: idCliente },
      );
      return response.data;
    } catch (error) {
      console.error("Errore caricamento filiali cliente:", error);
      throw error;
    }
  },

  // Inserisce un nuovo cliente
  creaCliente: async (datiCliente) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cliente/crea`,
        datiCliente,
      );
      return response.data;
    } catch (error) {
      console.error("Errore creazione cliente:", error);
      throw error;
    }
  },

  // Aggiorna un cliente esistente
  aggiornaCliente: async (datiCliente) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/cliente/aggiorna`,
        datiCliente,
      );
      return response.data;
    } catch (error) {
      console.error("Errore aggiornamento cliente:", error);
      throw error;
    }
  },

  // Elimina un cliente
  eliminaCliente: async (idCliente) => {
    try {
      const response = await axios.post(`${BASE_URL}/cliente/elimina`, {
        IdCliente: idCliente,
      });
      return response.data;
    } catch (error) {
      console.error("Errore eliminazione cliente:", error);
      throw error;
    }
  },
};

export default ClienteService;
