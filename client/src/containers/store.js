import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index.js";

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState);

export default store;
