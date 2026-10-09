import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
// creazone context
const ThermostaContext = createContext();
//creazione provider
export default function ThermostatContextProvider({ children }) {
  const initialTemperature = 20;

  const [temperature, setTemperature] = useState(initialTemperature);
  function handleAddTemperature() {
    setTemperature((actual) => (actual < 28 ? actual + 1 : actual));
  }

  function handleSubTemperature() {
    setTemperature((actual) => (actual > 16 ? actual - 1 : actual));
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
      {children}
    </ThermostaContext>
  );
}
//creazione custom hook
//eslint-disable-next-line
export function useThermostat() {
  const context = useContext(ThermostaContext);
  if (!context) {
    throw new Error(
      "Attenzione, il componente deve essere figlio di Thermostat Context per usare lo stato globale!!!",
    );
  }
  return context;
}
