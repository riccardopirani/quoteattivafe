// Configurazione ambiente locale semplificata
const env = {
  NODE_ENV: "development",
  GENERATE_SOURCEMAP: "false",
  SKIP_PREFLIGHT_CHECK: "true",
  
  // Configurazione i18next
  I18N_DEBUG: "false",
  
  // Configurazione webpack
  WEBPACK_ANALYZE: "false",
  
  // Configurazione performance
  PERFORMANCE_MONITORING: "false",
  ENABLE_SERVICE_WORKER: "false",
  
  // Configurazione porta
  PORT: 3000,
  
  // Configurazione SSL
  HTTPS: "false",
  
  // Configurazione host
  HOST: "localhost"
};

export default env;
