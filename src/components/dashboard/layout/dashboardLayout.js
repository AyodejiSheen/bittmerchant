import React, { useEffect, useContext, Fragment } from 'react'
import { Outlet } from "react-router-dom";


//contexts
import authContext from '../../../context/auth/context'
import { Dashnav } from '../navbar';



const DashboardLayout = () => {
    const { loadUser } = useContext(authContext)
    useEffect(() => {
        loadUser()
        // eslint-disable-next-line
    }, [])
    return (
        <Fragment>
            <Dashnav/>
        </Fragment>
    )
}

export default DashboardLayout