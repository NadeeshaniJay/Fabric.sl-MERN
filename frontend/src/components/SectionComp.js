import React from "react";

function SectionComp(props) {
  return (
    <div>
      <div className="w-60 h-60 max-w-sm bg-white-200 border hover:scale-110 text-black border-gray-200 rounded-lg shadow">
        <h1 className=" text-center  text-md  text-violet-500 p-3">
          {props.title}
        </h1>
        <img src={props.img} alt="section" />
      </div>
    </div>
  );
}

export default SectionComp;
