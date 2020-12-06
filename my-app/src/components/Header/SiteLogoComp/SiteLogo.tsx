import styles from '../Header.module.css';
import logoRF from '../logoRF.png';
import logoRF_mobile from '../logoRF_mobile.png';
import React from 'react';

export const SiteLogo=()=>{
    return <div className={styles.site_logo}>
        <img src={logoRF} alt="Rain Forest" className={styles.desktop}/>
        <img src={logoRF_mobile} alt="Rain Forest" className={styles.mobile}/>
    </div>
}