import { getAllUsers ,getUserByID ,addUser } from "../models/user.model.js";


const fetchAllUsers=(req,res)=>{
       const users =   getAllUsers()
       res.send(users);
}
const fetchUserByID=(req,res)=>{
        //  console.log("hello")
          const user = getUserByID(req.params.id)  
         res.send(user)
}
 const createUser=(req,res)=>{
           console.log(req.body)   
        addUser(req.body)
        res.send("user created successfully")
 }

export{fetchAllUsers ,fetchUserByID ,createUser}