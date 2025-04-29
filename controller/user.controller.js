import { getAllUsers ,getUserByID ,addUser, UpdateUser ,deleteUser } from "../models/user.model.js";


const fetchAllUsers=(req,res)=>{
       const users =   getAllUsers()
         res.render('users', {users})
       // res.send(users);
}
const fetchUserByID=(req,res)=>{
        //  console.log("hello")
          const user = getUserByID(req.params.id)  
          res.render('profile',{user})
       //   res.send(user)
}
 const createUser=(req,res)=>{
           console.log("body",req.body)   
        addUser(req.body)
       //  res.send("user created successfully")
       res.redirect('/user')

 }
  const updatingUser=(req,res)=>{
           const updatedUser =   UpdateUser(req.params.id , req.body) 
           res.send('user updated successfully', updatedUser)
  }
  const fetchUsersData = (req,res)=>{
       res.render('index')  
  } 
   const deleteUserByID=(req,res)=>{
       deleteUser(req.params.id) 
       res.send('user deleted succesfully')
   }

export{fetchAllUsers ,fetchUserByID ,createUser,updatingUser,fetchUsersData,deleteUserByID}