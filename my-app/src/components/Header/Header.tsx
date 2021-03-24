import React, {useCallback, useState} from 'react';
import styles from './Header.module.scss';
import {HeaderLogo} from './HeaderLogo/HeaderLogo';
import {Dispatch} from 'redux';
import {HamburgerArrowReverse} from 'react-animated-burgers/lib';
import {NavBar} from './NavBar/NavBar';

export type HeaderPropsType = {
    registeredUserId: null | string,
    registeredUserLogin: null | string,
    userPhoto: null | string,
    isAuth: boolean,
    isFetching: boolean,
    logoutUser: () => (dispatch: Dispatch) => void,
}


export const Header = React.memo(function Header(props: HeaderPropsType) {
    let [isActive, setIsActive] = useState<boolean>(false);
    const toggleButton = useCallback(
        () => setIsActive(isActive => !isActive),
        [],
    )
    return (
        <header className={styles.header}>
            <div className={styles.right_left}>
                <HamburgerArrowReverse
                    barColor="white"
                    buttonColor="#5854ef"
                    {...{ isActive, toggleButton }}
                    className={styles.burger_menu}/>
                <HeaderLogo/>
            </div>
            <NavBar {...props}/>
        </header>
    )
})



