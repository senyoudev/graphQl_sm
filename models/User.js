import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    email:String,
    createdAt:String
})


const User = mongoose.model('users',userSchema)

export default User