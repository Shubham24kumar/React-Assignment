import React from "react";
import { Link } from "react-router-dom";

function LandingPageButton() {
    return(
        <>
        <Link to="/Home" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px", color:"Black"}}>
                Go to Home!
            </span>
        </button>
    </Link>
    </>
    );
    
    
    
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "60px" , color:"black"}}>
        Welcome !!
        </div>
        <br />
        <LandingPageButton />
    </div>
}

function LandingFrame() {
    const style = {
        "background-image": `url("https://freellustrustrations.s3.us-east-2.amazonaws.com/free-images/thumbimg_75049575046thumbejpg.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage/>
    </div>
}
function Welcome() {
    return <div>
        <LandingFrame />
    </div>
}
export default Welcome