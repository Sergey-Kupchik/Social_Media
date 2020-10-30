import React from 'react';
import {UsersPagePropsType, UsersType} from '../../redux/usersReducer';
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';


type UsersPropsType = {
    users: Array<UsersType>
    followUser: (userID: number | string) => void
    unfollowUser: (userID: number | string) => void
    set_users: (users: Array<UsersType>) => void
}


export class Users extends React.Component<UsersPropsType> {
    constructor(props:UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.set_users(response.data.items));
    }

    render() {
        return <>
            <div>{this.props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={(u.photos.small == undefined ? userPhoto : u.photos.small)} alt="Photo of user"
                     className={styles.userPhoto}/>
            </div>
            <div>
                {u.followed ? <button onClick={() => {
                        this.props.followUser(u.id)
                    }}>Unfollow</button> :
                    <button onClick={() => {
                        this.props.unfollowUser(u.id)
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
        </>;
    }
}