import React from 'react';
import {UsersPagePropsType, UsersType} from '../../redux/usersReducer';
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
    follow_user: (userID: number | string) => void
    unfollow_user: (userID: number | string) => void
    onSetNewCurrentPage: (pageNumber: number) => void
    set_users: (users: Array<UsersType>) => void
    set_users_total_count: (totalCount: number) => void
    set_users_currentPage: (currentPage: number) => void
    toggle_isFetching: (isFetching: boolean) => void
    toggle_followingInProgress:(isFetching: boolean, userId: string)=>void
}


export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
    componentDidMount() {
        this.props.toggle_isFetching(true);
        socialNetworkAPI.getUsers(this.props.pageSize, this.props.currentPage).then((data) => {
            this.props.set_users_total_count(data.totalCount)
            this.props.set_users(data.items)
            this.props.toggle_isFetching(false);
        })


    }
    disableButton =(isFetching: boolean, userId: string)=>{
        this.props.toggle_followingInProgress(isFetching, userId)
    }

// on click to page number and update current page with axios request
    onSetNewCurrentPage = (pageNumber: number) => {
        this.props.toggle_isFetching(true);
        this.props.set_users_currentPage(pageNumber)
        socialNetworkAPI.getUsers(this.props.pageSize, this.props.currentPage).then((data) => {
            this.props.set_users_total_count(data.totalCount)
            this.props.set_users(data.items)
            this.props.toggle_isFetching(false);
        })
    }



    render() {

        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users} currentPage={this.props.currentPage} follow_user={this.props.follow_user}
                   onSetNewCurrentPage={this.onSetNewCurrentPage} pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount} unfollow_user={this.props.unfollow_user} disableButton={this.disableButton} followingInProgress={this.props.followingInProgress}/>
        </>

    }
}