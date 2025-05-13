import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

 name: {type:String, required:false},
 email: String,
 age:Number,

})

     let UserModel = mongoose.model('Users', userSchema) 
     export default UserModel 