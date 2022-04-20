import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sideBarReduser from './sideBarReduser';
import usersReduser from './usersReduser';
import authReduser from "./authReduser";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReduser from "./appReduser";



let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sideBar: sideBarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser
});

let store = createStore(redusers, applyMiddleware(thunk));


window.store = store;
export default store;