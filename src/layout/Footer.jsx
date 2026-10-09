import { useThermostat } from "../Contexts/ThermostContext";

export default function Footer() {
  const { temperature } = useThermostat();
  return (
    <footer className="bg-body-secondary px-5 text-center">
      <p className="my-auto py-2">Impostati {temperature} °C</p>
    </footer>
  );
}
