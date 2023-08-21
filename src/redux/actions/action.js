export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_DELETE";
export const SET_SHOW = "SET_SHOW";
export const CLEAR_ALL = "CLEAR_ALL";


export const addTodo = (data)=>{
    return{
        type : ADD_TODO,
        payload: data,
    }
}

export const deleteTodo = (id)=>{
    return{
        type : DELETE_TODO,
        payload: id,
    }
}

export const editTodo = (data)=>{
    return{
        type : EDIT_TODO,
        payload: data,
    }
}


export const setShow  = (show)=>{
 
    return{
        type: SET_SHOW,
        payload: show
    }

}

export const clearAll = ()=>{
    return{
        type: CLEAR_ALL,
    }
}












