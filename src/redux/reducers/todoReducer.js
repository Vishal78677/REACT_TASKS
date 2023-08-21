import { ADD_TODO, CLEAR_ALL, DELETE_TODO, EDIT_TODO, SET_SHOW } from "../actions/action";


const initialState = {
 
    todos: [
        {
            id: 1,
            todo: "Eat apple",
          },
          {
            id: 2,
            todo: "going gym",
          },
    ],

    show: false,


}

const TodoReducer = (state = initialState, action)=> {



    if(action.type === ADD_TODO){

        const updateId  = action.payload.updateId;
        const todo = action.payload.todo;
        const id = action.payload.id;
         
        const findTodo = state.todos.find((todo)=>{
            return todo.id === updateId;
        });
        

        if(findTodo){
             
            findTodo.todo = todo;
            findTodo.id = id;
            console.log("updated")
            
            return{
                ...state,
                 show: false,
            }


        }else{
          
            console.log("added")

            return{
                ...state,
                todos : [...state.todos , { id , todo  } ],

            }
        }
         


    }


     if(action.type === EDIT_TODO){


        return{
            ...state,
            show: action.payload,
        }

     }
  
     
    if(action.type === DELETE_TODO){

        const id = action.payload

        const filteredTodos = state.todos.filter((todo) => {
            return todo.id !== id;
          });

          return{
            ...state,
            todos : filteredTodos
          }

    }


    if(action.type === SET_SHOW){

        return{
            ...state,
            show: action.payload
        }

    }

    if(action.type === CLEAR_ALL){

        return{
            ...state,
            todos: [],
        }

    }
  
     return state;


} 


export default TodoReducer;