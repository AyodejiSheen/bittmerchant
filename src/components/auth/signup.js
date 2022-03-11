import React, { useContext, Fragment, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";



//images
import googleicon from "../../media/google-icon.svg";


//utils
import LoadingBar from '../../utils/loadingBar'

//dependecies 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


//contexts
import authContext from '../../context/auth/context'
import alertContext from '../../context/alert/context'



//form validation
const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Firstname is required'),
  lastname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Lastname is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Must be exactly 8 characters or more')
    .matches(/(?=.*?[A-Z])/, 'At least one Uppercase')
    .matches(/(?=.*?[a-z])/, 'At least one Lowercase')
    .matches(/(?=.*?[0-9])/, 'At least one Number')
    .matches(/(?=.*?[#?!@$%^&*-])/, 'At least one special character')
});

 const Signup = () => {

  const navigate = useNavigate()
  const { signup, isSubmitting, error, clearErrors, verificationData, verificationCode, generateGoogleUrl } = useContext(authContext)
  const { setAlert } = useContext(alertContext)

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger')
      clearErrors()
    }

    if (verificationCode) {
      setAlert(verificationData.msg, 'success')
      navigate(`/access/two-steps/${verificationData.email}`)
    }


    // eslint-disable-next-line
  }, [error, verificationCode])
  return (
    <Fragment>
      {isSubmitting ? <LoadingBar /> : null}
      <div className="md:my-8 xl:my-20 2xl:my-16">
        <h1 className="text-dark text-2xl mb-2 text-center font-semibold">
          Create an Account
        </h1>
        <p className="text-center font-medium">
          <span className="text-gray-400">Already have an account?</span>&nbsp;
          <Link to="/access" className="text-indigo-700">
            Sign in here
          </Link>
        </p>

        {/* Form section */}
        <div className="w-full lg:w-2/3 mt-8 mx-auto">
          <button className="bg-slate-100 flex rounded-lg p-3.5 w-full font-medium justify-center my-3 text-gray-400 text-sm hover:bg-indigo-700 hover:text-white transition-all" onClick={() => generateGoogleUrl()}>
            <img alt="Logo" src={googleicon} className="w-5 mr-3" />
            <p>Continue with Google</p>
          </button>

          <p className="text-center my-5 font-semibold text-gray-400">OR</p>

          <Formik
            initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              signup(values)
            }}
          >
            {() => (
              <Form>
                <div className="block md:flex">
                  <div className="w-full md:w-1/2 pr-0 md:pr-2">
                    <label className="block text-sm font-semibold">
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstname"
                      className="w-full h-12 px-3 py-2 my-1 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-100 text-base"
                    />
                    <ErrorMessage name="firstname" component="small" className='text-red-600' />
                  </div>

                  <div className="w-full mt-6 md:mt-0 md:w-1/2 pl-0 md:pl-2">
                    <label className="block text-sm font-semibold">Last Name</label>
                    <Field
                      type="text"
                      name="lastname"
                      className="w-full h-12 px-3 py-2 my-1 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-100 text-base"
                    />
                    <ErrorMessage name="lastname" component="small" className='text-red-600' />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full h-12 px-3 py-2 my-1 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-100 text-base"
                  />
                  <ErrorMessage name="email" component="small" className='text-red-600' />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="w-full h-12 px-3 py-2 my-1 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-100 text-base"
                  />
                  <ErrorMessage name="password" component="small" className='text-red-600' />
                  <label className="block text-xs md:text-sm font-light ">
                    Use 8 or more characters with a mix of uppercase letters, lowercase letters, numbers &
                    symbols.
                  </label>
                </div>
                <button type="submit" className="mt-6 text-center bg-indigo-700 text-white font-medium w-full rounded-lg h-12 text-md  hover:bg-indigo-900 transition-all shadow-lg " disabled={isSubmitting}>
                  Continue
                </button>
              </Form>
            )}

          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup
