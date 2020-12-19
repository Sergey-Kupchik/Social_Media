import React from 'react';
import {Header} from './Header';
import {RootState} from '../../redux/storeRedux';
import {connect} from 'react-redux';
import {
    AuthUserData,
    logOutAuthUserData,
    setAuthUserData,
    toggleIsFetchingInAuthReducer
} from '../../redux/authReducer';
import axios from 'axios';
import {socialNetworkAPI} from '../../api/socialNetworkAPI';


type  HeaderContainerPropsType = {
    registeredUserId: null | string,
    registeredUserLogin: null | string,
    isAuth: boolean,
    isFetching: boolean,
    setAuthUserData: (data: AuthUserData) => void,
    logOutAuthUserData: () => void,
    toggleIsFetchingInAuthReducer: (isFetching: boolean) => void,
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetchingInAuthReducer(true);
        socialNetworkAPI.authMe().then((data) => {
            this.props.setAuthUserData(data)
            this.props.toggleIsFetchingInAuthReducer(false)
        })
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

export default connect(mapStateToProps, {
    setAuthUserData,
    logOutAuthUserData,
    toggleIsFetchingInAuthReducer
})(HeaderContainer)