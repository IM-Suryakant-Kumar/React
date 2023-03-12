import Greater from "./components/Greater";
import Counter from "./components/Counter";
import List from "./components/List";
import "./App.css";
// function key word => uppercase
// props
function App(props) {
  // message={"Lecture 1"}
  return (
    <>
      <h1>React Tutorial {props.message}</h1> {/* React Tutorial Lecture 1 */}

      <Greater name ={"sujeet"}></Greater> {/* Greater sujeet */}

      <Greater name ={"sandip"}></Greater> {/* Greater sandip */}

      <Counter></Counter>

      <List></List>
    </>
  );
}

export default App;
