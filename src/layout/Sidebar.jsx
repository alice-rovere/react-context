import { useContext } from "react";
import ThermostaContext from "../Contexts/ThermostContext";

export default function Sidebar() {
  const { handleResetTemperature } = useContext(ThermostaContext);
  return (
    <div
      className="bg-dark text-white min-vh-100 p-3 d-flex flex-column "
      style={{ width: "200px", position: "sticky", top: 0 }}
    >
      {/* Voci del Menu */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <a
            href="#"
            className="nav-link d-flex align-items-center text-white"
            aria-current="page"
          >
            <i className="bi bi-house-door me-3 fs-5"></i>
          </a>
        </li>
        <button
          type="button"
          onClick={handleResetTemperature}
          className="btn btn-secondary"
        >
          Resetta la temperatura
        </button>
      </ul>
    </div>
  );
}
