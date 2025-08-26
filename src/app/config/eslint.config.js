module.exports = {
  extends: ["react-app", "react-app/jest"],
  rules: {
    // Disabilita warning per variabili non utilizzate in sviluppo
    "no-unused-vars": process.env.NODE_ENV === "development" ? "warn" : "error",

    // Disabilita warning per emoji non accessibili in sviluppo
    "jsx-a11y/accessible-emoji":
      process.env.NODE_ENV === "development" ? "warn" : "error",

    // Disabilita warning per dipendenze useEffect mancanti in sviluppo
    "react-hooks/exhaustive-deps":
      process.env.NODE_ENV === "development" ? "warn" : "error",

    // Configurazioni per migliorare la qualità del codice
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    // Configurazioni per TypeScript (se utilizzato)
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",

    // Configurazioni per import
    "import/no-unresolved": "off",
    "import/extensions": "off",

    // Configurazioni per console (permetti in sviluppo)
    "no-console": process.env.NODE_ENV === "development" ? "off" : "warn",

    // Configurazioni per debugger
    "no-debugger": process.env.NODE_ENV === "development" ? "warn" : "error",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
