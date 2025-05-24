import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse, Spinner } from "react-bootstrap";
import { Trans } from "react-i18next";
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
    label: " Tecnico",
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
    label: "Sicurezza",
    key: "AccessoPreventivi",
    route: "/form-elements",
    subMenu: [
      { label: "Dashboard", to: "/tecnico/dashboard" },
      { label: "Controllo Gestione Commessa", to: "/gestione/commesse" },
    ],
    menuKey: "sicurezzaMenuOpen",
    icon: "mdi mdi-table-large",
  },
  {
    label: "Gestione",
    key: "AccessoArticoli",
    route: "/form-elements",
    subMenu: [{ label: "Utenti", to: "/basic-ui/newsuer" }],
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
];

class Sidebar extends Component {
  state = {
    user: null,
    menuStates: {},
    loading: true,
    sidebarOpen: false, // Track whether the sidebar is open or closed
  };

  // Toggle the state of the menu
  toggleMenuState(menuState) {
    this.setState((prevState) => ({
      menuStates: {
        ...Object.keys(prevState.menuStates).reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {}),
        [menuState]: !prevState.menuStates[menuState],
      },
    }));
  }

  // Toggle the sidebar visibility on mobile
  toggleSidebar = () => {
    this.setState((prevState) => ({
      sidebarOpen: !prevState.sidebarOpen,
    }));
  };

  async componentDidMount() {
    this.onRouteChanged();
    const userId = localStorage.getItem("userId");
    if (userId) {
      try {
        const res = await fetch(`${BASE_URL}/RisorseUmane/CaricaRisorse`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ IdUtente: parseInt(userId) }),
        });
        const data = await res.json();
        this.setState({
          user: data.find((u) => u.IdUtente === parseInt(userId)),
          loading: false,
        });
      } catch (err) {
        console.error("Errore fetch utente:", err);
        this.setState({ loading: false });
      }
    } else {
      this.setState({ loading: false });
    }

    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body && body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body && body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    const sidebar = document.querySelector("#sidebar");
    if (sidebar) {
      sidebar.classList.remove("active");
    }
    this.setState({ menuStates: {} });
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userId");
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
        {/* Add a button for mobile toggle */}
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
          {/* User info */}
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
                  (e.target.src = "https://via.placeholder.com/50")
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

          {/* Sidebar Menu */}
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
                    <div
                      className={
                        menuStates[menuKey]
                          ? "nav-link menu-expanded green-hover"
                          : "nav-link green-hover"
                      }
                      onClick={() => {
                        this.toggleMenuState(menuKey);
                        const cleanLabel = label.replace(/^Accesso\s+/i, ""); // Rimuove "Accesso " all'inizio
                        localStorage.setItem("selectedMenuLabel", cleanLabel);
                        window.dispatchEvent(
                          new Event("selectedMenuLabelChanged"),
                        );
                      }}
                    >
                      <i className={`${icon} menu-icon`}></i>
                      <span className="menu-title text-green">{label}</span>
                      <i className="menu-arrow"></i>
                    </div>
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
              ) : null,
          )}

          <li className="nav-item mt-4">
            <button className="btn btn-sm w-100" onClick={this.handleLogout}>
              <img
                src={require("../../assets/images/logout.jpg")}
                alt="profile"
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
