import React from 'react';
import {Header} from './Header';
import {RootState} from '../../redux/storeRedux';
import {connect} from 'react-redux';
import {
    AuthUserData,
    logOutAuthUserData, setUserProfile,
} from '../../redux/authReducer';
import axios from 'axios';
import {UsersAPI} from '../../api/socialNetworkAPI';


type  HeaderContainerPropsType = {
    registeredUserId: null | string,
    registeredUserLogin: null | string,
    isAuth: boolean,
    isFetching: boolean,

    logOutAuthUserData: () => void,
    setUserProfile: () => void,
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setUserProfile()
    }
    render() {
        return <Header isAuth={this.props.isAuth} isFetching={this.props.isFetching}
                       registeredUserId={this.props.registeredUserId}
                       registeredUserLogin={this.props.registeredUserLogin}
                       logOutAuthUserData={this.props.logOutAuthUserData}/>;
    }
}

const mapStateToProps = (state: RootState) => ({
    registeredUserId: state.auth.id,
    registeredUserLogin: state.auth.login,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
})

export default connect(mapStateToProps, {logOutAuthUserData, setUserProfile,})(HeaderContainer)