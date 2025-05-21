import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }
  toggleRightSidebar() {
    document.querySelector(".right-sidebar").classList.toggle("open");
  }
  render() {
    return (
      <nav
        className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row"
        style={{ backgroundColor: "#12b34c" }}
      >
        <div
          className="navbar-menu-wrapper d-flex align-items-center justify-content-between"
          style={{ backgroundColor: "#12b34c" }}
        >
          <a
            className="navbar-brand brand-logo-mini align-self-center d-lg-none"
            href="!#"
            onClick={(evt) => evt.preventDefault()}
          >
            <img
              src={require("../../assets/images/logo-mini.svg")}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            onClick={() => document.body.classList.toggle("sidebar-icon-only")}
          >
            <i className="mdi mdi-menu"></i>
          </button>
          <p
            style={{
              color: "white",
              fontSize: 24,
              marginRight: "90%",
              marginTop: 10,
            }}
          >
            {" "}
            Commerciale
          </p>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={this.toggleOffcanvas}
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
