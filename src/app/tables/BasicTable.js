import React, { Component } from "react";

class BasicTable extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h2 style={{ color: "#2e7d32", fontWeight: "600" }}>
            Pagina in costruzione
          </h2>
          <p style={{ color: "#555", fontSize: "16px", marginTop: "10px" }}>
            Stiamo lavorando per offrirti presto questa funzionalità.
          </p>
        </div>
      </div>
    );
  }
}

export default BasicTable;
