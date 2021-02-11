import React from 'react';
import {Header} from './Header';
import {RootState} from '../../redux/storeRedux';
import {connect} from 'react-redux';
import {AuthUserData, logoutUser, setUserProfile,} from '../../redux/authReducer';
import axios from 'axios';
import {UsersAPI} from '../../api/socialNetworkAPI';
import {Dispatch} from 'redux';
import {getRegisteredUserId, getRegisteredUserLogin, getIsAuth, getIsFetching} from '../util/reduxSelector';


type  HeaderContainerPropsType = {
    registeredUserId: null | string,
    registeredUserLogin: null | string,
    isAuth: boolean,
    isFetching: boolean,
    logoutUser: () => (dispatch: Dispatch) => void,
    setUserProfile: () => void,
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return <Header isAuth={this.props.isAuth} isFetching={this.props.isFetching}
                       registeredUserId={this.props.registeredUserId}
                       registeredUserLogin={this.props.registeredUserLogin}
                       logoutUser={this.props.logoutUser}/>;
    }
}

const mapStateToProps = (state: RootState) => ({
    registeredUserId: getRegisteredUserId(state),
    registeredUserLogin: getRegisteredUserLogin(state),
    isAuth: getIsAuth(state),
    isFetching: getIsFetching(state),
})

export default connect(mapStateToProps, {logoutUser,})
    //@ts-ignore
    (HeaderContainer)