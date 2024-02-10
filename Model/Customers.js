import mongoose from "mongoose";
const CustomersModel= mongoose.Schema({
  Name:{
        type:String,
    },
    Contact:{
        type:Number
    },
    serve:{
        type: [String],
    }

   
})
export default mongoose.model('Customers' ,CustomersModel)