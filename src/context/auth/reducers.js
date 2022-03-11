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



const authReducers = (state, action) => {
    switch (action.type) {
        case IS_SUBMITTING:
            return {
                ...state,
                isSubmitting: action.payload
            }
        case SET_COUNT:
            return {
                ...state,
                authLoaderCounter: action.payload
            }

        case RESET_COUNT:
            return {
                ...state,
                authLoaderCounter: 10
            }
        case EMAIL_VERIFICATION_SUCCESS:
        case SEND_CODE_SUCCESS:
        case PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                verificationCode: true,
                isSubmitting: false,
                verificationData: action.payload
            }
        case SIGNUP_FAIL:
        case EMAIL_VERIFICATION_FAIL:
        case SIGNIN_FAIL:
        case SEND_CODE_FAIL:
        case GOOGLE_URL_FAIL:
        case USER_LOADED_FAIL:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_UPDATE_FAIL:
        case LOGOUT:
            sessionStorage.removeItem('ctoken')
            return {
                ...state,
                error: action.payload,
                isSubmitting: false,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                verificationCode: false,
                verificationData: null
            }
        case CLEAR_ERRORS_SUCCESS:
            return {
                ...state,
                error: null
            }

        case SIGNUP_SUCCESS:
        case SIGNIN_SUCCESS:
        case GOOGLE_SIGNIN_SUCCESS:
            sessionStorage.setItem('ctoken', action.payload)
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                isSubmitting: false,
                verificationCode: false,
                verificationData: null
            }

        case USER_LOADED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case PASSWORD_UPDATE_SUCCESS:
            sessionStorage.removeItem('ctoken')
            console.log('remove 3')
            return {
                ...state,
                passwordUpdated: true,
                isSubmitting: false,
                token: null,
                isAuthenticated: false,
                user: null,
                verificationCode: false,
                verificationData: null
            }
        default:
            return state
    }
}


export default authReducers