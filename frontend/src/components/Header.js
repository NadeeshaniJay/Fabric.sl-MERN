import React from "react";
import './Header.css';
import Logomain from '../assests/logo/logo2.png';
import Search from "../assests/search.png";
import Profile from "../assests/user logo.png"
import Cart from "../assests/cart.png"


export default function Header() {
    return(
            <div className="header">
                <div>
                    <div>
                        <a className="navbar-logo" href="#"> <img src={Logomain} alt='Logo' width="100" height="100"/></a>
                        <a className="navbar-profile" href="#"> <img src={Profile} alt="profile" width="30" height="30"/></a>
                        <a className="navbar-cart" href="#">Items: 0<img src={Cart} alt="cart" width="30" height="30"/></a>                
                    </div>
                    <div className="navbar-search">
                        <button><img src={Search} alt="search" width={10} height={10}/></button>
                        <input type='text' placeholder="Search for Fabrics..."/>
                    </div>
                </div>

                <div>
                    <ul className="navbar-menu">
                        <div class="dropdown">
                            <button class="dropbtn">MENU
                                <div className="menu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                            <div class="dropdown-content">
                                <a href="#">Fashion fabrics</a>
                                <a href="#">Home Fabrics</a>
                                <a href="#">Leather</a>
                                <a href="#">Trims</a>
                                <a href="#">Buttons</a>
                            </div>
                        </div>
                        <li className="navbar-menu-item">
                            <a href="#">About</a>
                        </li>
                        <li className="navbar-menu-item">
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}