export default function ThermostatSection() {
  return (
    <section className="container flex-grow-1 d-flex align-items-center justify-content-center">
      <div className="card shadow-sm text-center p-4">
        <h4 className="mb-4">Temperatura attuale:</h4>
        <p className="fs-3">20 °C</p>
        <div className="d-flex justify-content-center gap-2">
          <button type="button" className="btn btn-primary">
            Più
          </button>
          <button type="button" className="btn btn-outline-primary">
            Meno
          </button>
          <button type="button" className="btn btn-secondary">
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
