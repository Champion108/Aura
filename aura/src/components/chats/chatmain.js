import React from "react";
import Msgdemo from "./msgdemo";
import './chatmain.css'

export default function Chatmain(){
    let shiv = "Hi!!";
    return(
        <div className="chat-main-new"> 
           <div className="chat-sec">
              <Msgdemo num="1" text={shiv}/>
              <Msgdemo num="2" text="Hi Beta"/>
              <Msgdemo num="1" text="Kaise ho aap?"/>
              <Msgdemo num="2" text="Badhiya.. Tum batao?"/>
           </div>
        </div>
    )
}