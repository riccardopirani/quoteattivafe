import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img
              src={
                "https://www.attivacostruzioni.it/wp-content/uploads/2020/07/logo-attiva-costruzioni-menu.jpg"
              }
              alt="logo"
            />
          </a>
        </div>
        <ul className="nav">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            {/* Icona utente */}
            <div
              style={{
                border: "2px solid green",
                borderRadius: "30%",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <img
                src="https://img.freepik.com/vettori-gratuito/circolo-blu-con-utente-bianco_78370-4707.jpg?semt=ais_hybrid&w=740"
                width={50}
                height={50}
              />
            </div>

            {/* Testo "Utente:" */}
            <p style={{ fontSize: "24px", margin: 0 }}>Utente:</p>

            {/* Nome utente */}
            <p style={{ color: "green", marginTop: "8px" }}>Paolo Alberto</p>
          </div>

          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title" style={{ color: "grey" }}>
                <Trans>Dashboard</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/gare/upcoming")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.basicUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("basicUiMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title" style={{ color: "grey" }}>
                <Trans>Commerciale</Trans>
              </span>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className="nav-link" to="/gare/upcoming">
                    <span className="menu-title" style={{ color: "grey" }}>
                      <Trans>Riepilogo</Trans>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/basic-ui/buttons?menu=studio">
                    <span className="menu-title" style={{ color: "grey" }}>
                      <Trans>In studio</Trans>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/basic-ui/buttons?menu=consegnate"
                  >
                    <span className="menu-title" style={{ color: "grey" }}>
                      <Trans>Consegnate</Trans>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/basic-ui/buttons?menu=aggiudicate"
                  >
                    <span className="menu-title" style={{ color: "grey" }}>
                      <Trans>Aggiudicate</Trans>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/basic-ui/buttons?menu=perse">
                    <span className="menu-title" style={{ color: "grey" }}>
                      <Trans>Perse</Trans>
                    </span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/form-elements")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.formElementsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("formElementsMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title" style={{ color: "grey" }}>
                <Trans>Tecnico</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.formElementsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/tecnico/dashboard")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/tecnico/dashboard"
                  >
                    <span className="menu-title" style={{ color: "grey" }}>
                      <Trans>Dashboard</Trans>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/gestione/commesse")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/gestione/commesse"
                  >
                    <span className="menu-title" style={{ color: "grey" }}>
                      <Trans>Controllo Gestione Commessa</Trans>
                    </span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          {/* <li
            className={
              this.isPathActive("/tables") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.tablesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("tablesMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title">
                <span className="menu-title" style={{ color: "grey" }}>
                  <Trans>Sicurezza</Trans>
                </span>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.tablesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/tables/basic-table")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/tables/basic-table"
                  >
                    <span className="menu-title" style={{ color: "grey" }}>
                      <Trans>Amministrazione</Trans>
                    </span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/icons") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.iconsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("iconsMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-account-box-outline menu-icon"></i>
              <span className="menu-title" style={{ color: "grey" }}>
                <Trans>Gestione</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.iconsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/icons/mdi")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/icons/mdi"
                  >
                    <span className="menu-title" style={{ color: "grey" }}>
                      <Trans>Gestione</Trans>
                    </span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/charts") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.chartsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("chartsMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title" style={{ color: "grey" }}>
                <Trans>Amministrazione</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.chartsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/charts/chart-js")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/charts/chart-js"
                  >
                    Chart Js
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>*/}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
