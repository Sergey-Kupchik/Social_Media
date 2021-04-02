import React, {ComponentType} from 'react';
import Profile, {ProfileType} from './Profile';
import {connect} from 'react-redux';
import {RootState} from '../../redux/storeRedux';
import {getUserProfile, showStatusTextInTextareaSuccess, updateUserStatus, changePhoto} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../HOCs/withAuth';
import {compose} from 'redux';
import {getIsAuth, getProfile, getRegisteredUserId, getTextAreaForStatus, getUserStatus} from '../util/reduxSelector';


type URLMatchParamsType = { userID: string }

class ProfileContainer extends React.Component<ProfilePropsType & RouteComponentProps<URLMatchParamsType>> {
    refreshProfile () {
        let currentUserID: string = this.props.match.params.userID
        if (!currentUserID) {
            currentUserID = this.props.authorizedUserID
        }
        this.props.getUserProfile(currentUserID)
    }

    componentDidMount() {
this.refreshProfile()
    }
componentDidUpdate(prevProps: Readonly<ProfilePropsType & RouteComponentProps<URLMatchParamsType>>, prevState: Readonly<{}>, snapshot?: any) {
   if (this.props.match.params.userID !=prevProps.match.params.userID) {
       this.refreshProfile()
   }

}

    render() {
        const {status,profile,authorizedUserID,textAreaForUserStatus,showStatusTextInTextareaSuccess,updateUserStatus,changePhoto} = this.props;
        return <Profile status={status}  authorizedUserID={authorizedUserID} profile={profile} showStatusTextInTextareaSuccess={showStatusTextInTextareaSuccess} textAreaForUserStatus={textAreaForUserStatus} updateUserStatus={updateUserStatus}  changePhoto={changePhoto} isOwner={!this.props.match.params.userID }/>

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
    changePhoto: (photo: File) =>void
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
        getUserProfile, updateUserStatus, showStatusTextInTextareaSuccess, changePhoto,
    }))(ProfileContainer)