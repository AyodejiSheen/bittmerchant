import React, { Fragment, useContext, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useParams } from 'react-router'


//dependecies import
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



//contexts
import authContext from '../../context/auth/context'
import alertContext from '../../context/alert/context'


//utils
import LoadingBar from '../../utils/loadingBar'



//form validation
const newPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Must be exactly 8 characters or more')
    .matches(/(?=.*?[A-Z])/, 'At least one Uppercase')
    .matches(/(?=.*?[a-z])/, 'At least one Lowercase')
    .matches(/(?=.*?[0-9])/, 'At least one Number')
    .matches(/(?=.*?[#?!@$%^&*-])/, 'At least one special character'),
  code: Yup.string()
    .required('Code is required')
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, 'Must be exactly 4 digits')
    .max(4, 'Must be exactly 4 digits')
});


const Newpassword = () => {
  const navigate = useNavigate()
  const { email } = useParams()
  const { passwordUpdated, verificationData, verificationCode, sendCode, isSubmitting, error, clearErrors, updatePassword } = useContext(authContext)
  const { setAlert } = useContext(alertContext)

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger')
      clearErrors()
    }

    if (verificationCode) {
      setAlert(verificationData.msg, 'success')
    }

    if (passwordUpdated) {
      navigate('/access')
    }

    // eslint-disable-next-line
  }, [error, verificationCode, passwordUpdated])

  return (
    <Fragment>
      {isSubmitting ? <LoadingBar /> : null}
      <div className="md:my-8 xl:my-20 2xl:my-28">
        <h1 className="text-dark text-2xl mb-2 text-center font-semibold mt-5">
          Setup New Password
        </h1>

        <div className="w-full lg:w-2/3 xl:w-2/4  mx-auto mt-12">
          <Formik
            initialValues={{ password: '', code: '' }}
            validationSchema={newPasswordSchema}
            onSubmit={(values) => {
              updatePassword(values, email)
            }}
          >
            {() => (
              <Form>
                <div className="mt-6">
                  <label className="block text-sm font-semibold">New Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="w-full h-12 px-3 py-2 my-1 border-0 rounded-lg shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-100 text-base"
                  />
                  <ErrorMessage name="password" component="small" className='text-red-600' />
                  <label className="block text-xs md:text-sm text-gray-400">
                    Use 8 or more characters with a mix of uppercase letters, lowercase letters, numbers &
                    symbols.
                  </label>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold">
                    Verification Code
                  </label>
                  <Field
                    type="number"
                    name="code"
                    className="w-full h-12 px-3 py-2 my-1 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-100 text-base"
                  />
                  <ErrorMessage name="code" component="small" className='text-red-600' />
                </div>

                <button type="submit" disabled={isSubmitting} className="mt-6 text-center bg-indigo-700 text-white font-medium w-full rounded-lg h-12 text-md  hover:bg-indigo-900 transition-all shadow-lg ">
                  Submit
                </button>
              </Form>
            )}
          </Formik>

        </div>
        <p className="font-semibold text-center my-10  text-sm md:text-base">
          Didn't get the code?{" "}
          <Link to="#" className="text-indigo-700">
            Resend
          </Link>{" "}
          or{" "}
          <Link to="#" className="text-indigo-700">
            Call Us
          </Link>
        </p>
      </div>
    </Fragment>
  )
}

export default Newpassword