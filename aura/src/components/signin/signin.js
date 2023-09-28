import React, { useState } from "react";
import Head from "./head";
import Button from "../homepage/button";
import './input.css'
import './signin.css'
import { Link } from "react-router-dom";
//import {CircularProgress} from "@mui/material";
import axios from "axios";
//import Toaster from "./toaster"
import { useNavigate } from "react-router-dom";

export default function SignIn(){
    
    const [name,setname] =useState('')
    const [Password,setpassword] =useState('')
    const [email,setemail] = useState('')
    const [data,setData] = useState({name:"",email:"",password:""});
    const [loading,setLoading] = useState(false);  
    const [loginStatus,setloginStatus] = React.useState("");
    const [SignInStatus,setSignInStatus] = React.useState("");

    const navigate = useNavigate();

    const loginhandler= async (e) =>{

        e.preventDefault();
        const password = Password
        setData({
            name,
            email,
            password
        });

        setLoading(true);

        console.log(data)
        try{
            const config={
                headers:{
                    "Content-type":"application/json",
                },
            };

            const response = await axios.post(
                "http://localhost:5000/user/login/",
                data,
                config
            );

            console.log("Login:",response);
            setloginStatus({msg: "Success", key: Math.random()});
            localStorage.setItem("userData",JSON.stringify(response));
            
            navigate('./chat');
        }   
        catch(error){
           setloginStatus({
            msg: "invalid Username or Password",
            key: Math.random(),
           })
        }
        setLoading(false)
    }
    
    return(
        <div className="out">
            <div className="form-cont">
                <Head name="Sign In"/>
                    <div className="input-cont">
                        <h5 className="label">Username</h5>
                        <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Username" className="inp"></input>
                    </div>
                    <div className="input-cont">
                        <h5 className="label">Password</h5>
                        <input value={Password} onChange={(e) => setpassword(e.target.value)} type="text" placeholder="Password" className="inp"></input>
                    </div>
                <Button 
                    name="Log in"
                    play="NULL"
                    func={loginhandler}
                    num="1"
                />
                <Link className="forgot" to="/Building">
                   Forgot Password?
                </Link>
                <div className="line1"></div>
                <Button 
                    name="Create New Account"
                    play="NULL"
                    num="2"
                />
            </div>
        </div>
    )
}
