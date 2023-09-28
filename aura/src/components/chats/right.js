import React from "react";
import ChatNav from "./chatnav";
import SendChat from "./sendchat";
import Chatmain from "./chatmain";
import './right.css'

export default function Right(){
    return(
        <div className="chat-right"> 
           <ChatNav />
           <Chatmain />
           <SendChat />
        </div>
    )
}