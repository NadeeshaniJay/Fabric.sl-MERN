import React from "react";
import "./Home.css";
import homeImg1 from "../assests/img1.jpg";
import SelectionSection from "./SelectionSection";

export default function Home() {
  return (
    <div className="home">
      <div className="">
        <div className="flex flex-row">
          <p>Discover Elegance in Every Thread</p>
          <img src={homeImg1} alt="homeImg" className="home-img" />
        </div>

        <div className="home-content">
          <SelectionSection />
        </div>
      </div>
    </div>
  );
}
