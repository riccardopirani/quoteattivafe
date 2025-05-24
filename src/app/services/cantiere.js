// src/services/cantiereService.js
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
};

export default CantiereService;
