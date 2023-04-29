import { useSelector } from "react-redux";

import Home from "./Home";
import "./App.css";

function App() {
  const { c } = useSelector((state) => state.custom);

  return (
    <div>
      <h2>{c}</h2>
      <Home />
    </div>
  );
}

export default App;
