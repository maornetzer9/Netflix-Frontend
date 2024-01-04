import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import './transition.css'

interface TransitionProps { timeOut?: number; };

/* eslint-disable */
const Transition: React.FunctionComponent<React.PropsWithChildren<TransitionProps>> = ({children, timeOut}) => {

    const [isPageLoaded, setIsPageLoaded] = useState(false);


    useEffect(() => {
        const delay = setTimeout(() => setIsPageLoaded(true), timeOut);

        return () => clearTimeout(delay);
    }, []);
    return (
        <CSSTransition
            in={isPageLoaded}
            timeout={timeOut as number} 
            classNames="page-transition"
            unmountOnExit
        >
           {children}
        </CSSTransition>
    )
}

export default Transition