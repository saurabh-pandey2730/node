import { userData } from "../data.js";
import UserModel from "./user.schema.js";

 async function getAllUsers(){
//     return userData;  
         const users = await UserModel.find()  
         return users
}

 async function getUserByID(id){
          return  await UserModel.findById(id);
        // return userData[id-1]
     
}

 async function addUser(newUser) {
     
             let user = new UserModel(newUser)  
              await user.save()  
              
}

  async function UpdateUser(id , data){
    const updated = await UserModel.findByIdAndUpdate(id, data) 
       return updated 
 } 
 async function deleteUser(id){
        // userData.splice(userData.findIndex(user=>user.id==id),1) 
         console.log(id)
      await UserModel.findByIdAndDelete(id)
        
        return 

        
 }

export {getAllUsers,getUserByID,addUser,UpdateUser,deleteUser}