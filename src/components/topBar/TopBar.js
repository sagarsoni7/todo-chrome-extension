import React, { useState, useEffect } from 'react';
import axios from "axios";
import Clock from "./clock/index.js";
import classes from "./index.module.css";

const TopBar=()=>{
    const [quote, setQuote] = useState("Loading quote...");

    useEffect(() => {
        // Update the document title using the browser API
        axios.get("http://quotes.rest/qod.json")
        .then((res)=>{
           setQuote(res.data.contents.quotes[0].quote);  
           document.body.style.backgroundImage="url("+res.data.contents.quotes[0].background+")"; 
           document.body.style.backgroundPosition= "center"; 
           document.body.style.backgroundSize= "cover"; 
           document.body.style.backgroundRepeat= "no-repeat"; 
           document.body.style.backgroundAttachment= "fixed"; 
        })
       
      });

    return (
      <div>
        <div className={classes.Clock}>
          <Clock />
        </div>
        <span>"{quote}"</span>
      </div>
    );
  
}
export default TopBar;
