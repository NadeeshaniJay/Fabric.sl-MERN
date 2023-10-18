import React from "react";
import './Home.css';
import homeImg1 from '../assests/img1.jpg';

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
