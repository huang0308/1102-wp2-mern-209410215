import mongoose  from "mongoose";
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema_15 = new mongoose.Schema({
    name:{
        type: String,
        requires: [true, 'please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
   email:{
       type: String,
       requires: [true, 'please provide email'],
       validate: {
           validator:validator.isEmail,
           message: 'please provide valid email',
       },
       unique: true,
   } ,
   password:{
    type: String,
    requires: [true, 'please provide password'],
    minlength: 6,
    select: false,
    },
    lastName:{
        type: String,
        trim: true,
        maxlength: 30,
        default: 'lastName',
    },
    location:{
        type: String,
        trim: true,
        maxlength: 30,
        default: 'my city',
    },
});

UserSchema_15.pre('save', async function () {
    console.log('password',this.password);
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema_15.methods.createJWT = function () {
    // console.log('this', this);
    return jwt.sign({ userId: this._id} , 
    'jwtsecret', {expiresIn: '1d'});
};

export default mongoose.model('User_15',UserSchema_15);