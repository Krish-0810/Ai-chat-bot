import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

export default function LandingPage() {
    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>Convo Stream</h2>
                </div>
                <div className="navlist">
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role="button">
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1> <span style={{ color: "#ff9839"}}>Connect</span> with Your Loved Ones</h1>
                    <p>Cover Your Distance by Convo Stream</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    
                    
                    
                </div>
            </div>


        </div>
    )
}