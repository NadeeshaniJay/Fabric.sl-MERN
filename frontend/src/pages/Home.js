import React, { useState } from "react";
import './Home.css';
import homelogo from '../assests/logo/logo5.png';
import homeImg1 from '../assests/img1.jpg';
import homeImg2 from '../assests/img2.jpg';

export default function Home() {
    return(
        <div className="home">
            <p>Discover Elegance in Every Thread</p>
            <div>
                <img src={homeImg1} alt="homeImg" className="home-img"/>
            </div>
        </div>

    )
}
