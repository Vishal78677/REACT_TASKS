export const ADD_CAL_HISTORY = "ADD_CAL_HISTORY";
export const CLEAR_HISTORY = "CLEAR_HISTORY";
 
export const addCalHistory = (data)=>{
    return{
        type: ADD_CAL_HISTORY,
        payload: data,
    }
}



export const clearHistory = () => {
   
    return{
        type: CLEAR_HISTORY,
        
    }

}
