import React, { Fragment, useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";



//images
import googleicon from "../../media/google-icon.svg";


//dependecies import
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



//contexts
import authContext from '../../context/auth/context'
import alertContext from '../../context/alert/context'
import shopContext from '../../context/shop/context'

//utils
import LoadingBar from '../../utils/loadingBar'


//form validation
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
});

const Signin = () => {
  const navigate = useNavigate();
  const { signin, isSubmitting, error, clearErrors, isAuthenticated, generateGoogleUrl } = useContext(authContext)
  const { setAlert } = useContext(alertContext)
  const { isLoggedIn, shopSetupData } = useContext(shopContext)

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger')
      clearErrors()
    }


    if (isAuthenticated) {
      if (isLoggedIn === 'awaiting') {
        navigate(`/shop/set-up/${shopSetupData.shop_name}`)
      } else {
        navigate('/dashboard')
      }
    }


    // eslint-disable-next-line
  }, [error, isAuthenticated, isLoggedIn])
  return (
    <Fragment>
      {isSubmitting ? <LoadingBar /> : null}
      <div className="md:my-8 xl:my-20 2xl:my-28">
        <h1 className="text-dark text-2xl mb-2 text-center font-semibold mt-5">
          Sign In to Merchantplace
        </h1>
        <p className="text-center font-medium text-sm xl:text-md">
          <span className="text-gray-400">New Here?</span>&nbsp;
          <Link to="/access/sign-up" className="text-indigo-700">
            Create an Account
          </Link>
        </p>

        {/* Form section */}
        <div className="w-full lg:w-2/3 xl:w-2/4  mx-auto mt-12">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              signin(values)
            }}
          >
            {() => (
              <Form>
                <div>
                  <label className="block text-sm font-semibold">Email Address</label>
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
                  <p className="block text-right text-sm font-semibold text-indigo-700"><Link to="/access/password-reset" >
                    Forgot Password?
                  </Link></p>
                </div>


                <button className="mt-6 text-center bg-indigo-700 text-white font-medium w-full rounded-lg h-12 text-md  hover:bg-indigo-900 transition-all shadow-lg " disabled={isSubmitting} type="submit">
                  Continue
                </button>

              </Form>
            )}

          </Formik>

          <div>
            <p className="text-center my-5 font-semibold text-gray-400">OR</p>


            

            <button className="bg-slate-100 flex rounded-lg p-3.5 w-full font-medium justify-center my-3 text-gray-400 text-sm" onClick={() => generateGoogleUrl()}>
              <img alt="Logo" src={googleicon} className="w-5 mr-3" />
              <p>Continue with Google</p>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signin
