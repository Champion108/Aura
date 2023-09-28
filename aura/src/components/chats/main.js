import React from "react";
import Left from "./left";
import Right from "./right";
import './main.css'
import { useNavigate } from "react-router-dom";

export default function Chat(){


    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData)
    const nav= useNavigate();
    if(!userData){
        console.log("User not Authenticated");
        nav("/");
    }

    return(
        <div className="chat-cont"> 
           <div className="chat-main"> 
           <Left />
           <Right />
           </div>
        </div>
    )
}