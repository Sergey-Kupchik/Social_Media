import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./redux/state";
import  {DialoguesContainer} from './components/Dialogs/DialoguesConteiner';




export type AppStatePropsType = {
    // store: StoreType
}

const App: React.FC<AppStatePropsType>= (props)=> {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content-container">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialoguesContainer/>}/>

                    <Route path='/profile' render={() => <Profile/>}/>

                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </div>
    );
}

export default App;