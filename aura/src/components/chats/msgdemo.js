import React from "react";
import './msg.css'

export default function msgdemo(props){
    let c= "heera"+props.num;
    let msg= props.text;
    return(
        <div className={c}> 
           {msg}
        </div>
    )
}