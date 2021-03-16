import React from 'react';
import styles from './Sidebar.module.scss';
import {NavLink} from 'react-router-dom';
import {FaUserCircle, FaFacebookMessenger, FaRegNewspaper, FaHeadphones, FaBarcode, FaUsers} from 'react-icons/fa';


const Sidebar =React.memo(function Sidebar () {
    return (
        <div className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active} className={styles.navLink}>
                    <FaUserCircle />
                    <span className={styles.item_value}>Profile</span>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={styles.active} className={styles.navLink}>
                    <FaFacebookMessenger />
                    <span className={styles.item_value}>Messages</span>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.active} className={styles.navLink}>
                    <FaRegNewspaper />
                    <span className={styles.item_value}>News</span>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.active} className={styles.navLink}>
                    <FaHeadphones />
                    <span className={styles.item_value}>Music</span>
                </NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active} className={styles.navLink}>
                    <FaUsers/>
                    <span className={styles.item_value}>Users</span>
                </NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.active} className={styles.navLink}>
                    <FaBarcode />
                    <span className={styles.item_value}>Settings</span>
                </NavLink>
            </div>
        </div>
    )
})
export default Sidebar;


