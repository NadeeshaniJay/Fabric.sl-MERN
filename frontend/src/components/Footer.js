import React from "react";
import "./Footer.css";
import insta from "../assests/instagram.png";
import fb from "../assests/facebook.png";
import linkedin from "../assests/linkedin.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className=" mt-24 border-top border-2">
        <div className="footer-container">
          <div className="footer-contact">
            <h3>CONTACT US</h3>
            <h4>ADDRESS</h4>
            <p>
              No. 20, <br />
              Bagatale Road
              <br />
              Colombo 03
            </p>

            <h4>E-MAIL</h4>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" class="hover:text-violet-800">fabric.sl@gmail.com</a>

            <h4>HOTLINE</h4>
            <p>
              +94 77 123 4567
              <br />
              +94 11 123 4567
            </p>
          </div>

          <div className="footer-social">
            <h3>FOLLOW US ON </h3>
            <ul>
              <li>
                <a href="/fb">
                  <img src={fb} alt="Logo" width="25" height="25" />
                </a>
              </li>
              <li>
                <a href="/insta">
                  <img src={insta} alt="Logo" width="35" height="30" />
                </a>
              </li>
              <li>
                <a href="/linkedin">
                  <img src={linkedin} alt="Logo" width="25" height="25" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <div className="footer-shop ">
              <h3>SHOP</h3>
              <ul>
                <li>
                  <a href="/fashionfabrics" class="hover:text-violet-800">Fashion Fabrics</a>
                  <NavLink to="/fashionfabrics" />
                </li>
                <li>
                  <a href="/homefabrics" class="hover:text-violet-800">Home Fabrics</a>
                  <NavLink to="/homefabrics" />
                </li>
                <li>
                  <a href="/leather" class="hover:text-violet-800">Leather</a>
                </li>
                <li>
                  <a href="/trims" class="hover:text-violet-800">Trims</a>
                </li>
                <li>
                  <a href="/buttons" class="hover:text-violet-800">Buttons</a>
                </li>
              </ul>
            </div>
            
          </div>

          <div className="footer-info">
            <h3>ABOUT US</h3>
            <p>
              Fabric.sl is the largest online fabric store providing designers
              and sewists with the widest selection of premium fabrics sold by
              the yard at great prices. Featured on Project Runway, our
              selection includes fashion and home fabrics spanning, but not
              limited to, lace, linen, silk, brocades, denim, chiffon, cotton,
              crepe, and satin for the beginner to the advanced and beyond. Shop
              our online fabric store for trims, buttons, notions, rhinestones,
              and zippers to complete your project.
            </p>
          </div>
        </div>
        
        <div className="footer-copyright">
          <hr></hr>
          <p>&copy; Copyright 2023 Fabric.sl</p>
        </div>
      </footer>
    </div>
  );
}
