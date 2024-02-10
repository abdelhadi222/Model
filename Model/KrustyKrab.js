import mongoose from "mongoose";
const KrustModel= mongoose.Schema({
   Location:{
        type:String,
    },
    Phone:{
        type:Number
    },
    OpeningHours:{
        type:Number
    },
    CloseHours:{
         type:Number
    }
})
export default mongoose.model('Krust' ,KrustModel)