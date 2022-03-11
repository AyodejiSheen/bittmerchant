import React, { useEffect, useContext, Fragment } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'




//contexts
import authContext from '../../context/auth/context'
import alertContext from '../../context/alert/context'
import shopContext from '../../context/shop/context'

//images
import googleicon from "../../media/google-icon.svg";

//utils
import LoadingBar from '../../utils/loadingBar'


const GoogleAuth = () => {
    const navigate = useNavigate()
    const { googleSignin, clearErrors, generateGoogleUrl, isSubmitting } = useContext(authContext)
    const { setAlert } = useContext(alertContext)
    const { isLoggedIn, shopSetupData } = useContext(shopContext)

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    useEffect(() => {
        //For google sign in
        if (query.get("error")) {
            setAlert(query.get("error"), 'danger')
            clearErrors()
        } else if (query.get("token")) {
            googleSignin(query.get("token"))
            if (isLoggedIn === 'awaiting') {
                navigate(`/shop/set-up/${shopSetupData.shop_name}`)
            } else {
                navigate('/dashboard')
            }
        }

        // eslint-disable-next-line
    }, [isLoggedIn])
    return (
        <Fragment>
            {isSubmitting ? <LoadingBar /> : null}
            <div className="w-full lg:w-2/3 mt-8 mx-auto">
                <button className="bg-slate-100 flex rounded-lg p-3.5 w-full font-medium justify-center my-3 text-gray-400 text-sm hover:bg-indigo-700 hover:text-white transition-all" onClick={() => generateGoogleUrl()}>
                    <img alt="Logo" src={googleicon} className="w-5 mr-3" />
                    <p>Continue with Google</p>
                </button>
            </div>
        </Fragment>
    )
}

export default GoogleAuth