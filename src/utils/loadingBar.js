import React, { useEffect, useContext, Fragment } from 'react'
import LoadingBar from 'react-top-loading-bar'
import authContext from '../context/auth/context'
import shopContext from '../context/shop/context'

const LoadBar = () => {
    const { authLoaderCounter, authSetCount } = useContext(authContext)
    const { shopLoaderCounter, shopSetCount } = useContext(shopContext)

    useEffect(() => {
        const startCount = setInterval(() => authSetCount(Math.floor(Math.random() * 100) + 1) || shopSetCount(Math.floor(Math.random() * 100) + 1), 2000);
        return () => {
            clearInterval(startCount)
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <LoadingBar color='#5145CD' progress={authLoaderCounter || shopLoaderCounter} style={{ height: '3px' }} />
        </Fragment>


    )
}

export default LoadBar