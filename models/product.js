import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName : {
        type: String,
    }, 
    description :{
        type: String,
    },
    price :{
        type: String,
    }
}) 
const product = mongoose.model('products', productSchema)

export default product