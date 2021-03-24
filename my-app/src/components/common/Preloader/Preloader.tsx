import React from 'react';
import preloader from './preloader.gif';
import styles from './Preloader.module.scss';

export const Preloader = () => {
    return <div className={styles.wrapper}>
        <img src={preloader} alt="Cirkle"/>
    </div>
}



