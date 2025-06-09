import CantiereService from "../services/cantiere";
import ProduzioneService from "../services/produzione";

/**
 * Recupera i totali di costi e ricavi, avanzamenti e residui per un cantiere.
 * Allineato con la logica di GestioneContratto.
 */
export async function getTotaliCostiERicavi(idCantiere, nomeCantiere) {
  if (!idCantiere || !nomeCantiere) {
    throw new Error("IdCantiere e NomeCantiere sono obbligatori");
  }

  // Mappa le produzioni per descrizione

  const dati = await CantiereService.nodidettagli({ Codice: nomeCantiere });
  const costiManuali = await CantiereService.leggiCosti(idCantiere);
  const sal = await ProduzioneService.leggiSal(idCantiere);
  const produzioni = await ProduzioneService.leggiProduzione(idCantiere);

  const sezioniMap = {
    A: [],
    E: [],
    M: [],
    I: [],
    R: [],
  };

  for (const nodo of dati) {
    const cod = nodo.CodiceNodo?.trim?.();
    const prefisso = cod?.[0];
    const costo = parseFloat(nodo.Costo) || 0;
    const contabilita = parseFloat(nodo.Contabilita) || 0;
    const daContabilizzare = parseFloat(nodo.DaContabilizzare) || 0;

    if (sezioniMap[prefisso]) {
      sezioniMap[prefisso].push({
        codice: cod,
        costo,
        contabilita,
        daContabilizzare,
      });
    }
  }

  // Totali costi e ricavi
  const totaleCostiSenzaRicavi = ["A", "E", "M", "I"]
    .flatMap((k) => sezioniMap[k])
    .reduce((acc, item) => acc + item.costo, 0);

  const totaleRicavi = sezioniMap["R"].reduce(
    (acc, item) => acc + item.costo,
    0,
  );

  // Avanzamento produzione (teorico)
  const produzioneComplessiva = sezioniMap["R"].reduce(
    (acc, item) => acc + item.contabilita + item.daContabilizzare,
    0,
  );
  const produzioneContabilizzata = sezioniMap["R"].reduce(
    (acc, item) => acc + item.contabilita,
    0,
  );

  const avanzamentoProduzione =
    produzioneComplessiva > 0
      ? (produzioneContabilizzata / produzioneComplessiva) * 100
      : 0;

  const lavoriResidui = produzioneComplessiva - produzioneContabilizzata;

  // SAL (da nodidettagli)
  const totaleSAL = produzioneComplessiva;
  const avanzamentoSAL =
    produzioneContabilizzata > 0
      ? (totaleSAL / produzioneContabilizzata) * 100
      : 0;
  const salDaFare = produzioneContabilizzata - totaleSAL;

  // Fatturazione (da nodidettagli)
  const totaleFatturato = sezioniMap["R"].reduce(
    (acc, item) => acc + item.costo,
    0,
  );
  const avanzamentoFatturazione =
    totaleRicavi > 0 ? (totaleFatturato / totaleRicavi) * 100 : 0;
  const residuoFatturare = totaleRicavi - totaleFatturato;
  const produzioneNonFatturata = produzioneComplessiva - totaleFatturato;
  const salNonFatturati = totaleSAL - totaleFatturato;

  // SIL e SAL manuali
  const siltotali = costiManuali
    .filter((c) => (c.Nome || "").trim().toUpperCase() === "SIL")
    .reduce((sum, c) => sum + parseFloat(c.Importo || 0), 0);

  const salTotali = costiManuali
    .filter((c) => (c.Nome || "").trim().toUpperCase() === "SAL")
    .reduce((sum, c) => sum + parseFloat(c.Importo || 0), 0);

  // Totale costi manuali
  const costiManualiTotali = costiManuali.reduce(
    (sum, c) => sum + parseFloat(c.Importo || 0),
    0,
  );

  // Totale produzione (come in GestioneContratto)
  const produzioneTotalePerLavoro = (descrizione) => {
    if (!descrizione) return 0;

    const righe = sal.filter(
      (r) =>
        r.Lavoro?.trim().toLowerCase() === descrizione?.trim().toLowerCase(),
    );
    if (righe.length > 0) {
      return righe.reduce((sum, r) => {
        const importo = parseFloat(r.ImportoFattura || 0);
        const importo2 = parseFloat(r.ImportoSAL || 0);
        return sum + importo + Math.max(importo2 - importo, 0);
      }, 0);
    }

    const contratto = produzioni.find((p) => p.Lavori === descrizione);
    return parseFloat(contratto?.Importo || 0);
  };

  const produzioneFatturata = (descrizione) => {
    if (!descrizione) return 0;
    const righe = sal.filter((r) => r.Lavoro === descrizione);
    return righe.reduce((sum, r) => sum + parseFloat(r.ImportoFattura || 0), 0);
  };

  const produzioneResidua = (descrizione) =>
    produzioneTotalePerLavoro(descrizione) - produzioneFatturata(descrizione);

  const totaleProduzioneTotale = produzioni.reduce(
    (sum, p) => sum + produzioneTotalePerLavoro(p.Lavori),
    0,
  );

  const lavoriResiduiDaGestioneContratto = produzioni.reduce(
    (sum, p) => sum + produzioneResidua(p.Lavori),
    0,
  );

  // Avanzamento reale
  const percentualeAvanzamentoProduzioneReale =
    totaleProduzioneTotale > 0
      ? (costiManualiTotali / totaleProduzioneTotale) * 100
      : 0;

  return {
    totaleCostiSenzaRicavi: Number(totaleCostiSenzaRicavi.toFixed(2)),
    totaleRicavi: Number(totaleRicavi.toFixed(2)),
    lavoriResidui: Number(lavoriResiduiDaGestioneContratto.toFixed(2)), // <-- VALORE CORRETTO
    avanzamentoProduzione: Number(avanzamentoProduzione.toFixed(2)),
    avanzamentoSAL: Number(avanzamentoSAL.toFixed(2)),
    totaleSAL: Number(totaleSAL.toFixed(2)),
    salDaFare: Number(salDaFare.toFixed(2)),
    avanzamentoFatturazione: Number(avanzamentoFatturazione.toFixed(2)),
    totaleFatturato: Number(totaleFatturato.toFixed(2)),
    residuoFatturare: Number(residuoFatturare.toFixed(2)),
    produzioneNonFatturata: Number(produzioneNonFatturata.toFixed(2)),
    salNonFatturati: Number(salNonFatturati.toFixed(2)),
    siltotali: Number(siltotali.toFixed(2)),
    percentualeAvanzamentoProduzioneReale: Number(
      percentualeAvanzamentoProduzioneReale.toFixed(2),
    ),
    salTotali: Number(salTotali.toFixed(2)),
  };
}
