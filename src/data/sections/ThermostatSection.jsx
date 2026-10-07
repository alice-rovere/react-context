import { useContext } from "react";
import ThermostaContext from "../../Contexts/ThermostContext";

export default function ThermostatSection() {
  const {
    temperature,
    handleAddTemperature,
    handleResetTemperature,
    handleSubTemperature,
  } = useContext(ThermostaContext);
  return (
    <section className="container flex-grow-1 d-flex align-items-center justify-content-center">
      <div className="card shadow-sm text-center p-4">
        <h4 className="mb-4">Temperatura attuale:</h4>
        <p className="fs-3">{temperature} °C</p>
        <div className="d-flex justify-content-center gap-2">
          <button
            type="button"
            onClick={handleAddTemperature}
            className="btn btn-primary"
          >
            Più
          </button>
          <button
            type="button"
            onClick={handleSubTemperature}
            className="btn btn-outline-primary"
          >
            Meno
          </button>
          <button
            type="button"
            onClick={handleResetTemperature}
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
