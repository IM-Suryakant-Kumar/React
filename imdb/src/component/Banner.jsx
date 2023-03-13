import React from "react";
import Image from "./image.jpg";
import "./banner.css";
function Banner() {
   return (
      <div>
         <>
            <img src={Image} alt="" />
            <div
               className="parent
               banner-head"
            >
               <div
                  className="bg-gray-900 
                  bg-opacity-40
                  text-white
                  text-2xl
                  font-bold
                  py-10
                  text-center 
                    "
               >
                  M3GAN
               </div>
            </div>
         </>
      </div>
   );
}

export default Banner;
