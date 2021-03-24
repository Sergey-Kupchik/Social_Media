import React from 'react';
import ReactPaginate from 'react-paginate';
import userPhoto from '../../assets/images/user.png';
import styles from './Users.module.scss';
import {UsersType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import {UsersAPI} from '../../api/socialNetworkAPI';
import {UserCard} from './UserCard/UserCard';


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

export const Users: React.FC<UsersPropsType> = (props) => {


    let pagesQuantity = Math.ceil(props.totalCount / props.pageSize);
    let pagesArray = [];
    for (let i = 1; i <= pagesQuantity; i++) {
        pagesArray.push(i)
    }


    return <div className={styles.wrapper}>
        <ReactPaginate pageCount={pagesQuantity}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={8}
                       initialPage={props.currentPage}
                       onPageChange={(p) => {
                           props.onSetNewCurrentPage(p.selected)
                       }}
                       breakClassName={styles.breakMe}
                       containerClassName={styles.pagination}
                       activeClassName={styles.active}

        />

        <div className={styles.container}>{props.users.map((u, i) =>
                <UserCard user={u} key={i} followingInProgress={props.followingInProgress} followUser={props.followUser}
                          unfollowUser={props.unfollowUser}/>)}
        </div>
    </div>
}