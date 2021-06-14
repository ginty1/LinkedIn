import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
// createstore-> create redux store that holds state tree
//rootreducer-. turns an object whose values are different reducer functions, into a single reducer function.
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
