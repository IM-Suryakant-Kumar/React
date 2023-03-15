import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Pagination from "./Pagination";

function Movies() {
   let [movies, setMovies] = useState([]);
   let [pageNum, setPage] = useState(1);
   const onPrev = () => {
      if (pageNum > 1) {
         setPage(pageNum - 1);
      }
   };
   const onNext = () => {
      setPage(pageNum + 1);
   };

   useEffect(() => {
      console.log("useEffect Again");
      (() => {
         axios
            .get(
               "https://api.themoviedb.org/3/trending/all/week?api_key=6cd46db7aa2ee39be65321fb0d418065&page=" +
                  pageNum
            )
            .then((res) => {
               // console.table(res.data.results);
               setMovies(res.data.results);
            });
      })();
   }, [pageNum]);

   return (
      <div className="mt-8">
         <div
            className="
            mb-8
            font-bold
            text-2xl
            text-center
            "
         >
            Trending Movies
         </div>

         <div
            className="
         flex flex-wrap
         justify-center
         "
         >
            {movies.length === 0 ? (
               <div className="flex justify-center">
                  <Oval
                     height="80"
                     width="80"
                     radius="9"
                     color="gray"
                     secondaryColor="gray"
                     ariaLabel="loading"
                     wrapperStyle
                     wrapperClass
                  />
               </div>
            ) : (
               movies.map((movie) => {
                  return (
                     <div key={movie.id}>
                        <div
                           className="
            bg-center bg-cover
            w-[160px]
            h-[30vh]
            md:h-[40vh]
            md:w-[180px]
            m-4
            rounded-xl
            hover:scale-110
            duration-300
            flex items-end"
                           style={{
                              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
                           }}
                        >
                           <div
                              className="
                  font-bold text-white
                  bg-gray-900 bg-opacity-60
                  p-2
                  rounded-b-xl
                  text-center
                  w-full
               "
                           >
                              {movie.title || movie.name}
                           </div>
                        </div>
                     </div>
                  );
               })
            )}
         </div>
         <Pagination
            pageNum={pageNum}
            onPrev={onPrev}
            onNext={onNext}
         ></Pagination>
      </div>
   );
}

export default Movies;
