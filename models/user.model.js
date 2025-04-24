import { userData } from "../data.js";


function getAllUsers(){
    return userData;
}

function getUserByID(id){
          return userData.find(user => user.id == id);  
        // return userData[id-1]
     
}

function addUser(newUser) {
        userData.push(newUser);
}

export {getAllUsers,getUserByID,addUser}