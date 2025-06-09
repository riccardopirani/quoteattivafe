import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse, Spinner } from "react-bootstrap";
import { BASE_URL } from "../services/api";
import "./Sidebar.css";

const permessiPersonalizzati = [
  {
    label: "Commerciale",
    key: "AccessoMagazzino",
    route: "/gare/upcoming",
    subMenu: [
      { label: "Riepilogo", to: "/gare/upcoming" },
      { label: "In studio", to: "/basic-ui/buttons?menu=studio" },
      { label: "Consegnate", to: "/basic-ui/buttons?menu=consegnate" },
      { label: "Aggiudicate", to: "/basic-ui/buttons?menu=aggiudicate" },
      { label: "Perse", to: "/basic-ui/buttons?menu=perse" },
    ],
    menuKey: "commercialeMenuOpen",
    icon: "mdi mdi-crosshairs-gps",
  },
  {
    label: "Tecnico",
    key: "AccessoCantieri",
    route: "/form-elements",
    subMenu: [
      { label: "Dashboard", to: "/tecnico/dashboard" },
      { label: "Controllo Gestione Commessa", to: "/gestione/commesse" },
    ],
    menuKey: "tecnicoMenuOpen",
    icon: "mdi mdi-format-list-bulleted",
  },
  {
    label: "Produzione",
    key: "AccessoArticoli",
    route: "/produzione/dashboard",
    subMenu: [
      { label: "Cordinamento", to: "/produzione/cordinamento" },
      { label: "Dashboard", to: "/produzione/dashboard" },
      { label: "Gestione Commessa", to: "/produzione/dashboard" },
    ],
    menuKey: "ProduzioneMenuOpen",
    icon: "mdi mdi-format-list-bulleted",
  },
  {
    label: "Sicurezza",
    key: "AccessoPreventivi",
    route: "/form-elements",
    subMenu: [],
    menuKey: "sicurezzaMenuOpen",
    icon: "mdi mdi-table-large",
  },
  {
    label: "Gestione",
    key: "AccessoArticoli",
    route: "/form-elements",
    subMenu: [],
    menuKey: "gestioneMenuOpen",
    icon: "mdi mdi-account-box-outline",
  },
  {
    label: "Amministrazione",
    key: "AccessoUtenti",
    route: "/charts",
    subMenu: [],
    menuKey: "amministrazioneMenuOpen",
    icon: "mdi mdi-chart-line",
  },
  {
    label: "Anagrafica",
    key: "AccessoArticoli",
    route: "/form-elements",
    subMenu: [{ label: "Utenti", to: "/basic-ui/newsuer" }],
    menuKey: "gestioneMenuOpen",
    icon: "mdi mdi-account-box-outline",
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
      const newMenuStates = {
        ...Object.keys(prevState.menuStates).reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {}),
        [menuKey]: !prevState.menuStates[menuKey],
      };
      localStorage.setItem("menuStates", JSON.stringify(newMenuStates));
      return { menuStates: newMenuStates };
    });
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      sidebarOpen: !prevState.sidebarOpen,
    }));
  };

  async componentDidMount() {
    // Ripristina stato dei menu da localStorage
    const storedMenuStates = localStorage.getItem("menuStates");
    if (storedMenuStates) {
      this.setState({ menuStates: JSON.parse(storedMenuStates) });
    }

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
            ({ label, key, route, subMenu, menuKey, icon }) =>
              permessi[key] ? (
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
                          new Event("selectedMenuLabelChanged")
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
              ) : null
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
