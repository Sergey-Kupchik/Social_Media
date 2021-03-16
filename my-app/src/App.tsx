import React, {ComponentType} from 'react';
// import './App.css';
import styles from './App2.module.scss';
import Sidebar from './components/Navbar/Sidebar';
import {Route, withRouter} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginContainer} from './components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {RootState} from './redux/storeRedux';
import {authorizeUser} from './redux/appReducer';
import {Preloader} from './components/common/Preloader/Preloader';

type AppStatePropsType = {
    authorizeUser: Function
    authorize: boolean
}

class App extends React.Component<AppStatePropsType> {
    componentDidMount() {
        this.props.authorizeUser()
    }

    render() {
        // if (!this.props.authorize){
        //     return <Preloader/>
        // }
        return (
            <div className={styles.wrapper}>
                <HeaderContainer/>
                <div className={styles.container}>
                    <Sidebar/>
                    <div className={styles.app_wrapper_content}>
                        <div className={styles.app_content}>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/news' component={News}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/users' component={UsersContainer}/>
                            <Route path='/lang' component={LoginContainer}/>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}></div>
            </div>


        );
    }
}

// map state to props
const mstp = (state: RootState) => ({
    authorize: state.app.authorize
})
export default compose<ComponentType>(
    withRouter,
    connect(mstp, {authorizeUser}))(App)


