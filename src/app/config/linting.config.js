// Configurazione per ridurre i warning di linting
export const LINTING_CONFIG = {
  // Regole per variabili non utilizzate
  UNUSED_VARS: {
    // Permetti variabili non utilizzate in sviluppo
    ALLOW_IN_DEV: true,

    // Pattern per variabili che possono essere non utilizzate
    ALLOWED_PATTERNS: [
      "^_", // Variabili che iniziano con underscore
      "^unused", // Variabili che iniziano con "unused"
      "^temp", // Variabili temporanee
      "^placeholder", // Placeholder
    ],
  },

  // Regole per useEffect
  USE_EFFECT: {
    // Permetti dipendenze mancanti in sviluppo
    ALLOW_MISSING_DEPS_IN_DEV: true,

    // Dipendenze che possono essere omesse
    OPTIONAL_DEPS: ["dispatch", "setState", "ref", "callback"],
  },

  // Regole per emoji
  EMOJI: {
    // Permetti emoji non accessibili in sviluppo
    ALLOW_INACCESSIBLE_IN_DEV: true,

    // Pattern per emoji che possono essere non accessibili
    ALLOWED_PATTERNS: ["🎯", "🚀", "✅", "❌", "🔄", "📊", "🔧", "🎉"],
  },

  // Regole per console
  CONSOLE: {
    // Permetti console in sviluppo
    ALLOW_IN_DEV: true,

    // Metodi console permessi
    ALLOWED_METHODS: ["log", "warn", "error", "info"],
  },
};

// Helper per verificare se siamo in sviluppo
export const isDevelopment = () => {
  return process.env.NODE_ENV === "development";
};

// Helper per verificare se una regola è permessa
export const isRuleAllowed = (ruleType) => {
  if (!isDevelopment()) return false;

  switch (ruleType) {
    case "unused_vars":
      return LINTING_CONFIG.UNUSED_VARS.ALLOW_IN_DEV;
    case "use_effect":
      return LINTING_CONFIG.USE_EFFECT.ALLOW_MISSING_DEPS_IN_DEV;
    case "emoji":
      return LINTING_CONFIG.EMOJI.ALLOW_INACCESSIBLE_IN_DEV;
    case "console":
      return LINTING_CONFIG.CONSOLE.ALLOW_IN_DEV;
    default:
      return false;
  }
};

export default LINTING_CONFIG;
