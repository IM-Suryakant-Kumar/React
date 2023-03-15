import React, { useState } from "react";

function Pagination(props) {
   let {pageNum, onPrev, onNext} = props;
   return (
      <div
         className="
         select-none
         flex
         justify-center
         my-4
         text-gray-900
      "
      >
         <div
            className="
            border-2
            p-2
            border-r-0
            rounded-l-xl
            border-blue-400
         "
            onClick={onPrev}
         >
            Previous
         </div>
         <div
            className="
            select-none
            border-2
            border-r-0
            p-2 
            border-blue-400"
         >
            {pageNum}
         </div>
         <div
            className="
            select-none
            border-2
            p-2
            rounded-r-xl
            border-blue-400"
            onClick={onNext}
         >
            Next
         </div>
      </div>
   );
}

export default Pagination;
