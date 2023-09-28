
import React from "react";
import {  AiOutlineSearch} from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import './nav.css'

export default function Nav(){
    return(
        <div className="chat-nav"> 
           <div className="upper">
                <div className="bar-cont">
                <FaBars className='bars'/>
                </div>
                <div className="chat-head">AURA</div>
                <div className="search-cont">
                <AiOutlineSearch  className="search-icon"/>
                </div> 
           </div>
        </div>
    )
}