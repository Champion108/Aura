import React from "react";
import Msgdemo from "./msgdemo";
import './chatmain.css'

export default function Chatmain(){
    let shiv = "OM Namah Shivaya OM Namo Narayana Om devi durgaya namaha Jai jai jai jai jaggannath horibolo hori hori bolo";
    return(
        <div className="chat-main-new"> 
           <div className="chat-sec">
              <Msgdemo num="1" text={shiv}/>
              <Msgdemo num="2" text="Har har mahadev hori bol jai maa durga"/>
              <Msgdemo num="1" text="hello"/>
              <Msgdemo num="2" text="Hi Suraj"/>
           </div>
        </div>
    )
}