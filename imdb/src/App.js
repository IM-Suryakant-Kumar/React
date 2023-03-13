import "./App.css";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Movies from "./component/Movies";
import Pagination from "./component/Pagination";

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
