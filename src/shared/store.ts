import { createStore, applyMiddleware, Middleware } from "redux";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { loginReducer } from "../shared/reducers/login";

// create the redux store and attach the auth reducer
const createStoreWithMiddleware: any = applyMiddleware(thunkMiddleware)(createStore);
export const store: any = createStoreWithMiddleware(combineReducers({
  loginReducer,
}));