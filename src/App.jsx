import { useState } from "react";
import ThermostaContext from "./Contexts/ThermostContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Sidebar from "./layout/Sidebar";
const initialTemperature = 20;
function App() {
  const [temperature, setTemperature] = useState(initialTemperature);
  function handleAddTemperature() {
    setTemperature((actual) => actual + 1);
  }
  function handleSubTemperature() {
    setTemperature((actual) => actual - 1);
  }
  function handleResetTemperature() {
    setTemperature(initialTemperature);
  }

  return (
    <ThermostaContext
      value={{
        temperature,
        handleAddTemperature,
        handleResetTemperature,
        handleSubTemperature,
        initialTemperature,
      }}
    >
      <div className="d-flex min-vh-100">
        <Sidebar />
        <div className="d-flex flex-column flex-grow-1 min-vh-100 bg-light">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    </ThermostaContext>
  );
}

export default App;
