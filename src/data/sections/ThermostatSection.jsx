import { useThermostat } from "../../Contexts/ThermostContext";

export default function ThermostatSection() {
  const {
    temperature,
    handleAddTemperature,
    handleResetTemperature,
    handleSubTemperature,
  } = useThermostat();
  const label =
    temperature < 22 ? "Freddo" : temperature < 25 ? "Comfort" : "Caldo";
  return (
    <section className="container flex-grow-1 d-flex align-items-center justify-content-center">
      <div className="card shadow-sm text-center p-4">
        <h4 className="mb-4">Temperatura attuale:</h4>
        <p className="fs-3">{temperature} °C</p>
        <p>{label}</p>
        <div className="d-flex justify-content-center gap-2">
          <button
            type="button"
            onClick={handleAddTemperature}
            className={`btn btn-primary ${temperature < 28 ? "" : "disabled"}`}
          >
            Più
          </button>
          <button
            type="button"
            onClick={handleSubTemperature}
            className={`btn btn-outline-primary ${temperature > 16 ? "" : "disabled"}`}
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
