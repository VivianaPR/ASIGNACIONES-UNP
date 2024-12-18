import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import BusquedaInput from "./components/Buscador";
import CustomModal from "./components/Modal";
import Lottie from "lottie-react";
import logo from "./assets/logo.png";
import noData from "./assets/animations/noData.json";
import noInfo from "./assets/animations/noInfo.json";
import "./styles/Tabla.css";
import { FaGripLines } from "react-icons/fa";

interface Column {
  key: string;
  label: string;
  hasModal?: boolean;
  renderComponent?: (row: Record<string, any>) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: Array<Record<string, any>>;
  renderModalContent?: (row: Record<string, any>, column: Column, onHide: () => void) => React.ReactNode;
  totalDias?: number;
  subtitle: string;
  items: string;
  extraInput?: React.ReactNode;
  dateColumnKey?: string;
  isShared?: boolean;
  renderAlertContent?: (row: Record<string, any>, column: Column) => void | null;
}


const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const BootstrapTable: React.FC<TableProps> = ({
  columns,
  data,
  renderModalContent,
  renderAlertContent,
  totalDias,
  subtitle,
  extraInput,
  items,
  dateColumnKey,
  isShared,
}) => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [modalData, setModalData] = useState<{
    row: Record<string, any>;
    column: Column;
  } | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [visibleData, setVisibleData] = useState<number>(15);
  const [hasMoreData, setHasMoreData] = useState<boolean>(data.length > 15);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const currentYear = getCurrentYear();

  useEffect(() => {
    setShowMessage(data.length < 1);
    setVisibleData(15);
    setHasMoreData(data.length > 15);
  }, [searchTerm, data.length]);

  const filteredData = data
    .slice()
    .sort((a, b) =>
      dateColumnKey
        ? new Date(b[dateColumnKey]).getTime() -
        new Date(a[dateColumnKey]).getTime()
        : 0
    )
    .filter((row) =>
      columns.some((column) =>
        normalizeText(String(row[column.key])).includes(
          normalizeText(searchTerm)
        )
      )
    );

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 50 && hasMoreData) {
      setVisibleData((prev) => {
        const newVisibleData = prev + 5;
        if (newVisibleData >= filteredData.length) {
          setHasMoreData(false);
        }
        return Math.min(newVisibleData, filteredData.length);
      });
    }
  };

  const handleCellClick = (column: Column, row: Record<string, any>) => {
    if (column.hasModal && renderModalContent) {
      if (renderAlertContent) {
        const actionResult = renderAlertContent(row, column);
        if (actionResult === null) return;
      }
      setModalData({ row, column });
      setShowModal(true);
    }
  };

  const getBackgroundAndTextColor = (diasHabiles: number) => {
    if (totalDias) {
      const porcentaje = (diasHabiles / totalDias) * 100;
      if (porcentaje <= 25)
        return { backgroundColor: "#3AB34A", color: "#FFFFFF" };
      if (porcentaje <= 50)
        return { backgroundColor: "#F8EB10", color: "#000000" };
      if (porcentaje <= 75)
        return { backgroundColor: "#F79122", color: "#000000" };
      return { backgroundColor: "#E91720", color: "#FFFFFF" };
    }
    return { backgroundColor: "transparent", color: "inherit" };
  };

  const renderTable = (tableData: Array<Record<string, any>>) => {

    return (
      <div className="table_container">
        <div className="table-scroll" onScroll={handleScroll}>
          <Table striped hover>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>

              {tableData.slice(0, visibleData).map((row, rowIndex) => (

                <React.Fragment key={rowIndex}>
                  <tr>
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        onClick={() => handleCellClick(column, row)}
                        style={{
                          cursor: column.hasModal ? "pointer" : "default",
                        }}
                        className={column.hasModal ? "cell-with-modal" : ""}
                      >
                        {column.key === "diasHabiles" ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{
                                padding: "8px",
                                borderRadius: "100px",
                                width: "40px",
                                backgroundColor: getBackgroundAndTextColor(
                                  row.diasHabiles
                                ).backgroundColor,
                                color: getBackgroundAndTextColor(
                                  row.diasHabiles
                                ).color,
                              }}
                            >
                              <span>{row.diasHabiles}</span>
                            </div>
                          </div>
                        ) : column.renderComponent ? (
                          column.renderComponent(row)
                        ) : (
                          row[column.key]
                        )}
                      </td>
                    ))}
                  </tr>
                  {isShared && row.estadoRegistro === "en_gestion" && !filteredData.some(r => r.estadoRegistro === "en_gestion" && filteredData.indexOf(r) > rowIndex) && (
                    <tr>
                      <td colSpan={columns.length} className="text-center" style={{ padding: '0 2rem 0 2rem' }}>
                        <div style={{
                          minHeight: 20,
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontWeight: '600',
                          color: '#303D50'
                        }}>
                          <FaGripLines style={{ color: '#a1a1a1' }} />
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>

              ))}

              {hasMoreData && (
                <tr>
                  <td colSpan={columns.length} className="text-center">
                    Cargando más datos...
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        <div className="d-flex justify-content-between">
          <div className="data-unp">
            {currentYear} • Unidad Nacional de Protección — UNP
          </div>
          <div className="data-count">
            Mostrando {Math.min(visibleData, tableData.length)} de{" "}
            {tableData.length} elementos
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="unp-row">
        <div className="title-container">
          <div className="logo-subtitle-container">
            <div className="red-section">1</div>
            <img className="imgLogo" src={logo} alt="logo" />
          </div>
          <div className="subtitle-container">
            <span className="subtitle-logo">{subtitle}</span>
            <span>{items}</span>
          </div>
        </div>
        {data.length > 0 && (
          <div className="inputs-container">
            <BusquedaInput onSearch={setSearchTerm} />
            <div className="input-extra-container">{extraInput}</div>
          </div>
        )}
      </div>

      {showMessage ? (
        <div className="animation-container">
          <div style={{ width: 150, height: 150 }}>
            <Lottie animationData={noData} loop={true} />
          </div>
          <span className="lottie">
            No existen registros pendientes por tramitar
          </span>
        </div>
      ) : searchTerm && filteredData.length === 0 ? (
        <div className="animation-container">
          <div style={{ width: 150, height: 150 }}>
            <Lottie animationData={noInfo} loop={true} />
          </div>
          <span className="lottie">
            No se encontró registro con el criterio de búsqueda definido
          </span>
        </div>
      ) : (
        renderTable(filteredData)
      )}

      {modalData && renderModalContent && (
        <CustomModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title={`${modalData.column.label}`}
        >
          {renderModalContent(modalData.row, modalData.column, () =>
            setShowModal(false)
          )}
        </CustomModal>
      )}
    </>
  );
};

export default BootstrapTable;