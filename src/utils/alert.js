import React, { Fragment, useContext } from 'react'
import alertContext from '../context/alert/context'

export const Alert = () => {
    const { alerts } = useContext(alertContext)

    return (
        <Fragment>
            {alerts.length ? alerts.map((alert, index) => (
                <div data-aos="zoom-up-right" className="alert-position" key={index}>
                    <div className={alert.type === 'danger' ? "bg-rose-700 text-white text-xs lg:text-sm shadow-md  px-2 py-3 lg:px-5 lg:py-3 sm:py-3 sm:px-2 rounded" :
                        alert.type === 'success' ? "bg-green-700 text-white text-xs lg:text-sm shadow-md  px-2 py-3 lg:px-5 lg:py-3 sm:py-3 sm:px-2 rounded" : null}>
                        <i className="fad fa-info-circle"></i> {alert.msg}
                    </div>
                </div>
            )) : null}

        </Fragment>
    )
}