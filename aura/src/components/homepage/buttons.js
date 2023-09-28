import React from "react";
import Button from "./button";
import './buttons.css'

export default function Buttons(props){
    return(
        <div className="buttons" onClick={props.play}>
            <Button 
               name="Sign Up"
               play="./signup"
               num="1"
            />
            <Button 
               name="Sign In"
               play="./signin"
               num="1"
            />
        </div>
    )
}