import { getAllUsers ,getUserByID ,addUser, UpdateUser ,deleteUser } from "../models/user.model.js";


const fetchAllUsers= async(req,res)=>{
       const users =  await getAllUsers()
         res.render('users', {users}) 
        // console.log(users)
      //  res.send(users);
}
const fetchUserByID=(req,res)=>{
        //  console.log("hello")
          const user = getUserByID(req.params.id)  
          res.render('profile',{user})
       //   res.send(user)
}
 const createUser=async(req,res)=>{
           console.log(req.body)   
        await addUser(req.body)
        res.send("user created successfully") 
        
        // res.redirect('/user')
        
        
      }
      const updatingUser=(req,res)=>{
        const updatedUser =   UpdateUser(req.params.id , req.body) 
        //  res.send('user updated successfully', updatedUser) 
        res.redirect('/user')
  }
   const deleteUserByID=(req,res)=>{
       deleteUser(req.params.id) 
      //  res.send('user deleted succesfully') 
      res.redirect('/user')
   }

export{fetchAllUsers ,fetchUserByID ,createUser,updatingUser,deleteUserByID}