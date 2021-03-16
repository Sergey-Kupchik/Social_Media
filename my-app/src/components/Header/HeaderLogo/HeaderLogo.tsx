import styles from './HeaderLogo.module.scss';
import logoRF from '../../common/img/logo.png';
import React from 'react';

export const HeaderLogo=()=>{
    return <div className={styles.wrapper}>
        <div className={styles.headerLogo}>
                <img src={logoRF} alt="Logo of header"/>
        </div>
    </div>
}
