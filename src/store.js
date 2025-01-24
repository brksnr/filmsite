import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import filmReducer from "./reducers/filmReducer";
import { thunk } from "redux-thunk";



const rootReducer = combineReducers({
    films: filmReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;