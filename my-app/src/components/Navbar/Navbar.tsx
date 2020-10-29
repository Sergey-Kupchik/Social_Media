import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {FaUserCircle, FaFacebookMessenger, FaRegNewspaper,FaHeadphones, FaBarcode, FaUsers} from 'react-icons/fa';


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active} className={styles.navLink}>
                    <FaUserCircle  size={"1.5rem"} color="#20B2AA"/>
                    <span className={styles.item_value}>Profile</span>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={styles.active} className={styles.navLink}>
                    <FaFacebookMessenger  size={"1.5rem"} color="#20B2AA"/>
                    <span className={styles.item_value}>Messages</span>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.active} className={styles.navLink}>
                    <FaRegNewspaper  size={"1.5rem"} color="#20B2AA"/>
                    <span className={styles.item_value}>News</span>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.active} className={styles.navLink}>
                    <FaHeadphones  size={"1.5rem"} color="#20B2AA"/>
                    <span className={styles.item_value}>Music</span>
                </NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active} className={styles.navLink}>
                    <FaUsers size={"1.5rem"} color="#20B2AA"/>
                    <span className={styles.item_value}>Users</span>
                </NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.active} className={styles.navLink}>
                    <FaBarcode size={"1.5rem"} color="#20B2AA"/>
                    <span className={styles.item_value}>Settings</span>
                </NavLink>
            </div>
        </nav>
    )
}
export default Navbar;


