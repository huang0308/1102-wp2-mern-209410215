import User_15 from "../models/User_15.js";

const register_15 = async (req, res) => {
    console.log('body',req.body);
    const  user = await User_15.create(req.body);
    res.status(201).json({user});
    //res.send('register user -- huang0308, 209410215');
};

const login_15 = async (req, res) => {
    res.send('login user -- huang0308, 209410215');
};

const updateUser_15 = async (req, res) => {
    res.send('Update user -- huang0308, 209410215');
};

export {register_15, login_15, updateUser_15};