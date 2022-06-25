import React from "react";
import './signIn.css';
import Header from "./Header";
import Login from './Login';

const SignUp = () =>{
    return (
      <>
        <Header
        name = "Login"
        src = {Login} />
        
        <div className="Main-div">
        <form>
            <h1>Sign In</h1>
            <input type="text" placeholder="Email or phone number"/>
            <input type = "password" placeholder="Password" />
            <button type="submit" value="Sign In" className= "Sign_inbutton">Sign In</button>
        </form>
        </div>
        </>
    )
};

export default SignUp;