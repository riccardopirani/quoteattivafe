import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLabel: localStorage.getItem("selectedMenuLabel") || "Commerciale",
    };
  }
  componentDidMount() {
    window.addEventListener("selectedMenuLabelChanged", this.handleLabelChange);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "selectedMenuLabelChanged",
      this.handleLabelChange,
    );
  }

  handleLabelChange = () => {
    this.setState({
      selectedLabel: localStorage.getItem("selectedMenuLabel") || "Commerciale",
    });
  };

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
            {this.state.selectedLabel}
          </p>

          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={this.props.toggleOffcanvas}
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
