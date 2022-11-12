import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import fetchReducer from "./fetchReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(fetchReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store