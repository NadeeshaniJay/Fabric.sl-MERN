import React from "react";
import "./Header.css";
import Logomain from "../assests/logo/logo2.png";
import Search from "../assests/search.png";
import Profile from "../assests/user logo.png";
import Cart from "../assests/cart.png";

export default function Header() {
  return (
    <div className="header  ">
      <div className=" items-center">
        <ul className="navbar-menu">
          <div class="dropdown">
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              class="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-hamburger"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
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

      <div>
        <a className="navbar-logo" href="#">
          <img src={Logomain} alt="Logo" width="150" height="150" />
        </a>
      </div>

      <div>
        <div className=" flex gap-3 items-center">
          <a className="navbar-profile" href="#">
            <img src={Profile} alt="profile" width="30" height="30" />
          </a>
          <p>Items: 0</p>
          <a className="navbar-cart" href="#">
            <img src={Cart} alt="cart" width="30" height="30" />
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
