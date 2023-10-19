import React from "react";
import "./CreateAcc.css";
import LogoAcc from "../assests/logo/logo2.png";
import BackgroundAcc from "../assests/chair.jpg";
import { Link } from "react-router-dom";
import axios from "axios" ;
export default function CreateAcc() {

  //state
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState(""); 
  const [password, setPassword] = React.useState("");

  //handlesubmit use axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password };
    await axios.post("http://localhost:8081/users/createAcc", newUser);
    alert("User Added");
    //go to home page
    window.location = "/";
  };

 

 


  return (
    <div className="create-acc">
      <img src={BackgroundAcc} alt="background" className="background" />

      <div className="container">
        <div className="paragraph">
          <p>Shop our curated designs for the trending fashions</p>
        </div>

        <div className="contentAcc  ">
          <h1>Create an Account</h1>
          <hr></hr>

          <form onSubmit={ handleSubmit} className=" flex flex-col gap-4">
            <div className="nameAcc">
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
            <div className="emailAcc">
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
            <div className="passwordAcc">
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
              Dont have an Account?{" "}
              <span>
                {" "}
                <Link to={"/login"} className=" text-blue-700 underline">
                  Login
                </Link>{" "}
              </span>{" "}
            </p>

            <button type="submit" className="loginbtn">
              Register
            </button>
            
          </form>
        </div>

        <div>
          <img src={LogoAcc} alt="logo" className="logoAcc" />
        </div>
      </div>
    </div>
  );
}
