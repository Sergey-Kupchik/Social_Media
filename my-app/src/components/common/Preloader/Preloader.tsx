import React from 'react';
import preloader from './preloader.svg';
import styles from './Preloader.module.css';

export const Preloader = () => {
    return <div className={styles.wrapper}>
        <img src={preloader} alt="Rain Forest"/>
    </div>
}



