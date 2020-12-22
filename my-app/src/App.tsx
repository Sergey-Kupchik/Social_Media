import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';

type AppStatePropsType = {}

const App: React.FC<AppStatePropsType> = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className="content-container">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>


                    <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>

                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/lang' component={Login}/>
                </div>
            </div>
        </div>
    );
}

export default App;
