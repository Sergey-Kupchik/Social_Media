import React from 'react';
import styles from './NavBar.module.scss';
import {NavLink} from 'react-router-dom';
import {FaUsers, FaEnvelope, FaUserAlt} from 'react-icons/fa';
import {HeaderPropsType} from '../Header';
import {UserButton} from './UserButton/UserButton';
import {FiLogOut} from 'react-icons/fi';


export const NavBar = React.memo(function NavBar(props: HeaderPropsType) {
    return <ul className={styles.wrapper}>
        <li className={styles.icon_avatar}>
            <UserButton{...props}/>
        </li>
        <li className={styles.icon_messages}>
            <NavLink to="/dialogs">
                <FaEnvelope/>
            </NavLink>
        </li>
        <li className={styles.icon_alerts}>
            <NavLink to="/users">
                <FaUsers/>
            </NavLink>
        </li>
        {props.isAuth && <li className={styles.sign_off} onClick={props.logoutUser}>
            <NavLink to="/lang">
                <FiLogOut/>
            </NavLink>
        </li>}
    </ul>
})