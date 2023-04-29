import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.custom.c);

  const increment = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };
  const incrementByValue = () => {
    dispatch({
      type: "incrementByValue",
      payload: 20,
    });
  };

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementByValue}>Increment By 20</button>
    </div>
  );
};

export default Home;
