import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse, Spinner } from "react-bootstrap";
import { BASE_URL } from "../services/api";
import { MENU_ROUTES } from "../constants/routes";
import "./Sidebar.css";

const permessiPersonalizzati = [
  {
    label: "Commerciale",
    key: "AccessoMagazzino",
    route: MENU_ROUTES.COMMERCIALE.MAIN,
    subMenu: [
      { label: "Riepilogo", to: MENU_ROUTES.COMMERCIALE.SUBMENU.RIEPILOGO },
      { label: "In studio", to: MENU_ROUTES.COMMERCIALE.SUBMENU.IN_STUDIO },
      { label: "Consegnate", to: MENU_ROUTES.COMMERCIALE.SUBMENU.CONSEGNATE },
      { label: "Aggiudicate", to: MENU_ROUTES.COMMERCIALE.SUBMENU.AGGIUDICATE },
      { label: "Perse", to: MENU_ROUTES.COMMERCIALE.SUBMENU.PERSE },
    ],
    menuKey: "commercialeMenuOpen",
    icon: "mdi mdi-crosshairs-gps",
  },
  {
    label: "Tecnico",
    key: "AccessoCantieri",
    route: MENU_ROUTES.TECNICO.MAIN,
    subMenu: [
      { label: "Dashboard", to: MENU_ROUTES.TECNICO.SUBMENU.DASHBOARD },
      {
        label: "Controllo Gestione Commessa",
        to: MENU_ROUTES.TECNICO.SUBMENU.CONTROLLO_GESTIONE_COMMESSA,
      },
    ],
    menuKey: "tecnicoMenuOpen",
    icon: "mdi mdi-format-list-bulleted",
  },
  {
    label: "Produzione",
    key: "AccessoProduzione",
    route: MENU_ROUTES.PRODUZIONE.MAIN,
    subMenu: [
      {
        label: "Cordinamento",
        to: MENU_ROUTES.PRODUZIONE.SUBMENU.CORDINAMENTO,
      },
      { label: "Dashboard", to: MENU_ROUTES.PRODUZIONE.SUBMENU.DASHBOARD },
      {
        label: "Gestione Commessa",
        to: MENU_ROUTES.PRODUZIONE.SUBMENU.GESTIONE_COMMESSA,
      },
    ],
    menuKey: "produzioneMenuOpen",
    icon: "mdi mdi-format-list-bulleted",
  },
  {
    label: "Sicurezza",
    key: "AccessoPreventivi",
    route: MENU_ROUTES.SICUREZZA.MAIN,
    subMenu: [],
    menuKey: "sicurezzaMenuOpen",
    icon: "mdi mdi-table-large",
  },
  {
    label: "Gestione",
    key: "AccessoGestione",
    route: MENU_ROUTES.GESTIONE.MAIN,
    subMenu: [{ label: "Utenti", to: MENU_ROUTES.GESTIONE.SUBMENU.UTENTI }],
    menuKey: "gestioneMenuOpen",
    icon: "mdi mdi-account-box-outline",
  },
  {
    label: "Amministrazione",
    key: "AccessoUtenti",
    route: MENU_ROUTES.AMMINISTRAZIONE.MAIN,
    subMenu: [],
    menuKey: "amministrazioneMenuOpen",
    icon: "mdi mdi-chart-line",
  },
];

class Sidebar extends Component {
  state = {
    user: null,
    menuStates: {},
    loading: true,
    sidebarOpen: false,
  };

  toggleMenuState = (menuKey) => {
    this.setState((prevState) => {
      // Assicurati che tutti i menu siano chiusi tranne quello cliccato
      const newMenuStates = {
        commercialeMenuOpen: false,
        tecnicoMenuOpen: false,
        produzioneMenuOpen: false,
        sicurezzaMenuOpen: false,
        gestioneMenuOpen: false,
        amministrazioneMenuOpen: false,
        [menuKey]: !prevState.menuStates[menuKey],
      };

      return { menuStates: newMenuStates };
    });
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      sidebarOpen: !prevState.sidebarOpen,
    }));
  };

  initializeMenuStates = () => {
    // Inizializza tutti i menu come chiusi
    const initialMenuStates = {
      commercialeMenuOpen: false,
      tecnicoMenuOpen: false,
      produzioneMenuOpen: false,
      sicurezzaMenuOpen: false,
      gestioneMenuOpen: false,
      amministrazioneMenuOpen: false,
    };

    this.setState({ menuStates: initialMenuStates });
  };

  openMenuForCurrentRoute = () => {
    const currentPath = this.props.location.pathname;
    console.log("🔄 Cambio route rilevato:", currentPath);

    // Determina quale menu aprire in base alla route corrente
    let menuToOpen = null;

    if (
      currentPath.startsWith("/gare") ||
      currentPath.startsWith("/commerciale")
    ) {
      menuToOpen = "commercialeMenuOpen";
    } else if (currentPath.startsWith("/tecnico")) {
      menuToOpen = "tecnicoMenuOpen";
    } else if (currentPath.startsWith("/produzione")) {
      menuToOpen = "produzioneMenuOpen";
    } else if (currentPath.startsWith("/ui")) {
      menuToOpen = "sicurezzaMenuOpen";
    } else if (currentPath.startsWith("/tables")) {
      menuToOpen = "gestioneMenuOpen";
    } else if (currentPath.startsWith("/charts")) {
      menuToOpen = "amministrazioneMenuOpen";
    } else if (currentPath === "/" || currentPath === "/dashboard") {
      // Per la dashboard, non aprire nessun menu specifico
      console.log("📍 Dashboard - nessun menu specifico da aprire");
      return;
    }

    if (menuToOpen) {
      console.log(`🎯 Apro menu: ${menuToOpen} per route: ${currentPath}`);
      this.setState((prevState) => ({
        menuStates: {
          ...prevState.menuStates,
          [menuToOpen]: true,
        },
      }));
    } else {
      console.log("❌ Nessun menu trovato per la route:", currentPath);
    }
  };

  async componentDidMount() {
    // Inizializza lo stato dei menu
    this.initializeMenuStates();

    // Aggiungi listener per i cambiamenti di route
    this.unlisten = this.props.history.listen(() => {
      this.openMenuForCurrentRoute();
    });

    const userIdStr = localStorage.getItem("userId");
    const userId = userIdStr ? parseInt(userIdStr) : null;

    if (userId) {
      try {
        const res = await fetch(`${BASE_URL}/RisorseUmane/CaricaRisorse`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ IdUtente: userId }),
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        const currentUser = data.find((u) => u.IdUtente === userId);

        this.setState({
          user: currentUser || null,
          loading: false,
        });

        // Apri il menu appropriato in base alla route corrente
        setTimeout(() => {
          this.openMenuForCurrentRoute();
        }, 100); // Piccolo delay per assicurarsi che lo stato sia aggiornato
      } catch (err) {
        console.error("Errore fetch utente:", err);
        this.setState({ loading: false });
      }
    } else {
      this.setState({ loading: false });
    }
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userId");
    localStorage.removeItem("menuStates");
    this.props.history.push("/login");
  };

  componentWillUnmount() {
    // Rimuovi il listener della history
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    const { user, menuStates, loading, sidebarOpen } = this.state;

    if (loading) {
      return (
        <div className="sidebar-loading text-center mt-5">
          <Spinner animation="border" variant="success" />
        </div>
      );
    }

    const permessi = user || {};

    // Debug: mostra i permessi dell'utente
    console.log("Permessi utente:", permessi);
    console.log("User completo:", user);

    // Se l'utente è Amministratore, mostra un messaggio speciale
    if (user?.Tipo === "Amministratore") {
      console.log(
        "🚀 UTENTE AMMINISTRATORE RILEVATO - Tutti i menu sono abilitati!",
      );
    }

    const imageUrl = user
      ? `${BASE_URL}/utente_${user.IdUtente}.jpg`
      : "https://www.attivacostruzioni.it/wp-content/uploads/2020/07/logo-attiva-costruzioni-menu.jpg";

    return (
      <nav
        className={`sidebar sidebar-offcanvas ${sidebarOpen ? "active" : ""}`}
        id="sidebar"
      >
        <button
          className="sidebar-toggler d-lg-none"
          onClick={this.toggleSidebar}
        >
          <i className="mdi mdi-menu"></i>
        </button>

        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="/">
            <img
              src="https://www.attivacostruzioni.it/wp-content/uploads/2020/07/logo-attiva-costruzioni-menu.jpg"
              alt="logo"
            />
          </a>
        </div>

        <ul className="nav">
          <div className="sidebar-user-info">
            <div
              className="sidebar-user-img"
              style={{
                border: "3px solid #00aa5e",
                borderRadius: "50%",
                padding: "5px",
              }}
            >
              <img
                src={imageUrl}
                onError={(e) =>
                  (e.target.src =
                    "https://www.attivacostruzioni.it/wp-content/uploads/2020/07/logo-attiva-costruzioni-menu.jpg")
                }
                alt="utente"
                style={{ borderRadius: "50%", width: 50, height: 50 }}
              />
            </div>
            <p
              className="sidebar-user-label"
              style={{ fontSize: 18, marginTop: 10 }}
            >
              Utente:
            </p>
            <p
              className="sidebar-user-name"
              style={{
                color: "green",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {`${user?.Nome || ""} ${user?.Cognome || ""}`.trim()}
            </p>
          </div>

          {permessiPersonalizzati.map(
            ({ label, key, route, subMenu, menuKey, icon }) => {
              // Se l'utente è Amministratore, abilita tutti i menu
              const isAdmin = user?.Tipo === "Amministratore";
              const hasPermission = isAdmin || permessi[key];

              console.log(
                `Menu ${label}: key=${key}, permesso=${permessi[key]}, isAdmin=${isAdmin}, hasPermission=${hasPermission}`,
              );

              return hasPermission ? (
                <li
                  key={key}
                  className={
                    this.isPathActive(route) ? "nav-item active" : "nav-item"
                  }
                >
                  {subMenu.length > 0 ? (
                    <Link
                      to={route}
                      className={
                        menuStates[menuKey]
                          ? "nav-link menu-expanded green-hover"
                          : "nav-link green-hover"
                      }
                      onClick={(e) => {
                        // Permette il redirect + toggle del menu
                        e.preventDefault(); // evita doppia navigazione istantanea
                        this.toggleMenuState(menuKey);
                        const cleanLabel = label.replace(/^Accesso\s+/i, "");
                        localStorage.setItem("selectedMenuLabel", cleanLabel);
                        window.dispatchEvent(
                          new Event("selectedMenuLabelChanged"),
                        );
                        this.props.history.push(route); // naviga esplicitamente
                      }}
                    >
                      <i className={`${icon} menu-icon`}></i>
                      <span className="menu-title text-green">{label}</span>
                      <i className="menu-arrow"></i>
                    </Link>
                  ) : (
                    <Link className="nav-link green-hover" to={route}>
                      <i className={`${icon} menu-icon`}></i>
                      <span className="menu-title text-green">{label}</span>
                    </Link>
                  )}
                  {subMenu.length > 0 && (
                    <Collapse in={menuStates[menuKey]}>
                      <ul className="nav flex-column sub-menu">
                        {subMenu.map((item, index) => (
                          <li className="nav-item" key={index}>
                            <Link className="nav-link green-hover" to={item.to}>
                              <span className="menu-title text-green">
                                {item.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  )}
                </li>
              ) : null;
            },
          )}

          <li className="nav-item mt-4">
            <button className="btn btn-sm w-100" onClick={this.handleLogout}>
              <img
                src={require("../../assets/images/logout.jpg")}
                alt="logout"
                width="70%"
              />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Sidebar);
