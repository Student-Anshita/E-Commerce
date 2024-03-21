import React from "react";
import './NewsLetter.css';

const NewsLetter = () =>{
    return(
        <div className="newsletter">
         <h1>Get Exclusive Offers On Your Email</h1>
         <p>Subscribe to our NewLetter and Stay Updated</p>
         <div>
            <input type="email" placeholder="Your email ID"/>
            <button>Subscribe</button>
         </div>
        </div>
    )
}
export default NewsLetter;