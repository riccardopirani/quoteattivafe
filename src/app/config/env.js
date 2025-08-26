// Configurazione ambiente
const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  GENERATE_SOURCEMAP: process.env.GENERATE_SOURCEMAP || "false",
  SKIP_PREFLIGHT_CHECK: process.env.SKIP_PREFLIGHT_CHECK || "true",

  // Configurazione i18next
  I18N_DEBUG: process.env.REACT_APP_I18N_DEBUG || "false",

  // Configurazione webpack
  WEBPACK_ANALYZE: process.env.REACT_APP_WEBPACK_ANALYZE || "false",

  // Configurazione performance
  PERFORMANCE_MONITORING:
    process.env.REACT_APP_PERFORMANCE_MONITORING || "false",
  ENABLE_SERVICE_WORKER: process.env.REACT_APP_ENABLE_SERVICE_WORKER || "false",

  // Configurazione porta
  PORT: process.env.PORT || 3000,

  // Configurazione SSL
  HTTPS: process.env.HTTPS || "false",

  // Configurazione host
  HOST: process.env.HOST || "localhost",
};

export default env;
