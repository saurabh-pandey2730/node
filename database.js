import mongoose from "mongoose";

export const connectDB = async()=>{
       try {
        await mongoose.connect('mongodb://localhost:27017/skillected')
        console.log('database connected')
       } catch (error) {
         console.log('error in connecting' , error)
         process.exit(1)
       }

 }