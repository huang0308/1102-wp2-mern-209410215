import mongoose  from "mongoose";

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

export default mongoose.model('User_15',UserSchema_15);