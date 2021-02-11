import React, {ComponentType} from 'react';
import Profile, {ProfileType} from './Profile';
import {connect} from 'react-redux';
import {RootState} from '../../redux/storeRedux';
import {
    AddPostAC, getUserProfile,
    setNewProfile,
    setUserStatus,
    showStatusTextInTextareaSuccess,
    updateUserStatus
} from '../../redux/profileReducer';
import axios from 'axios';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../HOCs/withAuth';
import {compose} from 'redux';
import {getIsAuth, getProfile, getRegisteredUserId, getTextAreaForStatus, getUserStatus} from '../util/reduxSelector';


type URLMatchParamsType = { userID: string }

class ProfileContainer extends React.Component<ProfilePropsType & RouteComponentProps<URLMatchParamsType>> {
    componentDidMount() {


        let currentUserID: string = this.props.match.params.userID
        if (!currentUserID) {
            currentUserID = this.props.authorizedUserID
        }

        this.props.getUserProfile(currentUserID)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + currentUserID, {
        //     withCredentials: true,
        // }).then(response => {
        //     this.props.setNewProfile(response.data)
        //     this.props.setUserStatus(currentUserID)
        // })
    }

    render() {

        return <Profile {...this.props} />

    }
}

type ProfilePropsType = {
    authorizedUserID: string
    isAuth: boolean
    profile: ProfileType | null
    textAreaForUserStatus: string
    status: string
    getUserProfile: (id: string) => Function
    showStatusTextInTextareaSuccess: (statusChanging: string) => void
    updateUserStatus: (status: string,) => void


}
const mapStateToProps = (state: RootState) => {
    return {
        profile: getProfile(state),
        textAreaForUserStatus: getTextAreaForStatus(state),
        status: getUserStatus(state),
        authorizedUserID: getRegisteredUserId(state),
        isAuth: getIsAuth(state),
    }
}


export default compose<ComponentType>(withAuthRedirect, withRouter,
    connect(mapStateToProps, {
        getUserProfile, updateUserStatus, showStatusTextInTextareaSuccess,
    }))(ProfileContainer)