import React, { Fragment, useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router'


//contexts
import alertContext from '../../context/alert/context'
import shopContext from '../../context/shop/context'


//utils
import LoadingBar from '../../utils/loadingBar'


//dependecies 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const Setup = () => {
    const { shopname } = useParams()
    const { setAlert } = useContext(alertContext)

    const { setUp, isSubmitting, message, clearMessage, clearErrors, error, shopSetupData, clearSetup } = useContext(shopContext)

    const CustomInputComponent = (props) => (
        <textarea className="w-full h-12 px-3 py-2 my-1 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-100 text-base" type="text" {...props} />
    );

    const navigate = useNavigate()

    //form validation
    const SetupSchema = Yup.object().shape({
        desc: Yup.string()
            .required('Description is required')
            .min(10, 'Too Short!')
            .max(500, 'Too Long!'),
        category: Yup.string()
            .required('Category is required')
    });


    useEffect(() => {
        if (message) {
            setAlert(message, 'success')
        }

        if (message === 'Shop succefully created') {
            navigate('/dashboard')
            clearMessage()
        }

        if (error) {
            setAlert(error, 'danger')
            clearErrors()
        }

        if (error === 'Unauthorized') {
            navigate('/access')
        }

        if (error === 'You have an active shop' || error === 'Shopname already in use') {
            clearSetup()
        }

        // eslint-disable-next-line
    }, [message, error])


    return (
        <Fragment>
            {isSubmitting ? <LoadingBar /> : null}
            <div className="md:my-8 xl:my-20 2xl:my-16">
                <h1 className="text-dark text-2xl mb-2 text-center font-semibold">
                    Create a new shop
                </h1>
                <p className="text-center font-medium">
                    <span className="text-gray-400">Quick Setup! Let's Go</span>
                </p>

                {/* Form section */}
                <div className="w-full lg:w-2/3 xl:w-2/4  mx-auto mt-12">
                    <span className="text-sm text-gray-400">
                        <i className="fas fa-badge-check text-green-700"></i> {shopname}
                    </span>
                    <Formik
                        initialValues={shopSetupData ? shopSetupData : { desc: '', category: '', currency: 'naira' }}
                        validationSchema={SetupSchema}
                        onSubmit={(values) => {
                            setUp(values, shopname)
                        }}
                    >
                        {() => (
                            <Form>
                                <div>
                                    <label className="block text-sm font-semibold mt-3">Tell us about your new shop</label>
                                    <Field
                                        as={CustomInputComponent}
                                        type="text"
                                        name="desc"
                                    />
                                    <ErrorMessage name="desc" component="small" className='text-red-600' />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mt-4">Category</label>
                                    <Field as="select" className="appearance-none w-full h-12 px-3 py-2 my-1 rounded-lg border-0   bg-slate-100 text-base" name="category">
                                        <option selected className='text-slate-100x'>Select a category</option>
                                        <option className="text-sm">Phones and Gadgets</option>
                                        <option className="text-sm">Clothings and Apparels</option>
                                        <option className="text-sm">Home Appliances</option>
                                        <option className="text-sm">Accessories</option>
                                    </Field>
                                    <ErrorMessage name="category" component="small" className='text-red-600' />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mt-4">Currency</label>
                                    <Field as="select" className="appearance-none w-full h-12 px-3 py-2 my-1 rounded-lg border-0   bg-slate-100 text-base" name="currency" disabled>
                                        <option className="text-sm">Naira</option>
                                    </Field>
                                    <label className="block text-xs md:text-sm text-gray-400">
                                        We only support naira payment presently, other currencies will be supported soon
                                    </label>
                                </div>


                                <button type="submit" className="mt-6 text-center bg-indigo-700 text-white font-medium w-full rounded-lg h-12 text-md  hover:bg-indigo-900 transition-all shadow-lg" disabled={isSubmitting}>
                                    Continue
                                </button>

                            </Form>
                        )}
                    </Formik>
                    <p className="text-center my-5 font-semibold text-gray-400">OR</p>
                    <button className="bg-slate-100 flex rounded-lg p-3.5 w-full font-medium justify-center my-3 text-gray-400 text-sm hover:bg-indigo-700 hover:text-white transition-all" onClick={() => navigate('/dashboard')}>
                        <p><strong>Go to my shop</strong></p>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Setup