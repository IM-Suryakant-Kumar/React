import React from "react";
import NavBar from "./NavBar";
import UploadReels from "./UploadReels";
import "./feed.css";

function Feed() {
   return (
      <div className="feed-cont">
         {/* <h1>Feeds</h1> */}
         <NavBar></NavBar>
         {/* <h1>Upload Button</h1> */}
         <UploadReels></UploadReels>
         {/* <div>Reels</div> */}
      </div>
   );
}

export default Feed;
