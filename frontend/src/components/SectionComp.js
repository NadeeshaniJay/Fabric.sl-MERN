import React from "react";

function SectionComp( props) {
  return (
    <div>
      <div class="   w-40 h-40  bg-red-200 border border-gray-200 rounded-lg shadow ">


      < h1 className=" text-center  font-bold text-sm  text-red-600"> {props.title}</h1>  
       <img  src= { props.img}   /> 
        
      </div>
    </div>
  );
}

export default SectionComp;
