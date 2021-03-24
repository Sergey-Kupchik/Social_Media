import React from 'react';
import {UsersType} from '../../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../../assets/images/user.png';
import cover_1 from '../../../assets/images/cover_1.jpg';
import cover_2 from '../../../assets/images/cover_2.jpg';
import cover_3 from '../../../assets/images/cover_3.jpg';
import cover_4 from '../../../assets/images/cover_4.jpg';
import cover_5 from '../../../assets/images/cover_5.jpg';
import cover_6 from '../../../assets/images/cover_6.jpg';
import cover_7 from '../../../assets/images/cover_7.jpg';
import cover_8 from '../../../assets/images/cover_8.jpg';
import styles from './UserCard.module.scss';

type UserCardPropsType = {
    user: UsersType
    followingInProgress: Array<string>
    followUser: (userID: string) => void
    unfollowUser: (userID: string) => void
}

export const UserCard = React.memo(function UserCard(props: UserCardPropsType) {
    const backgroundPhot=()=>{
        const backArray = [cover_1,cover_2,cover_3,cover_4,cover_5,cover_6,cover_7,cover_8]
        const randomBackground = ()=> Math.floor(Math.random() * backArray.length)
        return backArray[randomBackground()]
    }
    const divStyle = {
        backgroundImage: 'url(' + backgroundPhot() + ')',
    }


    return(
        <div className={styles.widget_author}>
            <div className={styles.widget_heading} style={divStyle}>
                <NavLink to={'/profile/' + props.user.id}>
                    <img src={(props.user.photos.small == undefined ? userPhoto : props.user.photos.small)}
                         alt="Photo of user"
                         className={styles.userPhoto}/>
                </NavLink>
                <div className={styles.btns}>
                    {props.user.followed ?
                        <button className={styles.btn_primary} disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.unfollowUser(props.user.id)
                        }}>Unfollow</button> :

                        <button className={styles.btn_secondary} disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.followUser(props.user.id)
                        }}>Following</button>}

                </div>
            </div>
            <div className={styles.widget_main}>
                <h4 className={styles.widget_main_name}>{props.user.name}</h4>
                <div className={styles.widget_main_status} >{props.user.status ? `@${props.user.status}` : 'No status'}</div>
            </div>
        </div>
    )
})



