import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required:true,
        lowercase:true
    },

    password:{
        type:String,
        required: true
    }
})


const User = mongoose.model('users', userSchema)

export default User