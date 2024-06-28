import React from "react";
import "./CreateAcc.css";
import LogoAcc from "../assests/logo/logo2.png";
import { Link } from "react-router-dom";
import axios from "axios" ;

export default function CreateAcc() {
  
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState(""); 
  const [password, setPassword] = React.useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password };
    await axios.post("http://localhost:8081/users/createAcc", newUser);
    alert("User Added");
    
    window.location = "/";
  };

  return (
    <div className="create-acc">
      <div className="container">
        <div className="paragraph mx-20">
          <p>Shop our curated designs for the trending fashions</p>
        </div>

        <div className="contentAcc my-5">
          <div className="text-2xl text-violet-500 font-bold my-10 text-center">
          <h1>Create an Account</h1>
          </div>
          
          <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
            <div className="nameAcc my-2">
              <label for="name">
                <b>Name*</b>
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                id="firstname"
                placeholder="First Name"
                required
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                id="lastname"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="emailAcc my-2">
              <label for="email">
                <b>Email Address*</b>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="E-Mail"
                required
              />
            </div>
            <div className="passwordAcc my-2">
              <label for="psw">
                <b>Password*</b>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="psw"
                placeholder="Password"
                required
              />
            </div>
            <p>
              {" "}
              Already have an Account?{" "}
              <span>
                {" "}
                <Link to={"/login"} className=" text-blue-700 underline">
                  Login
                </Link>{" "}
              </span>{" "}
            </p>

            <button type="submit" className="registerbtn">
              Register
            </button>
            
          </form>
        </div>

        <div className="my-20">
          <img src={LogoAcc} alt="logo" className="logoAcc" />
        </div>
      </div>
    </div>
  );
}
