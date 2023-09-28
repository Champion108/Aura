import React from "react";
import {RiSendPlane2Fill} from 'react-icons/ri'
import './sendchat.css'

export default function sentbox(){
    return(
        <div className="send-chat">   
                <div className="msg-box"><input className="hero" type="text" placeholder="Type your Message here..." /></div>
                <div className="send-btn"><RiSendPlane2Fill className="send-icon"/></div>
        </div>
    )
}

