const express = require("express");
const UserModel = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../config/generatetoken")

const loginController = expressAsyncHandler(async (req,res) =>{
    console.log(req.body)
    const {name,password} = req.body;
    const user = await UserModel.findOne({name});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id :user._id,
            name: user.name,
            email:user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(401);
        throw new Error("Invalid UserName or Password");
    }
});

//req body has all the data to push 
const registerController = expressAsyncHandler(async (req, res) =>{
   const {name,email,password} = req.body;

   //check for all fields
   if(!name || !email || !password) {
        res.send(400);
        throw Error("All input fields have not been filled!!")
   }

   //pre-existing user 
   const userexist = await UserModel.findOne({email});
   if(userexist){
    throw new Error("User already Exists")
   }

   //checking username
   const usernameexist = await UserModel.findOne({name});
   if(usernameexist){
    throw new Error("Username already taken.. please try some other username")
   }

   //creating a entry in the database for the user
   const user = await UserModel.create({name,email,password});
   if(user){
    res.status(201).json({
        _id :user._id,
        name: user.name,
        email:user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
    })
   }
   else{
    res.status(400);
    throw new Error("Registration Error");
   }
});

module.exports ={loginController,registerController};