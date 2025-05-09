import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

 name: {type:String, required:true},
 email: String,
 age:Number,

})

     let UserModel = mongoose.model('Users', userSchema) 
     export default UserModel 