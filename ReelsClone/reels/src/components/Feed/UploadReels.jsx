import React from "react";
import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";
import LinearProgress from "@mui/material/LinearProgress";

function UploadReels() {
   return (
      <div className="upload-cont">
         <Button
            variant="outlined"
            color="primary"
            size="normal"
            fullWidth
            startIcon={<MovieIcon />}
            style={{
               marginBottom: "10px",
               color: "#cf2f74",
               borderColor: "#cf2f74",
               fontWeight: 500,
            }}
            component="label"
         >
            <input hidden accept="image/*" multiple type="file" />
            upload video
         </Button>
         {/* Loader */}
         <LinearProgress variant="determinate" color="warning" value="70" />
      </div>
   );
}

export default UploadReels;
