import axios from "axios";
import { BASE_URL } from "./api";
const ApprovvigionamentoService = {
  crea: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/approvvigionamento/crea`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Errore creazione approvvigionamento:", error);
      throw error;
    }
  },

  aggiorna: async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/approvvigionamento/aggiorna`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Errore aggiornamento approvvigionamento:", error);
      throw error;
    }
  },

  elimina: async (idApprovvigionamento) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/approvvigionamento/elimina`,
        {
          IdApprovvigionamento: idApprovvigionamento,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Errore eliminazione approvvigionamento:", error);
      throw error;
    }
  },

  leggi: async (idCantiere = null) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/approvvigionamento/leggi`,
        {
          IdCantiere: idCantiere,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Errore lettura approvvigionamenti:", error);
      throw error;
    }
  },
};

export default ApprovvigionamentoService;
