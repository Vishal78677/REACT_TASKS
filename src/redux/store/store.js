import { combineReducers, createStore } from "redux";
import TodoReducer from "../reducers/todoReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import calReducer from "../reducers/calReducer";
import userReducer from "../reducers/usersReducer";

const rootReducer = combineReducers({
  todo: TodoReducer,
  calHistroy: calReducer,
  users: userReducer,
});

const persistConfig = {
  key: "auth-key",
  storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    pReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);

export default store;
