import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";



//contexts
import alertContext from '../../context/alert/context'
import shopContext from '../../context/shop/context'


//utils
import LoadingBar from '../../utils/loadingBar'



const CheckName = () => {
    const navigate = useNavigate();
    const [shopName, setShopName] = useState({ shopname: '' })
    const { setAlert } = useContext(alertContext)
    const { checkName, isSubmitting, message, clearMessage, isAvailable, error, clearErrors } = useContext(shopContext)

    const onChange = e => {
        let modifiedValue = e.target.value.replace(/ /g, "-");
        modifiedValue = modifiedValue.split(' ').join('-');
        setShopName({ ...shopName, [e.target.name]: modifiedValue })
        clearMessage()
    };

    const { shopname } = shopName

    useEffect(() => {
        if (isAvailable) {
            setTimeout(() => { navigate(`/shop/set-up/${shopname}`) }, 1000)
        }

        if (error) {
            setAlert(error, 'danger')
            clearErrors()
        }

        // eslint-disable-next-line
    }, [isAvailable, error])

    const checkname = (e) => {
        e.preventDefault();
        if (!shopname) {
            setAlert('Shop name is required', 'danger');
        } else if (shopname.length > 15) {
            setAlert('Shop name too long', 'danger');
        } else {
            checkName(shopName)
        }
    }
    return (
        <Fragment>
            {isSubmitting ? <LoadingBar /> : null}
            <div className="md:my-8 xl:my-20 2xl:my-28">
                <h1 className="text-dark text-2xl mb-2 text-center font-semibold mt-5">
                    Create a new shop
                </h1>
                <p className="text-center font-medium text-sm xl:text-md">
                    <span className="text-gray-400">Quick Setup!  Let's Go</span>
                </p>

                {/* Form section */}
                <div className="w-full lg:w-2/3 xl:w-2/4  mx-auto mt-12">
                    <form onSubmit={checkname}>
                        <div>
                            <label className="block text-sm font-semibold">Shop Name</label>
                            <input
                                type="text"
                                name="shopname"
                                value={shopname}
                                onChange={onChange}
                                className="w-full h-12 px-3 py-2 my-1 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-100 text-base"
                            />
                            <span className="text-sm text-gray-400">
                                {shopname ? <>{shopname}.merchantplace.co <br />{message ? <><i className="fas fa-badge-check text-green-700"></i> {message}</> : error ? <><i className="fas fa-badge-check text-red-700"></i> {error}</> : null}</> : null}</span><br />
                        </div>

                        <button className="mt-6 text-center bg-indigo-700 text-white font-medium w-full rounded-lg h-12 text-md  hover:bg-indigo-900 transition-all shadow-lg" disabled={isSubmitting}>
                            Continue
                        </button>
                    </form>
                    <div>
                        <p className="text-center my-5 font-semibold text-gray-400">OR</p>
                        <button className="bg-slate-100 flex rounded-lg p-3.5 w-full font-medium justify-center my-3 text-gray-400 text-sm hover:bg-indigo-700 hover:text-white transition-all" onClick={() => navigate('/dashboard')}>
                            <p><strong>Go to my shop</strong></p>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CheckName
