import { userData } from "../data.js";
import UserModel from "./user.schema.js";

 async function getAllUsers(){
//     return userData;  
         const users = await UserModel.find()  
         return users
}

function getUserByID(id){
          return userData.find(user => user.id == id);  
        // return userData[id-1]
     
}

 async function addUser(newUser) {
     
             let user = new UserModel(newUser)  
              await user.save()  
              
}

 function UpdateUser(id , data){
        for(let user of userData){
              if(user.id == id){
                Object.assign(user,data)
                return user
              }  
        }
 } 
 function deleteUser(id){
        userData.splice(userData.findIndex(user=>user.id==id),1) 
        
 }

export {getAllUsers,getUserByID,addUser,UpdateUser,deleteUser}