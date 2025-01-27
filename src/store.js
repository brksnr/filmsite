import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import filmReducer from "./reducers/filmReducer";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducer";



const rootReducer = combineReducers({
    films: filmReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;