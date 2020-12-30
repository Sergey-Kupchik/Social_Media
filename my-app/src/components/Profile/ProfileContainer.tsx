import React, {ComponentType} from 'react';
import Profile, {ProfileType} from './Profile';
import {connect} from 'react-redux';
import {RootState} from '../../redux/storeRedux';
import {setNewProfile} from '../../redux/profileReducer';
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
        })
    }

    render() {

        return <Profile {...this.props}/>

    }
}

type ProfilePropsType = {
    profile: ProfileType | null
    setNewProfile: (profile: ProfileType) => void
}
const mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile
    }
}


export default compose<ComponentType>(withAuthRedirect, withRouter, connect(mapStateToProps, {setNewProfile}))(ProfileContainer)