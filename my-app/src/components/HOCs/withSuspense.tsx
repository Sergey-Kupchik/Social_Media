import React from 'react';
import {Preloader} from '../common/Preloader/Preloader';


export function withSuspense<P>(WrappedComponent: React.ComponentType<P>) {
    return (props:P)=>{
        return <React.Suspense fallback={<Preloader/>}>
            <WrappedComponent {...props as P} />
        </React.Suspense>
    }
}

