import React from "react";
import Image from "./image.jpg";

function Movies() {
   return (
      <div className="-mt-14">
         <div
            className="mb-8
            font-bold
            text-2xl
            text-center
            "
         >
            Trending Movies
         </div>

         <div className="flex flex-wrap justify-center">
            <img
               className="
               w-[200px]
               h-[30vh]
               m-4
               rounded-xl
               hover:scale-110
               duration-300
            "
               src={Image}
               alt=""
            />
            <img
               className="
               w-[200px]
               h-[30vh]
               m-4
               rounded-xl
               hover:scale-110
               duration-300
            "
               src={Image}
               alt=""
            />
            <img
               className="
               w-[200px]
               h-[30vh]
               m-4
               rounded-xl
               hover:scale-110
               duration-300
            "
               src={Image}
               alt=""
            />
            <img
               className="
               w-[200px]
               h-[30vh]
               m-4
               rounded-xl
               hover:scale-110
               duration-300
            "
               src={Image}
               alt=""
            />
            <img
               className="
               w-[200px]
               h-[30vh]
               m-4
               rounded-xl
               hover:scale-110
               duration-300
            "
               src={Image}
               alt=""
            />
            <img
               className="
               w-[200px]
               h-[30vh]
               m-4
               rounded-xl
               hover:scale-110
               duration-300
            "
               src={Image}
               alt=""
            />
         </div>
      </div>
   );
}

export default Movies;
