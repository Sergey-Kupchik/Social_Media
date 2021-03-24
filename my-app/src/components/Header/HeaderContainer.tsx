import React from 'react';
import {Header} from './Header';
import {RootState} from '../../redux/storeRedux';
import {connect} from 'react-redux';
import {AuthUserData, downloadUserPhoto, logoutUser, setUserProfile,} from '../../redux/authReducer';
import axios from 'axios';
import {UsersAPI} from '../../api/socialNetworkAPI';
import {Dispatch} from 'redux';
import {
    getRegisteredUserId,
    getRegisteredUserLogin,
    getIsAuth,
    getIsFetching,
    getRegisteredUserPhoto
} from '../util/reduxSelector';


type  HeaderContainerPropsType = {
    registeredUserId: null | string,
    registeredUserLogin: null | string,
    registeredUserPhoto: null | string,
    isAuth: boolean,
    isFetching: boolean,
    logoutUser: () => (dispatch: Dispatch) => void,
    setUserProfile: () => void,
    downloadUserPhoto: (id:null |string) => void,
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
componentDidMount() {
        this.props.downloadUserPhoto(this.props.registeredUserId)
}

    render() {
        return <Header isAuth={this.props.isAuth} isFetching={this.props.isFetching}
                       registeredUserId={this.props.registeredUserId}
                       registeredUserLogin={this.props.registeredUserLogin}
                       logoutUser={this.props.logoutUser} userPhoto={this.props.registeredUserPhoto}/>;
    }
}

const mapStateToProps = (state: RootState) => ({
    registeredUserId: getRegisteredUserId(state),
    registeredUserLogin: getRegisteredUserLogin(state),
    registeredUserPhoto: getRegisteredUserPhoto(state),
    isAuth: getIsAuth(state),
    isFetching: getIsFetching(state),
})

export default connect(mapStateToProps, {logoutUser, downloadUserPhoto})
    //@ts-ignore
    (HeaderContainer)