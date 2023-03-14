import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";

function App() {
   return (
      <>
         {/* <h1>Hello React 🧡</h1> */}

         <NavBar></NavBar>
         <Banner></Banner>
         <Movies></Movies>
         <Pagination></Pagination>
         {/*
          Navbar
          Banner
          Movies
          Pagination 
            */}
      </>
   );
}

export default App;
