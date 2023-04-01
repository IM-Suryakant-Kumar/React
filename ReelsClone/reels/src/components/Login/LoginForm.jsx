import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const loginHelper = (e) => {
      console.log(email, password);
   };

   return (
      <div>
         {/* <div>LoginForm</div> */}
         <Card
            sx={{ minWidth: 275, maxWidth: 370 }}
            style={{ border: "2px solid lightgray" }}
         >
            <CardContent>
               <img
                  src="insta.png"
                  alt=""
                  height="80px"
                  className="item-center"
               />
               <div>
                  <TextField
                     type="email"
                     id="outlined-basic"
                     label="email"
                     variant="outlined"
                     margin="normal"
                     fullWidth="true"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                     type="password"
                     id="outlined-basic"
                     label="password"
                     variant="outlined"
                     margin="normal"
                     fullWidth="true"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               <Button
                  fullWidth
                  variant="contained"
                  size="normal"
                  onClick={loginHelper}
               >
                  <Typography variant="h6">Log in</Typography>
               </Button>
            </CardContent>
         </Card>
         <Card
            sx={{ minWidth: 275, maxWidth: 370, marginTop: "1rem" }}
            style={{ border: "2px solid lightgray" }}
         >
            <CardContent className="item-center">
               <Typography variant="p">Dont't have an account</Typography>
               <Button variant="text">
                  <Typography>
                     <Link to="/signup">Signup</Link>
                  </Typography>
               </Button>
            </CardContent>
         </Card>
      </div>
   );
}

export default LoginForm;
