import React from "react";
import img1 from "../homepage/img/img2.jpg"
import './chat.css'

export default function Chat(){
    return(
        <div className="chat-item">
          <div className="chat-item-profile">
                    <img className="profile-pic" alt="dp" src={img1}></img>
            </div>
            <div className="Chat-info">
                <div className="chat-head">Suraj Kumar</div>
                <div className="last-message">last send message</div>
            </div>
        </div>
    )
}