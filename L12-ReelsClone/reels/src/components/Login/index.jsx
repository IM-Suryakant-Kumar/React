import Crousel from "./Crousel";
import LoginForm from "./LoginForm";
import "./login.css";

function index() {
   return (
      <div className="login-cont">
         <Crousel></Crousel>
         <LoginForm className="login-form"></LoginForm>
      </div>
   );
}

export default index;
