import { combineReducers } from 'redux'
import userReducer from './userReducer.js'
import productReducer from "./productReducer.js";
import basketReducer from './basketReducer.js'

export default combineReducers({
    userReducer,
    productReducer,
    basketReducer
})