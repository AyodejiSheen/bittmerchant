import React, { useReducer } from 'react'
import ShopContext from './context'
import shopReducer from './reducers'

//dependencies
import axios from 'axios'

//utils
import baseUrl from '../../utils/baseUrl'
import setAuthToken from '../../utils/setAuthToken'


import {
    SET_COUNT,
    RESET_COUNT,
    IS_SUBMITTING,
    CHECK_NAME_SUCCESS,
    CLEAR_MESSAGE,
    CLEAR_ERRORS,
    CHECK_NAME_FAIL,
    SETUP_SUCCESS,
    SETUP_FAIL,
    CLEAR_SETUP
} from './actions'


const ShopState = (props) => {
    const initialState = {
        shopLoaderCounter: 10,
        isAvailable: null,
        isLoggedIn: sessionStorage.getItem('cisLoggedIn'),
        shopSetupData: JSON.parse(sessionStorage.getItem('csetup')),
        isSubmitting: null,
        message: null,
        error: null
    }
    const [state, dispatch] = useReducer(shopReducer, initialState)


    //Set Count
    const shopSetCount = (payload) => {
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



    //Check if shop name is available
    const checkName = async formData => {
        setSubmitting(true)
        try {
            const res = await axios.get(`${baseUrl.uri}checkname`, {
                params: {
                    shopname: formData.shopname
                }
            })
            dispatch({
                type: CHECK_NAME_SUCCESS,
                payload: res.data.msg
            })
        } catch (error) {
            dispatch({
                type: CHECK_NAME_FAIL,
                payload: error.response.data.msg
            })
        }


    }

    //Clear message
    const clearMessage = () => {
        dispatch({
            type: CLEAR_MESSAGE
        })
    }


    //Clear error
    const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }


    //Setup shop
    const setUp = async (formData, shopname) => {
        if (sessionStorage.ctoken) {
            setAuthToken(sessionStorage.ctoken)
        }
        setSubmitting(true)
        formData.shop_name = shopname
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            let res = await axios.post(`${baseUrl.uri}shop`, formData, config)
            dispatch({
                type: SETUP_SUCCESS,
                payload: res.data.msg
            })
        } catch (error) {
            dispatch({
                type: SETUP_FAIL,
                payload: {error: error.response.data.msg, shopSetupData: formData}
            })
        }
    }


    const clearSetup = () => {
        dispatch({
            type: CLEAR_SETUP
        })
    }

    return (
        <ShopContext.Provider value={{
            checkName,
            shopSetCount,
            clearMessage,
            setUp,
            clearErrors,
            clearSetup,
            isAvailable: state.isAvailable,
            shopLoaderCounter: state.shopLoaderCounter,
            isSubmitting: state.isSubmitting,
            isLoggedIn: state.isLoggedIn,
            shopSetupData: state.shopSetupData,
            message: state.message,
            error: state.error
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopState
