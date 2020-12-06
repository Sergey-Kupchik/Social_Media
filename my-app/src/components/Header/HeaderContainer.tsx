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


type  HeaderContainerPropsType = {
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(response => {
            console.dir(response.data.data)
            this.props.setAuthUserData(response.data.data)
            this.props.toggleIsFetchingInAuthReducer(false);
        })
    }


    render() {
        return <Header isAuth={this.props.isAuth} isFetching={this.props.isFetching}
                       registeredUserLogin={this.props.registeredUserLogin} logOutAuthUserData={this.props.logOutAuthUserData}/>;
    }
}

const mapStateToProps = (state: RootState) => ({
    registeredUserLogin: state.auth.login,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
})

export default connect(mapStateToProps, {
    setAuthUserData,
    logOutAuthUserData,
    toggleIsFetchingInAuthReducer
})(HeaderContainer)