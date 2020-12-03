import React from 'react';
import {UsersPagePropsType, UsersType} from '../../redux/usersReducer';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';


export type UsersAPIComponentPropsType = {
    users: Array<UsersType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    follow_user: (userID: number | string) => void
    unfollow_user: (userID: number | string) => void
    onSetNewCurrentPage: (pageNumber: number) => void
    set_users: (users: Array<UsersType>) => void
    set_users_total_count: (totalCount: number) => void
    set_users_currentPage: (currentPage: number) => void
    toggle_isFetching: (isFetching:boolean) => void
}


export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
    componentDidMount() {
        this.props.toggle_isFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.set_users_total_count(response.data.totalCount)
            this.props.set_users(response.data.items)
            this.props.toggle_isFetching(false);

        })
    }

// on click to page number and update current page with axios request
    onSetNewCurrentPage = (pageNumber: number) => {
        this.props.toggle_isFetching(true);
        this.props.set_users_currentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.set_users_total_count(response.data.totalCount)
            this.props.set_users(response.data.items)
            this.props.toggle_isFetching(false);
        })
    }

    render() {

        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users} currentPage={this.props.currentPage} follow_user={this.props.follow_user}
                   onSetNewCurrentPage={this.onSetNewCurrentPage} pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount} unfollow_user={this.props.unfollow_user}/>
        </>

    }
}