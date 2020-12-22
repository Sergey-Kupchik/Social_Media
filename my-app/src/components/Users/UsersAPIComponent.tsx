import React from 'react';
import {UsersType} from '../../redux/usersReducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import { Redirect } from 'react-router-dom';


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


    isAuth: boolean



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
        if (!this.props.isAuth) {
            return <Redirect to="/lang" />}
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users} currentPage={this.props.currentPage}
                   onSetNewCurrentPage={this.onSetNewCurrentPage} pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount} unfollowUser={this.props.unfollowUser} followUser={this.props.followUser} followingInProgress={this.props.followingInProgress}/>
        </>

    }
}