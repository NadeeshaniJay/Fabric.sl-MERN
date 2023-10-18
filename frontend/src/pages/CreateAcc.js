import React from "react";
import './CreateAcc.css'
import LogoAcc from '../assests/logo/logo2.png'
import BackgroundAcc from '../assests/chair.jpg'

export default function CreateAcc() {
    return(
        <div className="create-acc">
            <img src={BackgroundAcc} alt="background" className="background"/>
                
                <div className="container">
                    
                    <div className="paragraph">
                        <p>Shop our curated designs for the trending fashions</p>
                    </div>

                    <div className="contentAcc">
                        <h1>Create an Account</h1>
                        <hr></hr>
                        <div className="nameAcc">
                            <label for="name"><b>Name*</b></label>
                            <input type="name" id="firstname" placeholder="First Name" required/>
                            <input type="name" id="lastname" placeholder="Last Name" required/>
                        </div>
                        <div className="emailAcc">
                            <label for="email"><b>Email Address*</b></label>
                            <input type="email" id="email" placeholder="E-Mail" required/>
                        </div>
                        <div className="passwordAcc">
                            <label for="psw"><b>Password*</b></label>
                            <input type="password" id="psw" placeholder="Password" required/>
                        </div>
                        
                        <button type="submit" className="loginbtn">Register</button>
                        <button type="button" className="cancelbtn">Cancel</button>
                    </div>
                        
                    <div>
                        <img src={LogoAcc} alt="logo" className="logoAcc"/>
                    </div>
                </div>     
        </div>

    )
}