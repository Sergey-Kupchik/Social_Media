import React, {useState} from 'react';
import styles from './Header.module.css';
import logoRF from './logoRF.png';
import logoRF_mobile from './logoRF_mobile.png';
import {FaAlignJustify, FaAngleDoubleRight, FaEnvelope, FaConciergeBell, FaUserAlt} from 'react-icons/fa'
import {NavLink} from 'react-router-dom';

const Header = () => {
    let [hideMenu, setHideMenu] = useState<boolean>(false);
    const onMenuStyle = {
        display: hideMenu ? 'none' : 'block',
    };
    const offMenuStyle = {
        display: hideMenu ? 'block' : 'none',
    };
    return (
        <header className={styles.header}>
            <div className={styles.site_logo}>
                <img src={logoRF} alt="Rain Forest" className={styles.desktop}/>
                <img src={logoRF_mobile} alt="Rain Forest" className={styles.mobile}/>
            </div>
            <div className={styles.bar}>
                <div className={styles.left_content}>
                    <FaAlignJustify size={'1.3rem'} color={'#20B2AA'} style={onMenuStyle} onClick={() => {
                        setHideMenu(true)
                    }}/>
                    <FaAngleDoubleRight size={'1.3rem'} color={'#20B2AA'} style={offMenuStyle} onClick={() => {
                        setHideMenu(false)
                    }}/>
                </div>
                <div className={styles.right_content}>
                    <div className={styles.icon_avatar}>
                        <div className={styles.icon_avatar_text}><NavLink to="/profile"><FaUserAlt size={'1.3rem'} color={'#20B2AA'}/>
                            <div className={styles.icon_messages_text}>Profile</div></NavLink></div>
                    </div>
                    <div className={styles.icon_messages}>
                        <NavLink to="/dialogs"> <FaEnvelope size={'1.3rem'} color={'#20B2AA'}/>
                            <div className={styles.icon_messages_text}>Messages</div>
                        </NavLink>
                    </div>
                    <div className={styles.icon_alerts}>
                        <a href="#">
                            <FaConciergeBell size={'1.3rem'} color={'#20B2AA'}/>
                            <div className={styles.icon_alerts_text}>Alerts
                            </div>
                        </a>
                    </div>
                    <div className={styles.sign_off}>
                        <a href="#">Sign Off</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header