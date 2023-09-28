import React from "react";
import {Link} from "react-router-dom";
import './buttons.css';

export default function Button(props){
    let c= "button" + props.num;
    console.log(c)
    if(props.play !== "NULL"){
    let link = "/" + props.play;
    return(
        <div className={c}>
            <Link className="a" to={link}>
            {props.name}
            </Link>
        </div>
    )
    }
    else{
    return(
        <input className={c} type="button" onClick={props.func} value={props.name}>
        </input>
    )
    }
}