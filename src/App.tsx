import { CountDown } from "./countdown";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CountDown minutes={0} seconds={10} />
    </div>
  );
}
