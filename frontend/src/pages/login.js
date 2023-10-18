import React from "react";
import './login.css'
import LoginBackground from "../assests/loginbackground.jpg"

export default function login() {
    return(
        <div className="login">
            <form>
                <div className="container">
                    <img src={LoginBackground} alt="background" className="login-background"/>
                    
                    <div className="background">
                        
                        <div className="content">
                            <span>SIGN IN</span>
                            <hr></hr>
                            
                            <div>
                                <label for="email"><b>Email Address*</b></label>
                                <input type="email" id="email" placeholder="E-Mail" required/>
                            </div>
                            <div>
                                <label for="psw"><b>Password</b></label>
                                <input type="password" id="psw" placeholder="Password" required/>
                            </div>
                        
                            <button type="submit" className="loginbtn">Login</button>
                            <button type="button" className="cancelbtn">Cancel</button>
                            
                            <div>
                            <label className="checkbox">
                                <input type="checkbox" checked={true} name="remember"/> Remember me 
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
