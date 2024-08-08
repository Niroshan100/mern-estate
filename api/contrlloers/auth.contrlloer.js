import User from "../models/user.mode.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
const {username,email,passowrd} = req.body;
//pasword eka pennnne nethi vidihta data base ekke hadana vidiha
const hashedPassword = bcryptjs.hashSync(passowrd,10);
const newUser = new User({username,email,passowrd :hashedPassword});

    try{

    await newUser.save();
   res.status(201).json('user created successfully!');

    }catch(error){
        next(error);

        
    }
   
};