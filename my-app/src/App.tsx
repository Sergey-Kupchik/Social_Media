import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogsPagePropsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./redux/state";

type AppStatePropsType = {
    store: StoreType
}

const App: React.FC<AppStatePropsType>= (props)=> {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs stateForDialogsPage={props.store.getState.bind(props.store)().dialogsPage} dispatch={props.store.dispatch.bind(props.store)}/>}/>


                <Route path='/profile' render={() => <Profile postsState={props.store.getState.bind(props.store)().profilePage} dispatch={props.store.dispatch.bind(props.store)}/>}/>

                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
