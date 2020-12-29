import React from 'react';
import Profile, {ProfileType} from './Profile';
import {connect} from 'react-redux';
import {RootState} from '../../redux/storeRedux';
import {setNewProfile} from '../../redux/profileReducer';
import axios from 'axios';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {withAuthRedirect} from '../HOCs/withAuth';


type URLMatchParamsType = { userID: string }

class ProfileContainer extends React.Component<ProfilePropsType & RouteComponentProps<URLMatchParamsType>> {
    componentDidMount() {


        let currentUserID: string = this.props.match.params.userID
        if (!currentUserID) {
            currentUserID = '12113'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + currentUserID,{
            withCredentials: true,
        }).then(response => {
            this.props.setNewProfile(response.data)
        })
    }

// for link to my profilew
    // componentDidUpdate(prevProps: any) {
    //    let prev = prevProps
    //     let nowProps = this.props
    //     debugger
    // }




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

const ProfileContainerWithURLData = withAuthRedirect(withRouter(ProfileContainer))

export default connect(mapStateToProps, {setNewProfile})(ProfileContainerWithURLData)


