import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from React Router
import SectionComp from "../components/SectionComp";
import Fashion from "../assests/img47.jpg";
import Home from "../assests/img75.jpg";
import Leather from "../assests/img60.jpg";
import Trims from "../assests/img64.jpg";
import Buttons from "../assests/buttons.png";

function SelectionSection() {
  return (
    <div className="flex gap-12 items-center justify-center">
      <Link to="/fashionfabrics">
        <SectionComp img={Fashion} title="FASHION FABRICS" />
      </Link>
      <Link to="/homefabrics">
        <SectionComp img={Home} title="HOME FABRICS" />
      </Link>
      <Link to="/leather">
        <SectionComp img={Leather} title="LEATHER" />
      </Link>
      <Link to="/trims">
        <SectionComp img={Trims} title="TRIMS" />
      </Link>
      <Link to="/buttons">
        <SectionComp img={Buttons} title="BUTTONS" />
      </Link>
    </div>
  );
}

export default SelectionSection;
