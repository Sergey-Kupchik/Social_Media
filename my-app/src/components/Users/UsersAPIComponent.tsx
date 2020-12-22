import React from 'react';
import {
    followUser,
    set_users_currentPageSUCCESS,
    setUpAllUsers, unfollowUser,
    UsersPagePropsType,
    UsersType
} from '../../redux/usersReducer';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {socialNetworkAPI} from '../../api/socialNetworkAPI';


export type UsersAPIComponentPropsType = {
    users: Array<UsersType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
    onSetNewCurrentPage: (pageNumber: number) => void
    toggle_isFetching: (isFetching: boolean) => void
    setUpAllUsers:(pageSize: number, currentPage: number)=>void
    setUpCurrentPage:(pageSize: number, currentPage: number,pageNumber: number)=>void
    followUser:(userID: string) => void
    unfollowUser:(userID: string) => void



}


export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
    componentDidMount() {
        this.props.setUpAllUsers(this.props.pageSize, this.props.currentPage)
    }


// on click to page number and update current page with axios request
    onSetNewCurrentPage = (pageNumber: number) => {
        this.props.setUpCurrentPage(this.props.pageSize, this.props.currentPage,pageNumber)
    }



    render() {
debugger
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users} currentPage={this.props.currentPage}
                   onSetNewCurrentPage={this.onSetNewCurrentPage} pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount} unfollowUser={this.props.unfollowUser} followUser={this.props.followUser} followingInProgress={this.props.followingInProgress} />
        </>

    }
}