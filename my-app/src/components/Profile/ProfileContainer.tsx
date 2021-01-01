import React, {ComponentType} from 'react';
import Profile, {ProfileType} from './Profile';
import {connect} from 'react-redux';
import {RootState} from '../../redux/storeRedux';
import {setNewProfile, setUserStatus, updateUserStatus} from '../../redux/profileReducer';
import axios from 'axios';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../HOCs/withAuth';
import {compose} from 'redux';


type URLMatchParamsType = { userID: string }

class ProfileContainer extends React.Component<ProfilePropsType & RouteComponentProps<URLMatchParamsType>> {
    componentDidMount() {


        let currentUserID: string = this.props.match.params.userID
        if (!currentUserID) {
            currentUserID = '12113'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + currentUserID, {
            withCredentials: true,
        }).then(response => {
            this.props.setNewProfile(response.data)
            this.props.setUserStatus(currentUserID)
        })
    }

    render() {

        return <Profile {...this.props}/>

    }
}

type ProfilePropsType = {
    profile: ProfileType | null
    textAreaForUserStatus: string
    status: string
    setNewProfile: (profile: ProfileType) => void
    setUserStatus: (id: string) => void
}
const mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        textAreaForUserStatus: state.profilePage.textAreaForUserStatus,
        status: state.profilePage.status,

    }
}


export default compose<ComponentType>(withAuthRedirect, withRouter, connect(mapStateToProps, {
    setNewProfile,
    setUserStatus,
    updateUserStatus,
}))(ProfileContainer)