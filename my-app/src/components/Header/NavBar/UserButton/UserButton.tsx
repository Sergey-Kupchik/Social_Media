import React from 'react';
import anonUser from '../../../../assets/images/user.png';
import okLogo from '../../../../assets/images/okLogo.png';
import styles from './UserButton.module.scss';
import {NavLink} from 'react-router-dom';


type UserButtonPropsType = {
    userPhoto?: string
    registeredUserId: null | string,
    isAuth: boolean,
    registeredUserLogin: null | string,


}

export const UserButton = React.memo(function (props: UserButtonPropsType) {

    return (
        <NavLink className={styles.dropdown_toggle} type="button" data-toggle="dropdown" aria-expanded="false"
                 to={'/profile/' + props.registeredUserId}>
                                    <span className={styles.media}>
                                        <span className={styles.item_img}>
                    <img src={(props.userPhoto !== undefined ? props.userPhoto : anonUser)}
                         alt="Photo of user"
                         className={styles.userPhoto}/>
                                            <span className={styles.acc_verified}><img src={okLogo}/></span>
                                        </span>
                                        <span className={styles.media_body}>
                                            <span className={styles.item_itle}>
                                            {props.isAuth ? props.registeredUserLogin : <>Profile</>}
                                            </span>
                                        </span>
                                    </span>
        </NavLink>)
})