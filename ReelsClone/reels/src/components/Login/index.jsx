import { Grid } from "@mui/material";
import Crousel from "./Crousel";
import LoginForm from "./LoginForm";
import "./login.css";

function index() {
   return (
      <>
         {/* <h2>Login Page</h2> */}
         <Grid container>
            <Grid xs={12} sm={7}>
               <Crousel></Crousel>
            </Grid>
            <Grid xs={12} sm={4}>
               <LoginForm></LoginForm>
            </Grid>
         </Grid>
      </>
   );
}

export default index;
