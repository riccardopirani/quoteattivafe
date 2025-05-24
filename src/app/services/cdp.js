// CDPService.js
import { BASE_URL } from "./api";
import axios from "axios";

const CDPService = {
  crea: async (data) => {
    const res = await axios.post(BASE_URL + "/cdp/crea", data);
    return res.data.return;
  },

  leggi: async (IdCantiere) => {
    const res = await axios.post(BASE_URL + "/cdp/leggi", { IdCantiere });
    return res.data;
  },

  aggiorna: async (data) => {
    const res = await axios.post(BASE_URL + "/cdp/aggiorna", data);
    return res.data.return;
  },

  elimina: async (IdCDP) => {
    const res = await axios.post(BASE_URL + "/cdp/elimina", { IdCDP });
    return res.data.return;
  },
};

export default CDPService;
