import { BASE_URL } from "./api";
import axios from "axios";

const RiunioneCoordinamentoService = {
  // ✅ CREA una nuova riunione
  crea: async (data) => {
    const res = await axios.post(BASE_URL + "/riunioni/add", data);
    return res.data.return;
  },

  // ✅ LEGGI tutte le riunioni o una specifica (se passi Id)
  leggi: async (Id = null) => {
    const res = await axios.post(BASE_URL + "/riunioni/load", { Id });
    return res.data;
  },

  // ✅ AGGIORNA una riunione
  aggiorna: async (data) => {
    const res = await axios.post(BASE_URL + "/riunioni/update", data);
    return res.data.return;
  },

  // ✅ ELIMINA una riunione
  elimina: async (Id) => {
    const res = await axios.post(BASE_URL + "/riunioni/delete", { Id });
    return res.data.return;
  },
};

export default RiunioneCoordinamentoService;
