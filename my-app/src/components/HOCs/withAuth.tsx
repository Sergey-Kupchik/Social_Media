import React from 'react';
import {RootState} from '../../redux/storeRedux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
})


export function withAuthRedirect<P>(WrappedComponent: React.ComponentType<P>) {
    const withIsAuth = (props: MapStateToPropsType & {}) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to="/lang"/>

        }

        return <WrappedComponent {...restProps as P}/>
    }
    return connect<MapStateToPropsType, {}, P, RootState>(mapStateToProps)(withIsAuth)
}
