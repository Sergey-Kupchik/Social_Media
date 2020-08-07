import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dilogsReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dilogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(reducers);

export default 12;