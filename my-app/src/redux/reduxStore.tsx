import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {diloguesReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: diloguesReducer,
    sidebar: sidebarReducer
})

export let store = createStore(reducers);

export default 12;