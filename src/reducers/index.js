import {combineReducers} from 'redux';
import userReducer from './user';
import colaboradoresReducer from "./colaboradores";

export default combineReducers ({
    users: userReducer,
    colaboradores: colaboradoresReducer,
});
