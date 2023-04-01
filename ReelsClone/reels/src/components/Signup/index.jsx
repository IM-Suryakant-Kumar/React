import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Signup() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [fullName, setFullName] = useState("");
   const loginHelper = (e) => {
      console.log(email, password);
   };

   return (
      <>
         {/* <div>Signup</div> */}
         <Card sx={{ minWidth: 275 }}>
            <CardContent>
               <img src="insta.png" alt="" height="80px" />
               <Typography variant="body1" style={{ color: "gray" }}>
                  Sign up to see photos and videos from your friend
               </Typography>
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
                  <TextField
                     type="text"
                     id="outlined-basic"
                     label="Full Name"
                     variant="outlined"
                     margin="normal"
                     fullWidth="true"
                     value={fullName}
                     onChange={(e) => setFullName(e.target.value)}
                  />
               </div>
               <Button
                  variant="outlined"
                  color="primary"
                  size="normal"
                  fullWidth
                  startIcon={<CloudUploadIcon />}
                  style={{
                     marginBottom: "10px",
                     color: "#cf2f74",
                     borderColor: "#cf2f74",
                  }}
                  component="label"
               >
                  upload profile image
                  <input hidden accept="image/*" multiple type="file" />
               </Button>
               <Button
                  variant="contained"
                  size="normal"
                  fullWidth
                  onClick={loginHelper}
               >
                  <Typography variant="h6">sign up</Typography>
               </Button>
            </CardContent>
         </Card>
         <Card sx={{ minWidth: 275, marginTop: "1rem" }}>
            <CardContent>
               <Typography variant="p">Dont't have an account</Typography>
               <Button variant="text">
                  <Typography>Signup</Typography>
               </Button>
            </CardContent>
         </Card>
      </>
   );
}

export default Signup;
