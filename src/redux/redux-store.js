import { combineReducers, createStore } from "redux";
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sideBarReduser from './sideBarReduser';




let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sideBar: sideBarReduser
});

let store = createStore(redusers);


window.store = store;
export default store;