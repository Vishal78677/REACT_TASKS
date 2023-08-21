export const CLEAR_ALL_USERS = "CLEAR_ALL_USERS";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const EDIT_USER_STATUS = "EDIT_USER_STATUS";
export const AUTO_SEARCH_DATA = "AUTO_SEARCH_DATA";



export const clearAllUsers = ()=>{
    return{
        type: CLEAR_ALL_USERS,
    }
}  



export const addUser = (data)=> {

    return{
        type: ADD_USER,
        payload: data
    }

} 


export const deleteUser = (id)=>{

    return{
         
        type: DELETE_USER,
        payload: id

    }
 


}

export const editUser = (user) => {

    return{
        type: EDIT_USER,
        payload: user
    }

}


// export const editUserStatus = (data)=>{

//     return{

//         type: EDIT_USER_STATUS,
//         payload: data,
//     }
   


// }


export const autoSearchData = (textValue)=>{
    return{
        type: AUTO_SEARCH_DATA,
        payload: textValue
    }
}