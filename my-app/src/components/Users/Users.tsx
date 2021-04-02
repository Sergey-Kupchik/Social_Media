import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Users.module.scss';
import {UsersType} from '../../redux/usersReducer';
import {UserCard} from './UserCard/UserCard';
import {Paginator} from '../common/Paginator/Paginator';


type UsersPropsType = {
    users: Array<UsersType>
    totalCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<string>
    onSetNewCurrentPage: (pageNumber: number) => void
    followUser: (userID: string) => void
    unfollowUser: (userID: string) => void


}

// const MyPosts =React.memo(function MyPosts(props:MyPostsPropsType)

export const Users = React.memo(function MyPosts(props: UsersPropsType) {
    return <div className={styles.wrapper}>
        <Paginator {...props}/>
        <div className={styles.container}>{props.users.map((u, i) =>
            <UserCard user={u} key={i} followingInProgress={props.followingInProgress} followUser={props.followUser}
                      unfollowUser={props.unfollowUser}/>)}
        </div>
    </div>
})