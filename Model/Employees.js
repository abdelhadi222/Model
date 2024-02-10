import mongoose from "mongoose";
const EmployeesModel= mongoose.Schema({
   name:{
    type:String,
   },
   Job:{
    type:String
   },
   Salary:{
    type:Number
   },
   serveACustomers:{
        type: [String],
    }

})
export default mongoose.model('Employees' ,EmployeesModel)