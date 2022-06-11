import User_15 from "../models/User_15.js";
import { StatusCodes } from "http-status-codes";

const register_15 = async (req, res, next) => {
    
        console.log('body',req.body);
        const  user = await User_15.create(req.body);
        const token = user.createJWT();
        res.status(StatusCodes.CREATED)
        .json({ user, token, location:user.location });    
// add express async-error, remove try catch block    
// try {
//    console.log('body',req.body);
//     const  user = await User_15.create(req.body);
//     const token = user.createJWT();
//     res.status(201).json({user, token});
// } catch (err) {
//     //res.status(500).json({ msg: 'Error on registering user' });
//     next(err);
// }
    //res.send('register user -- huang0308, 209410215');
};

const login_15 = async (req, res) => {
    res.send('login user -- huang0308, 209410215');
};

const updateUser_15 = async (req, res) => {
    res.send('Update user -- huang0308, 209410215');
};

export {register_15, login_15, updateUser_15};