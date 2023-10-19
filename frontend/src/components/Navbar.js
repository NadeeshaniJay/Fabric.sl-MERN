import React from "react";
import "./Navbar.css";
import Logomain from "../assests/logo/logo2.png";
import Search from "../assests/search.png";
import Profile from "../assests/user logo.png";
import Cart from "../assests/cart.png";

export default function Navbar() {
  return (
    <div className="header">
      <div className="flex items-center">
        <ul className="navbar-menu">
          <div class="dropdown">
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              class="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-hamburger"
              aria-expanded="false"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <div class="dropdown-content">
              <a href="/fashionfabrics">Fashion Fabrics</a>
              <a href="/homefabrics">Home Fabrics</a>
              <a href="/leather">Leather</a>
              <a href="/trims">Trims</a>
              <a href="/buttons">Buttons</a>
            </div>
          </div>
        </ul>
        <div className="flex list-none gap-10 px-10">
          <li >
            <a href="/about">About</a>
          </li>
          <li >
            <a href="/contact">Contact Us</a>
          </li>
          <li >
            <a href="/addproduct" >Add Product</a>
          </li>
        </div>
      </div>

      <div>
        <a className="navbar-logo " href="/">
          <img src={Logomain} alt="Logo" width="150" height="150" />
        </a>
      </div>

      <div>
        <div className=" flex gap-3 items-center">
          <a className="navbar-profile" href="/login">
            <img src={Profile} alt="profile" width="40" height="40" />
          </a>
          <p>Items: 0</p>
          <a className="navbar-cart" href="/cart">
            <img src={Cart} alt="cart" width="40" height="40" />
          </a>
        </div>
        <div className="navbar-search">
          <button>
            <img src={Search} alt="search" width={15} height={15} />
          </button>
          <input type="text" placeholder="Search for Fabrics..." />
        </div>
      </div>
    </div>
  );
}
