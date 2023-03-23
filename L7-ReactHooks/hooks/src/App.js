import UseStateExample from "./components/UseStateExample";
import UseReducerExample from "./components/UseReducerExample";
import UseEffectExample from "./components/UseEffectExample";
import UseStateEdgeCase from "./components/UseStateEdgeCase";
import "./App.css";
import UseRefExample from "./components/UseRefExample";

function App() {
   return (
      <>
         <h1>Hooks Class</h1>
         {/* <UseStateExample></UseStateExample> */}
         {/* <UseReducerExample></UseReducerExample> */}
         {/* <UseEffectExample></UseEffectExample> */}
         {/* <UseRefExample></UseRefExample> */}
         <UseStateEdgeCase></UseStateEdgeCase>
      </>
   );
}

export default App;
