import { ADD_CAL_HISTORY, CLEAR_HISTORY } from "../actions/calActions";

const initialState = {
    history: [  ],
}


const calReducer = (state = initialState, action) => {

    if(action.type === ADD_CAL_HISTORY){
        

        return{
            ...state,
            history: [...state.history , action.payload]
        }

    }


    if(action.type === CLEAR_HISTORY){

        return{
            ...state,
            history: [],
        }

    }

    return state;
}

export default calReducer;