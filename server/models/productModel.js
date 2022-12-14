import mongoose from "mongoose";
const reviewSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        
    },
    comment:{
        type:String,
        required:true,
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    }

})
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
      

    },
   description:{
        type:String,
        required:true
    },
    review:[reviewSchema],
    rating:{
        type:Number,
        required:true,
        
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
        
    },
    price:{
        type:Number,
        required:true,
        default:0
        
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
        
    }


},
{
    timestamps:true
}
)
 const Product=mongoose.model('Product',productSchema)
 export default Product