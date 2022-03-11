import React, { Fragment, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


//dependecies import
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



//contexts
import authContext from '../../context/auth/context'
import alertContext from '../../context/alert/context'


//utils
import LoadingBar from '../../utils/loadingBar'


//form validation
const resetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
});


const ResetPassword = () => {
  const navigate = useNavigate();
  const { error, clearErrors, passwordReset, verificationData, verificationCode, isSubmitting } = useContext(authContext)
  const { setAlert } = useContext(alertContext)

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger')
      clearErrors()
    }

    if (verificationCode) {
      setAlert(verificationData.msg, 'success')
      navigate(`/access/new-password/${verificationData.email}`)
    }
    // eslint-disable-next-line
  }, [verificationCode, error])

  return (
    <Fragment>
      {isSubmitting ? <LoadingBar /> : null}
      <div className=" p-2 lg:p-20 xl:p-36">
        <h1 className="font-semibold text-2xl text-center">
          Forgot password ?
        </h1>
        <p className="text-center font-medium mt-4 text-slate-400 text-md">
          Enter your email to reset your password.
        </p>

        <div>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={resetPasswordSchema}
            onSubmit={(values) => {
              passwordReset(values)
            }}
          >
            {() => (
              <Form>
                <div>
                  <label className="block text-sm font-semibold mt-10">Email</label>
                  <Field
                    type="email"
                    className="w-full h-12 px-3 py-2 my-1 rounded-lg border-0 shadow-sm focus:outline-none focus:border-indigo-700 bg-slate-100 text-base"
                    name="email"
                  />
                  <ErrorMessage name="email" component="small" className='text-red-600' />
                </div>

                <div className="flex flex-wrap justify-center">
                  <button type="submit" className="mt-6 md:mt-8  mx-2 md:mx-3 w-28 text-center bg-indigo-700  text-white font-medium  rounded-lg h-12 text-md  hover:bg-indigo-900 transition-all shadow-lg" disabled={isSubmitting}>Submit</button>
                </div>
              </Form>
            )}

          </Formik>
        </div>
      </div>
    </Fragment>
  );
};


export default ResetPassword
