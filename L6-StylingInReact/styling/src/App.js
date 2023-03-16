import logo from "./logo.svg";
import "./App.css";
import Component from "./components/Component";
import Button from "./components/Button";
import StyledComponent from "./components/StyledComponent";
import SheetComponent from "./components/SheetComponent";

function App() {
   return (
      <div className="App">
         <Component></Component>
         <Button></Button>
         <StyledComponent></StyledComponent>
         <SheetComponent isStyled={true}></SheetComponent>
      </div>
   );
}

export default App;
