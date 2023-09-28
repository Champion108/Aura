import React, { useState } from "react";
import Head from "./head";
import Button from "../homepage/button";
import './signup.css'
import '../homepage/buttons.css'
import './input.css'
import { useNavigate } from "react-router-dom";
import {Backdrop,CircularProgress} from "@mui/material";
import Toaster from "./toaster"
import axios from "axios";

export default function Signup(){

    const [loginStatus,setloginStatus] = React.useState("");
    const [loading,setLoading] = useState(false);
    const [showLogin,setshowLogin] = React.useState("");
    const [SignInStatus,setSignInStatus] = React.useState("");
    const [name,setname] =useState('')
    const [email,setemail] =useState('')
    const [Password,setpassword] =useState('')
    const [confirm,setconfirm] =useState('')
    
    const navigate = useNavigate();

    async function registeruser(event){
        if(confirm !== Password) 
        {
           window.alert("Password and Confirm Password must be same")
           return;
        }
        setLoading(true);
        try{
            const config ={
                headers:{
                    "Content-type": "application/json",
                },
            };
        const data ={
            name,
            email,
            Password
        }


        const response = await axios.post(
            'https://localhost:5000/user/register/',
            data,
            config,
        );

        setSignInStatus({msg:"Success", key: Math.random()})
        navigate("./Chat");
        localStorage.setItem("userData",JSON.stringify(response));
        setLoading(false)
        }
        catch(error){
            if(error.response.status===405){
                setloginStatus({
                    msg:"User with this email alreasy exists",
                    key: Math.random()
                })
            }
            if(error.response.status===406){
                setloginStatus({
                    msg:"Username already taken..",
                    key: Math.random()
                })
            }
        }
        setLoading(false)
       }

    return(
        <div className="outup">
            <div className="form-contup">
                <Head name="Sign Up"/>
                    <div className="input-cont">
                        <h5 className="label">Email</h5>
                        <input 
                        name
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        type="email" 
                        placeholder="exapmle@gmail.com" 
                        className="inp">
                        </input>
                    </div>
                    <div className="input-cont">
                        <h5 className="label">Select Username</h5>
                        <input 
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        type="text"
                        placeholder="john_doe71" 
                        className="inp"></input>
                    </div>
                    <div className="input-cont">
                        <h5 className="label">Create Password</h5>
                        <input 
                        value={Password}
                        onChange={(e) => setpassword(e.target.value)}
                        type="password" 
                        placeholder="Password"
                        className="inp"></input>
                    </div>
                    <div className="input-cont">
                        <h5 className="label">Confirm Password</h5>
                        <input
                        value={confirm}
                        onChange={(e) => setconfirm(e.target.value)}
                        type="password" placeholder="Confirm Password" className="inp"></input>
                    </div>
                <div className="line"></div>
                <Button 
                    name="Submit"
                    play="NULL"
                    func={registeruser}
                    num="2"
                />{
                 loginStatus ? (<Toaster key={loginStatus.key} message={loginStatus.msg}/>):null
                }
            </div>
        </div>
    )
}