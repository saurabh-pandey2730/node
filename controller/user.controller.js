import { getAllUsers ,getUserByID ,addUser, UpdateUser ,deleteUser } from "../models/user.model.js";


const fetchAllUsers= async(req,res)=>{
       const users =  await getAllUsers()
         res.render('users', {users}) 
        // console.log(users)
      //  res.send(users);
}
const fetchUserByID= async(req,res)=>{
        //  console.log("hello")
          const user = await getUserByID(req.params.id)  
          if(user){
            // res.send(user)
            res.render('profile',{user})
          }else{
             res.send('user does not exist')
          }
}
 const createUser=async(req,res)=>{
           console.log(req.body)   
        await addUser(req.body)
        // res.send("user created successfully") 
        
        res.redirect('/user')
        
        
      }
      const updatingUser= async (req,res)=>{
        const updatedUser = await UpdateUser(req.params.id , req.body) 
        //  res.send('user updated successfully', updatedUser) 
        res.redirect('/user')
  }
   const deleteUserByID= async(req,res)=>{
             const user =  await deleteUser(req.params.id) 
      //  res.send('user deleted succesfully') 
      res.redirect('/user')
   }

export{fetchAllUsers ,fetchUserByID ,createUser,updatingUser,deleteUserByID}