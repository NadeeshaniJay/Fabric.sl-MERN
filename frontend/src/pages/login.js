import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import BG from "../assests/img17.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { email, password };
    await axios.post("http://localhost:8081/users/login", newUser);
    alert("Login Successful!");

    window.location = "/";
  };

  return (
    <div className="login">
      <div className="container bg-white text-center justify-center flex">
        <img src={BG} alt="Logo" className="w-70"/>
        <div className="content">
          <div className="title m-5 font-bold text-2xl text-gray-700">
            <span>SIGN IN</span>
            <hr></hr>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="m-5 text-slate-500">
              <label for="email">
                <b>Email Address*</b>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="E-Mail"
                required
              />
            </div>
            <div className="m-5 text-slate-500">
              <label for="psw">
                <b>Password</b>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="psw"
                placeholder="Password"
                required
              />
            </div>

            <button className="loginbtn">Login</button>
          </form>

          <div>
            <label className="checkbox1 m-2">
              <input type="checkbox" checked/> Remember
              me
            </label>
          </div>

          <p className=" text-gray-700 m-5">
            {" "}
            Don't have an Account?{" "}
            <span>
              {" "}
              <Link className=" text-blue-700 underline" to={"/CreateAcc"}>
                Register
              </Link>{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
