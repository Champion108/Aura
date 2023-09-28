import React from "react";
import './input.css'

export default function Input(props){

    return(
        <div className="input-cont">
            <h5 className="label">{props.name}</h5>
            <input type={props.type} placeholder={props.placeholder} className="inp"></input>
        </div>
    )
}