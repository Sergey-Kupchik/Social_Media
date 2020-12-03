import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

type AppStatePropsType = {}

const App: React.FC<AppStatePropsType> = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content-container">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>


                    <Route path='/profile/:userID' render={() => <ProfileContainer/>}/>

                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' component={UsersContainer}/>
                </div>
            </div>
        </div>
    );
}

export default App;
