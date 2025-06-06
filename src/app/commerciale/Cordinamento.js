import React, { useState, useEffect, useMemo } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CantiereService from "../services/cantiere";
import html2canvas from "html2canvas";
import { useRef } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/it";
import "sweetalert2/dist/sweetalert2.min.css";
moment.locale("it");

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "center",
};

const redCellStyle = {
  ...cellStyle,
  backgroundColor: "red",
};

const boldOrange = {
  fontWeight: "bold",
  color: "#ffa500",
};

const sectionTitleStyle = {
  backgroundColor: "#e6f2e6",
  padding: "6px 8px",
  fontWeight: "bold",
  borderBottom: "1px solid #ccc",
};

const Cordinamento = () => {
  const giorni = [
    "lun. 26 maggio",
    "mar. 27 maggio",
    "mer. 28 maggio",
    "gio. 29 maggio",
    "ven. 30 maggio",
    "sab. 31 maggio",
    "dom. 1 giugno",
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      {/* Tabs */}
      <div style={{ display: "flex", marginBottom: 10 }}>
        <button style={{ marginRight: 10, padding: "6px 12px" }}>
          Organizzazione cantieri
        </button>
        <button disabled style={{ padding: "6px 12px" }}>
          Riunione di coordinamento
        </button>
      </div>

      {/* Sezione Maestranze */}
      <div style={{ marginTop: 20 }}>
        <div style={sectionTitleStyle}>ORGANIZZAZIONE MAESTRANZE</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={cellStyle}>Operatore</th>
              {giorni.map((day, idx) => (
                <th key={idx} style={cellStyle}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>Carmelo</td>
              <td style={cellStyle}>
                <span style={boldOrange}>Cod. 361 Bunge</span>
              </td>
              <td style={cellStyle}>Cod. 362 Pir</td>
              <td style={cellStyle}>Cod. 361 Bunge</td>
              <td style={cellStyle}>Cod. 362 Pir</td>
              <td style={cellStyle}>Cod. 362 Pir</td>
              <td style={redCellStyle}></td>
              <td style={redCellStyle}></td>
            </tr>
            <tr>
              <td style={cellStyle}>Raffaele</td>
              <td style={cellStyle}>Cod. 361 Bunge</td>
              <td style={cellStyle}>Cod. 361 Bunge</td>
              <td style={cellStyle}>Cod. 361 Bunge</td>
              <td style={cellStyle}>
                <span style={boldOrange}>Cod. 362 Pir</span>
              </td>
              <td style={cellStyle}>Cod. 362 Pir</td>
              <td style={redCellStyle}></td>
              <td style={redCellStyle}></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sezione Mezzi */}
      <div style={{ marginTop: 40 }}>
        <div style={sectionTitleStyle}>ORGANIZZAZIONE MEZZI</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={cellStyle}>Operatore</th>
              {giorni.map((day, idx) => (
                <th key={idx} style={cellStyle}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>Daily 1</td>
              {[...Array(5)].map((_, i) => (
                <td key={i} style={cellStyle}>
                  Operatore 1
                </td>
              ))}
              <td style={redCellStyle}></td>
              <td style={redCellStyle}></td>
            </tr>
            <tr>
              <td style={cellStyle}>Kangoo 1</td>
              {[...Array(5)].map((_, i) => (
                <td key={i} style={cellStyle}>
                  Operatore 2
                </td>
              ))}
              <td style={redCellStyle}></td>
              <td style={redCellStyle}></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sezione Attrezzi */}
      <div style={{ marginTop: 40 }}>
        <div style={sectionTitleStyle}>ORGANIZZAZIONE ATTREZZI</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={cellStyle}>Operatore</th>
              {giorni.map((day, idx) => (
                <th key={idx} style={cellStyle}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>TRAPANO HILTY TE500</td>
              {[...Array(5)].map((_, i) => (
                <td key={i} style={cellStyle}>
                  Operatore 1
                </td>
              ))}
              <td style={redCellStyle}></td>
              <td style={redCellStyle}></td>
            </tr>
            <tr>
              <td style={cellStyle}>MARTELLO MAKITA</td>
              {[...Array(5)].map((_, i) => (
                <td key={i} style={cellStyle}>
                  Operatore 2
                </td>
              ))}
              <td style={redCellStyle}></td>
              <td style={redCellStyle}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cordinamento;
