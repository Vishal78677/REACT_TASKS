import { ADD_USER, AUTO_SEARCH_DATA, CLEAR_ALL_USERS, DELETE_USER, EDIT_USER } from "../actions/userActions";

const initialState = {
    users: [],
    singleUser: {},
}

const userReducer = (state=initialState, action) => {

 

    if(action.type === ADD_USER){

        // const id = action.payload.id;
        // const firstName = action.payload.firstName;
        // const userName = action.payload.userName;
        // const gender = action.payload.gender;
        // const dob = action.payload.dob;
        // const city = action.payload.city;
        // const email = action.payload.email;
        // const country =  action.payload.country;
        // const password = action.payload.password;
        // const co_password = action.payload.co_password;

        //  const findedUser = state.users.find((user)=>{

        //     return user.id === action.payload.uniqueId

        //  })

        
              
            return{
                ...state,
                users:[...state.users , action.payload]
            }

            
        

        //  if(findedUser){

        //              findedUser.id = id;
        //             findedUser.firstName = firstName;
        //             findedUser.userName = userName;
        //             findedUser.gender = gender;
        //             findedUser.dob = dob;
        //             findedUser.city = city;
        //             findedUser.email = email;
        //             findedUser.country = country;
        //             findedUser.password = password;
        //             findedUser.co_password = co_password;
        
        //             return{
        //                 ...state,
        //             }



        //  }else{

        //      return{
        //          ...state,
        //          users:[...state.users , action.payload]
        //      }

        //  }
    }


    if(action.type === DELETE_USER){

        const userId = action.payload;

        const filterUsers = state.users.filter((user)=> {
            return user.id !== userId;
        })

        return{
            ...state,
            users: filterUsers
        }

    }


    if(action.type === EDIT_USER){

        // // const id = action.payload.id;
        // const name = action.payload.userName;
        // const userName = action.payload.userName;
        // const gender = action.payload.gender;
        // const dob = action.payload.dob;
        // const city = action.payload.city;
        // const email = action.payload.email;

        // const findedUser = state.users.find((user)=>{
        //     return user.id === action.payload.uniqueId;
        // })

        // console.log(findedUser);

        // if(findedUser){

             
        //     findedUser.id = id;
        //     findedUser.firstName = firstName;
        //     findedUser.userName = userName;
        //     findedUser.gender = gender;
        //     findedUser.dob = dob;
        //     findedUser.city = city;
        //     findedUser.email = email;
        //     findedUser.country = country;
        //     findedUser.password = password;
        //     findedUser.co_password = co_password;

        //     return{
        //         ...state,
        //     }

        // } 

        const { values ,  updateId} = action.payload;
         
        const updatedUsers = state.users.map((user)=>{

            if(user.id === updateId){

                return{
                    ...user,
                    ...values,
                }

            }else{
                return user;
            }

            // return user.id === updateId ? {...user, ...values } : user
        }) 

        return {
            ...state,
            users: updatedUsers,
         }

    }

    if(action.type === AUTO_SEARCH_DATA){

        const filteredUser = state.users.find((user)=>{
            return user.userName.toLowerCase() === action.payload.toLowerCase();
        })

        return{
            ...state,
            singleUser: filteredUser,
        }

    }



    if(action.type === CLEAR_ALL_USERS){

        return{
            ...state,
            users: [],
        }

    }
    return state;
}

export default userReducer;