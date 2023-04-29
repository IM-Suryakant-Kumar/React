import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addByValue = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addByValue}>Add By 10</button>
    </>
  );
}

export default App;
