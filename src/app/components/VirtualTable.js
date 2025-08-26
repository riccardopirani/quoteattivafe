import React, { useState, useEffect, useRef, useCallback } from "react";
import { Table } from "react-bootstrap";

/**
 * Componente di tabella virtuale per gestire grandi quantità di dati
 * Renderizza solo le righe visibili per migliorare le performance
 */
const VirtualTable = ({
  data,
  columns,
  rowHeight = 50,
  containerHeight = 400,
  renderRow,
  onRowClick,
  className = "",
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerRef, setContainerRef] = useState(null);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 0 });

  // Calcola quante righe sono visibili
  const visibleRowCount = Math.ceil(containerHeight / rowHeight);

  // Calcola l'intervallo di righe visibili
  const startIndex = Math.floor(scrollTop / rowHeight);
  const endIndex = Math.min(startIndex + visibleRowCount + 1, data.length);

  // Aggiorna l'intervallo visibile quando cambia lo scroll
  useEffect(() => {
    setVisibleRange({ start: startIndex, end: endIndex });
  }, [startIndex, endIndex]);

  // Gestisce lo scroll
  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  // Calcola l'offset per le righe non visibili
  const offsetY = startIndex * rowHeight;

  // Riga vuota per mantenere l'altezza totale
  const spacerStyle = {
    height: offsetY,
    width: "100%",
  };

  // Riga vuota per la fine
  const endSpacerStyle = {
    height: (data.length - endIndex) * rowHeight,
    width: "100%",
  };

  return (
    <div
      ref={setContainerRef}
      style={{
        height: containerHeight,
        overflow: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
      className={className}
    >
      {/* Spacer per le righe sopra */}
      <div style={spacerStyle} />

      {/* Tabella con solo le righe visibili */}
      <Table responsive hover style={{ margin: 0 }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} style={column.style}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(startIndex, endIndex).map((item, index) => {
            const actualIndex = startIndex + index;
            return renderRow ? (
              renderRow(item, actualIndex)
            ) : (
              <tr
                key={item.id || actualIndex}
                onClick={() => onRowClick && onRowClick(item, actualIndex)}
                style={{ cursor: onRowClick ? "pointer" : "default" }}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} style={column.style}>
                    {column.render
                      ? column.render(item[column.key], item)
                      : item[column.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Spacer per le righe sotto */}
      <div style={endSpacerStyle} />
    </div>
  );
};

export default VirtualTable;
