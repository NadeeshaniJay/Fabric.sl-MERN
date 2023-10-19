import React, { useState } from "react";
import "./login.css";
import LoginBackground from "../assests/loginbackground.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handlesubmit use axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { email, password };
    await axios.post("http://localhost:8081/users/login", newUser);
    alert("Login successfull");
    //go to home page
    window.location = "/";
  };

  return (
    <div className="login">
      
        <div className="container">
          <img
            src={LoginBackground}
            alt="background"
            className="login-background"
          />

          <div className="background">
            <div className="content">
              <span>SIGN IN</span>
              <hr></hr>
            <form onSubmit={handleSubmit}>
              <div>
                <label for="email">
                  <b>Email Address*</b>
                </label>
                <input  onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="E-Mail" required />
              </div>
              <div>
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

              <button  className="loginbtn">
                Login
              </button>

              </form>

              <div>
                <label className="checkbox">
                  <input type="checkbox" checked={true} name="remember" />{" "}
                  Remember me
                </label>
              </div>

              <p className=" text-teal-50">
                {" "}
                Dont have an Account?{" "}
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
      
    </div>
  );
}
