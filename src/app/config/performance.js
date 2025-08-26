// Configurazione per le performance dell'applicazione

export const PERFORMANCE_CONFIG = {
  // Debounce settings
  DEBOUNCE: {
    FILTER: 300,        // ms per il filtro utenti
    SEARCH: 500,        // ms per le ricerche
    SCROLL: 100,        // ms per lo scroll
  },

  // Lazy loading settings
  LAZY_LOADING: {
    IMAGE_THRESHOLD: 0.1,  // Intersection Observer threshold
    BATCH_SIZE: 20,         // Numero di elementi da caricare per volta
  },

  // Cache settings
  CACHE: {
    USER_IMAGES: 5 * 60 * 1000,  // 5 minuti per le immagini utente
    API_RESPONSES: 2 * 60 * 1000, // 2 minuti per le risposte API
    USER_DATA: 10 * 60 * 1000,    // 10 minuti per i dati utente
  },

  // Virtual scrolling settings
  VIRTUAL_SCROLL: {
    ROW_HEIGHT: 50,           // Altezza di ogni riga
    CONTAINER_HEIGHT: 400,    // Altezza del container
    BUFFER_SIZE: 5,           // Righe extra da renderizzare
  },

  // API settings
  API: {
    TIMEOUT: 10000,           // Timeout per le chiamate API (10s)
    RETRY_ATTEMPTS: 3,        // Tentativi di retry
    RETRY_DELAY: 1000,        // Delay tra i retry (1s)
  },

  // Image optimization
  IMAGES: {
    QUALITY: 0.8,             // Qualità delle immagini (0.8 = 80%)
    MAX_WIDTH: 800,           // Larghezza massima
    MAX_HEIGHT: 600,          // Altezza massima
    FORMAT: 'webp',           // Formato preferito
  },

  // Bundle optimization
  BUNDLE: {
    CHUNK_SIZE: 50000,        // Dimensione massima dei chunk
    PRELOAD_CRITICAL: true,   // Preload dei componenti critici
    LAZY_LOAD_ROUTES: true,   // Lazy loading delle route
  },
};

// Helper per ottenere configurazioni specifiche
export const getPerformanceConfig = (key) => {
  const keys = key.split('.');
  let value = PERFORMANCE_CONFIG;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return null;
    }
  }
  
  return value;
};

// Configurazione per componenti specifici
export const COMPONENT_PERFORMANCE = {
  USER_TABLE: {
    VIRTUAL_SCROLL: true,
    LAZY_LOAD_IMAGES: true,
    DEBOUNCE_FILTER: true,
    CACHE_RESULTS: true,
  },
  
  DASHBOARD: {
    LAZY_LOAD_CHARTS: true,
    DEBOUNCE_UPDATES: true,
    CACHE_DATA: true,
  },
  
  SIDEBAR: {
    LAZY_LOAD_MENU: false,    // Menu sempre caricato
    CACHE_PERMISSIONS: true,
  },
};

export default PERFORMANCE_CONFIG;
