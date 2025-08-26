// File centralizzato per tutte le route dell'applicazione
// Questo file contiene tutte le costanti per i path delle route

export const ROUTES = {
  // Authentication Routes
  LOGIN: "/login",
  REGISTER: "/register",

  // Dashboard Routes
  HOME: "/",
  DASHBOARD: "/dashboard",

  // Gare Routes
  GARE_UPCOMING: "/gare/upcoming",

  // Commerciale Routes
  COMMERCIALE_COMMESSE: "/commerciale/commesse",
  COMMERCIALE_CORDINAMENTO: "/commerciale/cordinamento",

  // Produzione Routes
  PRODUZIONE_DASHBOARD: "/produzione/dashboard",
  PRODUZIONE_DASHBOARD_GLOBAL: "/produzione/dashboard/global",
  PRODUZIONE_GESTIONE_COMMESSA: "/produzione/gestione-commessa",

  // Tecnico Routes
  TECNICO_DASHBOARD: "/tecnico/dashboard",

  // UI Routes
  UI_BUTTONS: "/ui/buttons",
  UI_DROPDOWNS: "/ui/dropdowns",

  // Table Routes
  TABLES_BASIC: "/tables/basic",
  TABLES_USERS: "/tables/users",

  // Other Routes
  ICONS: "/icons",
  CHARTS: "/charts",

  // Error Routes
  ERROR_404: "/error/404",
  ERROR_500: "/error/500",
};

// Helper functions per costruire route dinamiche
export const buildRoute = (baseRoute, params = {}) => {
  let route = baseRoute;

  // Sostituisce i parametri nella route
  Object.keys(params).forEach((key) => {
    route = route.replace(`:${key}`, params[key]);
  });

  return route;
};

// Helper per aggiungere query parameters
export const addQueryParams = (route, queryParams = {}) => {
  if (Object.keys(queryParams).length === 0) {
    return route;
  }

  const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  return `${route}?${queryString}`;
};

// Route con parametri dinamici
export const DYNAMIC_ROUTES = {
  // Esempio: /user/:id/profile
  USER_PROFILE: "/user/:id/profile",
  COMMESSA_DETAIL: "/commessa/:id",
  CANTIERE_DETAIL: "/cantiere/:id",
};

// Route per la navigazione programmatica
export const PROGRAMMATIC_ROUTES = {
  // Redirect dopo operazioni
  AFTER_LOGIN: ROUTES.DASHBOARD,
  AFTER_LOGOUT: ROUTES.LOGIN,
  AFTER_CREATE_COMMESSA: ROUTES.COMMERCIALE_COMMESSE,
  AFTER_UPDATE_COMMESSA: ROUTES.COMMERCIALE_COMMESSE,

  // Fallback routes
  DEFAULT_ERROR: ROUTES.ERROR_404,
  UNAUTHORIZED: ROUTES.LOGIN,
};

// Route per il menu laterale (organizzate per categoria)
export const MENU_ROUTES = {
  COMMERCIALE: {
    MAIN: ROUTES.GARE_UPCOMING,
    SUBMENU: {
      RIEPILOGO: ROUTES.GARE_UPCOMING,
      IN_STUDIO: addQueryParams(ROUTES.UI_BUTTONS, { menu: "studio" }),
      CONSEGNATE: addQueryParams(ROUTES.UI_BUTTONS, { menu: "consegnate" }),
      AGGIUDICATE: addQueryParams(ROUTES.UI_BUTTONS, { menu: "aggiudicate" }),
      PERSE: addQueryParams(ROUTES.UI_BUTTONS, { menu: "perse" }),
    },
  },

  TECNICO: {
    MAIN: ROUTES.TECNICO_DASHBOARD,
    SUBMENU: {
      DASHBOARD: ROUTES.TECNICO_DASHBOARD,
      CONTROLLO_GESTIONE_COMMESSA: ROUTES.COMMERCIALE_COMMESSE,
    },
  },

  PRODUZIONE: {
    MAIN: ROUTES.PRODUZIONE_DASHBOARD_GLOBAL,
    SUBMENU: {
      CORDINAMENTO: ROUTES.COMMERCIALE_CORDINAMENTO,
      DASHBOARD: ROUTES.PRODUZIONE_DASHBOARD,
      GESTIONE_COMMESSA: ROUTES.PRODUZIONE_GESTIONE_COMMESSA,
    },
  },

  SICUREZZA: {
    MAIN: ROUTES.UI_BUTTONS,
    SUBMENU: {},
  },

  GESTIONE: {
    MAIN: ROUTES.TABLES_USERS,
    SUBMENU: {
      UTENTI: ROUTES.TABLES_USERS,
    },
  },

  AMMINISTRAZIONE: {
    MAIN: ROUTES.CHARTS,
    SUBMENU: {},
  },
};

// Esporta tutto come default per facilitare l'import
export default {
  ROUTES,
  DYNAMIC_ROUTES,
  PROGRAMMATIC_ROUTES,
  MENU_ROUTES,
  buildRoute,
  addQueryParams,
};
