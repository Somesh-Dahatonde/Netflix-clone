import React from "react";
import Header from "./Header";
import './MainPage.css';

const MainPage =() => {
    return (
        <>
        <div className="main-div">
        
            <Header name = "Sign In "/>
            <div className="Center-content">
            <img src='../asset/image1.png' alt="image not rendered"/>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h6>Ready to watch? Enter your email to create or restart your membership.
</h6>
<input type='email' />
<button className="get-stated-button">Get Started</button>
</div>
        </div>
        </>
    )
}

export default MainPage;