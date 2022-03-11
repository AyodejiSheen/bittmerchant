import React, { useReducer } from 'react'
import authReducer from './reducers'
import AuthContext from './context'
import setAuthToken from '../../utils/setAuthToken'

//dependencies
import axios from 'axios'

//utils
import baseUrl from '../../utils/baseUrl'

import {
    SIGNUP_SUCCESS,
    CLEAR_ERRORS_SUCCESS,
    EMAIL_VERIFICATION_SUCCESS,
    EMAIL_VERIFICATION_FAIL,
    SEND_CODE_SUCCESS,
    SEND_CODE_FAIL,
    GOOGLE_URL_FAIL,
    GOOGLE_SIGNIN_SUCCESS,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    SIGNIN_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_UPDATE_SUCCESS,
    PASSWORD_UPDATE_FAIL,
    SIGNUP_FAIL,
    SIGNIN_SUCCESS,
    LOGOUT,
    IS_SUBMITTING,
    SET_COUNT,
    RESET_COUNT
} from './actions'


const AuthState = (props) => {
    const initialState = {
        verificationCode: false,
        passwordUpdated: false,
        verificationData: null,
        token: sessionStorage.getItem('ctoken'),
        isAuthenticated: null,
        isSubmitting: null,
        authLoaderCounter: 10,
        loading: true,
        error: null,
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)



    //Set Count
    const authSetCount = (payload) => {
        dispatch({
            type: SET_COUNT,
            payload
        })
    }


    //Set submitting
    const setSubmitting = (payload) => {
        if (!payload)
            dispatch({
                type: RESET_COUNT,
                payload
            })

        dispatch({
            type: IS_SUBMITTING,
            payload
        })
    }


    //Clear errors
    const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS_SUCCESS
        })
    }


    //Register new user
    const signup = async formData => {
        setSubmitting(true)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`${baseUrl.uri}signup`, formData, config)
            dispatch({
                type: EMAIL_VERIFICATION_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: SIGNUP_FAIL,
                payload: error.response.data.msg
            })
        }
    }


    //Email verification
    const verifyEmail = async (formData, email) => {
        setSubmitting(true)
        const code = parseInt(`${formData.digit1}${formData.digit2}${formData.digit3}${formData.digit4}`)

        try {
            const res = await axios.get(`${baseUrl.uri}confirmemail`, {
                params: {
                    email,
                    code
                }
            })
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: EMAIL_VERIFICATION_FAIL,
                payload: error.response.data.msg
            })
        }
    }


    //Send verification code
    const sendCode = async (data, type) => {
        setSubmitting(true)
        try {
            const res = await axios.post(`${baseUrl.uri}sendcode?${type}=true`, { email: data })
            dispatch({
                type: SEND_CODE_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: SEND_CODE_FAIL,
                payload: error.response.data.msg
            })
        }
    }


    //Generate Google url for signin
    const generateGoogleUrl = async () => {
        setSubmitting(true)
        try {
            const res = await axios.post(`${baseUrl.uri}generateurl`, {})
            window.location.href = res.data.data
        } catch (error) {
            dispatch({
                type: GOOGLE_URL_FAIL,
                payload: error.response.data.msg
            })
        }
    }



    //Google signin
    const googleSignin = (token) => {
        dispatch({
            type: GOOGLE_SIGNIN_SUCCESS,
            payload: token
        })
    }



    //Load user details
    const loadUser = async () => {
        if (sessionStorage.ctoken) {
            setAuthToken(sessionStorage.ctoken)
        }
        try {
            const res = await axios.get(`${baseUrl.uri}auth`);
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: USER_LOADED_FAIL,
                payload: error.response.data.msg
            })
        }
    }


    //Login Users
    const signin = async formData => {
        setSubmitting(true)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`${baseUrl.uri}auth`, formData, config)
            dispatch({
                type: SIGNIN_SUCCESS,
                payload: res.data.data
            })
        } catch (error) {
            if (error.response.status === 429) {
                error.response.data.msg = error.response.data.error.text
            }
            dispatch({
                type: SIGNIN_FAIL,
                payload: error.response.data.msg
            })
        }
    }



    //Password Reset
    const passwordReset = async formData => {
        setSubmitting(true)
        const config = {
            params: {
                email: formData.email
            }
        }
        try {
            let res = await axios.get(`${baseUrl.uri}passwordreset`, config)
            dispatch({
                type: PASSWORD_RESET_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: PASSWORD_RESET_FAIL,
                payload: error.response.data.msg
            })
        }
    }

    //Update password
    const updatePassword = async (formData, email) => {
        setSubmitting(true)
        formData.email = email
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            await axios.put(`${baseUrl.uri}passwordreset`, formData, config)
            dispatch({
                type: PASSWORD_UPDATE_SUCCESS
            })
        } catch (error) {
            if (error.response.status === 429) {
                error.response.data.msg = error.response.data.error.text
            }
            dispatch({
                type: PASSWORD_UPDATE_FAIL,
                payload: error.response.data.msg
            })
        }
    }


    //Logout Users
    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }


    return (
        <AuthContext.Provider value={{
            signup,
            verifyEmail,
            signin,
            clearErrors,
            logout,
            loadUser,
            authSetCount,
            sendCode,
            generateGoogleUrl,
            passwordReset,
            updatePassword,
            googleSignin,
            verificationCode: state.verificationCode,
            verificationData: state.verificationData,
            isAuthenticated: state.isAuthenticated,
            passwordUpdated: state.passwordUpdated,
            error: state.error,
            user: state.user,
            isSubmitting: state.isSubmitting,
            loaderCounter: state.loaderCounter,
            loading: state.loading
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState