# Sistema Centralizzato delle Route

Questo file contiene tutte le costanti per le route dell'applicazione, centralizzate in un unico punto per facilitare la manutenzione e evitare errori.

## Come Usare le Costanti

### 1. Import delle Costanti
```javascript
import { ROUTES, MENU_ROUTES, PROGRAMMATIC_ROUTES } from "../constants/routes";
```

### 2. Uso nelle Route
```javascript
// Prima (hardcoded)
<Route path="/login" component={Login} />

// Dopo (con costanti)
<Route path={ROUTES.LOGIN} component={Login} />
```

### 3. Uso nella Navigazione
```javascript
// Prima (hardcoded)
this.props.history.push("/dashboard");

// Dopo (con costanti)
this.props.history.push(ROUTES.DASHBOARD);
```

### 4. Uso nei Link
```javascript
// Prima (hardcoded)
<Link to="/commerciale/commesse">Commesse</Link>

// Dopo (con costanti)
<Link to={ROUTES.COMMERCIALE_COMMESSE}>Commesse</Link>
```

### 5. Uso nei Redirect
```javascript
// Prima (hardcoded)
window.location.href = "/commerciale/commesse";

// Dopo (con costanti)
window.location.href = ROUTES.COMMERCIALE_COMMESSE;
```

## Struttura delle Costanti

### ROUTES
Contiene tutte le route base dell'applicazione:
- `ROUTES.LOGIN` → `/login`
- `ROUTES.DASHBOARD` → `/dashboard`
- `ROUTES.COMMERCIALE_COMMESSE` → `/commerciale/commesse`

### MENU_ROUTES
Contiene le route organizzate per il menu laterale:
- `MENU_ROUTES.COMMERCIALE.MAIN` → Route principale del menu Commerciale
- `MENU_ROUTES.COMMERCIALE.SUBMENU.IN_STUDIO` → Route del sottomenu "In studio"

### PROGRAMMATIC_ROUTES
Contiene le route per la navigazione programmatica:
- `PROGRAMMATIC_ROUTES.AFTER_LOGIN` → Route dopo il login
- `PROGRAMMATIC_ROUTES.AFTER_CREATE_COMMESSA` → Route dopo la creazione di una commessa

## Helper Functions

### buildRoute(baseRoute, params)
Costruisce route dinamiche sostituendo i parametri:
```javascript
const userProfileRoute = buildRoute(DYNAMIC_ROUTES.USER_PROFILE, { id: 123 });
// Risultato: /user/123/profile
```

### addQueryParams(route, queryParams)
Aggiunge query parameters a una route:
```javascript
const routeWithParams = addQueryParams(ROUTES.UI_BUTTONS, { menu: 'studio' });
// Risultato: /ui/buttons?menu=studio
```

## Vantaggi del Sistema Centralizzato

1. **Manutenibilità**: Tutte le route sono in un unico file
2. **Consistenza**: Evita errori di digitazione nei path
3. **Refactoring**: Cambiare un path richiede una sola modifica
4. **Type Safety**: Le costanti sono facilmente tracciabili
5. **Documentazione**: Il file serve come documentazione delle route disponibili

## Esempi di Uso

### Nel Componente AppRoutes
```javascript
import { ROUTES } from "./constants/routes";

<Route path={ROUTES.LOGIN} component={Login} />
<Route path={ROUTES.DASHBOARD} component={Dashboard} />
```

### Nella Sidebar
```javascript
import { MENU_ROUTES } from "../constants/routes";

const menuConfig = {
  route: MENU_ROUTES.COMMERCIALE.MAIN,
  subMenu: [
    { to: MENU_ROUTES.COMMERCIALE.SUBMENU.IN_STUDIO }
  ]
};
```

### Nella Navigazione Programmatica
```javascript
import { PROGRAMMATIC_ROUTES } from "../constants/routes";

// Dopo il login
this.props.history.push(PROGRAMMATIC_ROUTES.AFTER_LOGIN);

// Dopo la creazione di una commessa
window.location.href = PROGRAMMATIC_ROUTES.AFTER_CREATE_COMMESSA;
```
