import React from "react";
import Nav from "./nav";
import Chats from "./chats";
import './left.css'

export default function Left(){
    return(
        <div className="chat-left">
            <Nav/> 
            <Chats />
        </div>
    )
}