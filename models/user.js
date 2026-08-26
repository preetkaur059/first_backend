import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname: {
        type:String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    age: Number,

    password:String
})


const User = mongoose.model('users', userSchema)

export default User