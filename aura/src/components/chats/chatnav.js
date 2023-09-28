import React from "react";
import img3 from "../homepage/img/img3.jpg"
import './chatnav.css'

export default function Chat(){
    return(
        <div className="chat-navi"> 
           <div className="chat-img">
             <img src={img3} alt="dp" className="chat-img-dp"></img>
           </div>
           <div className="chat-info-right">
                <div className="chat-head-right">Suraj Kumar</div>
                <div className="last-message-right">last send message</div>
            </div>
        </div>
    )
}