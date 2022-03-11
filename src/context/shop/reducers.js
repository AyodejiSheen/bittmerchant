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

const shopReducer = (state, action) => {
    switch (action.type) {
        case IS_SUBMITTING:
            return {
                ...state,
                isSubmitting: action.payload
            }
        case SET_COUNT:
            return {
                ...state,
                shopLoaderCounter: action.payload
            }

        case RESET_COUNT:
            return {
                ...state,
                shopLoaderCounter: 10
            }
        case CHECK_NAME_SUCCESS:
            return {
                ...state,
                isAvailable: true,
                isSubmitting: false,
                message: action.payload
            }
        case CHECK_NAME_FAIL:
            return {
                ...state,
                isAvailable: false,
                isSubmitting: false,
                message: null,
                error: action.payload
            }
        case SETUP_FAIL:
            sessionStorage.setItem('cisLoggedIn', 'awaiting')
            sessionStorage.setItem('csetup', JSON.stringify(action.payload.shopSetupData))
            return {
                ...state,
                isLoggedIn: 'awaiting',
                isAvailable: false,
                isSubmitting: false,
                message: null,
                error: action.payload.error,
                shopSetupData: action.payload.shopSetupData
            }
        case SETUP_SUCCESS:
            sessionStorage.removeItem('csetup')
            sessionStorage.removeItem('cisLoggedIn')
            return {
                ...state,
                isAvailable: false,
                isSubmitting: false,
                isLoggedIn: null,
                message: action.payload,
                shopSetupData: null
            }

        case CLEAR_MESSAGE:
            return {
                ...state,
                message: null
            }
        case CLEAR_SETUP: {
            sessionStorage.removeItem('csetup')
            sessionStorage.removeItem('cisLoggedIn')
            return {
                ...state,
                shopSetupData: null,
                isLoggedIn: null
            }
        }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export default shopReducer
