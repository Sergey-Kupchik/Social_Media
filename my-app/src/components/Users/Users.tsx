import React from 'react';
import ReactPaginate from 'react-paginate';
import userPhoto from '../../assets/images/user.png';
import styles from './Users.module.css';
import {follow_user, unfollow_user, UsersType} from '../../redux/usersReducer';
import {FaUserAlt} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {socialNetworkAPI} from '../../api/socialNetworkAPI';


type UsersPropsType = {
    users: Array<UsersType>
    totalCount: number
    pageSize: number
    currentPage: number
    follow_user: (userID: number | string) => void
    unfollow_user: (userID: number | string) => void
    onSetNewCurrentPage: (pageNumber: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {


    let pagesQuantity = Math.ceil(props.totalCount / props.pageSize);
    let pagesArray = [];
    for (let i = 1; i <= pagesQuantity; i++) {
        pagesArray.push(i)
    }
    let p = new Promise(function (resolve, reject) {
        setTimeout(() => resolve('done'), 1000)
    })

    return <>            <ReactPaginate pageCount={pagesQuantity}
                                        marginPagesDisplayed={1}
                                        pageRangeDisplayed={2}
                                        initialPage={props.currentPage}
                                        onPageChange={(p) => {
                                            props.onSetNewCurrentPage(p.selected)
                                        }}
                                        breakClassName={styles.breakMe}
                                        containerClassName={styles.pagination}
                                        activeClassName={styles.active}

    />

        <div>{props.users.map((u, i) => <div key={i}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={(u.photos.small == undefined ? userPhoto : u.photos.small)}
                         alt="Photo of user"
                         className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {u.followed ?
                    <button onClick={() => {

                        socialNetworkAPI.unfollowUser(u.id).then((data) => {
                            if (data.resultCode == 0) {
                                props.follow_user(u.id)
                            }
                        })
                    }}>Unfollow</button> :

                    <button onClick={() => {

                        socialNetworkAPI.foolowUser(u.id, {}).then((data) => {
                            if (data.resultCode == 0) {
                                debugger
                                props.unfollow_user(u.id)
                            }
                        })
                    }}>Following</button>}

                    </div>
                    </span>
            <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                    <div>u.location.country</div>
                    <div>u.location.city</div>
                    </span>
                    </span>
        </div>)}
        </div>
    </>
}