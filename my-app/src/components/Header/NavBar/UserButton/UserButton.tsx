import React, {useEffect, useState} from 'react';
import anonUser from '../../../../assets/images/user.png';
import okLogo from '../../../../assets/images/okLogo.png';
import styles from './UserButton.module.scss';
import {NavLink} from 'react-router-dom';


type UserButtonPropsType = {
    userPhoto: string|null
    userId: null | string,
    isAuth: boolean,
    userLogin: null | string,
    registeredUserId: null | string,

}

export const UserButton = React.memo(function (props: UserButtonPropsType) {
    const {userPhoto,userId,isAuth,userLogin, registeredUserId}=props
    return (
        <NavLink className={styles.dropdown_toggle} type="button" data-toggle="dropdown" aria-expanded="false"
                 to={`/profile/${registeredUserId===userId?"":userId}`}>
                                    <span className={styles.media}>
                                        <span className={styles.item_img}>
                    <img src={(userPhoto? userPhoto : anonUser)}
                         alt="Photo of user"
                         className={styles.userPhoto}/>
                                            <span className={styles.acc_verified}><img src={okLogo}/></span>
                                        </span>
                                        <span className={styles.media_body}>
                                            {isAuth ? userLogin : <>Profile</>}
                                        </span>
                                    </span>
        </NavLink>)
})

