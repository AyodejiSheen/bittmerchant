import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import authContext from '../../../context/auth/context'

const DashboardGuard = ({ children }) => {
    const { isAuthenticated, loading } = useContext(authContext)
    return (
        !isAuthenticated && !loading ? <Navigate to="/access" /> : children
    )
}

export default DashboardGuard