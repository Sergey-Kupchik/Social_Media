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
import {showTextInTextArea, StatePropsType} from "./redux/state";

type AppStatePropsType = {
    state: StatePropsType
    addMessage: (message:string)=>void
    addPost: ()=>void
    showTextInTextArea: showTextInTextArea
}

function App(props: AppStatePropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage}/>}/>


                <Route path='/profile' render={() => <Profile postsState={props.state.profilePage} addPost={props.addPost} showTextInTextArea={props.showTextInTextArea} />}/>



                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
