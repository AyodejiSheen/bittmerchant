import React, { useContext, useEffect, Fragment } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useParams } from 'react-router'



//images
import smartphone from "../../media/smartphone.svg";


//dependecies 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


//contexts
import authContext from '../../context/auth/context'
import alertContext from '../../context/alert/context'
import shopContext from '../../context/shop/context'


//utils
import LoadingBar from '../../utils/loadingBar'



//form validation
const TwoStepSchema = Yup.object().shape({
  digit1: Yup.string()
    .required('Required')
    .matches(/^[0-9]+$/, "Numbers only")
    .min(1, 'Only 1 digit')
    .max(1, 'Only 1 digit'),
  digit2: Yup.string()
    .required('Required')
    .matches(/^[0-9]+$/, "Numbers only")
    .min(1, 'Only 1 digit')
    .max(1, 'Only 1 digit'),
  digit3: Yup.string()
    .required('Required')
    .matches(/^[0-9]+$/, "Numbers only")
    .min(1, 'Only 1 digit')
    .max(1, 'Only 1 digit'),
  digit4: Yup.string()
    .required('Required')
    .matches(/^[0-9]+$/, "Numbers only")
    .min(1, 'Only 1 digit')
    .max(1, 'Only 1 digit'),
});


const Twostep = () => {
  const { email } = useParams()
  const navigate = useNavigate();
  const { verifyEmail, isSubmitting, error, clearErrors, isAuthenticated, sendCode, verificationData, verificationCode } = useContext(authContext)
  const { setAlert } = useContext(alertContext)
  const { isLoggedIn, shopSetupData } = useContext(shopContext)


  useEffect(() => {
    if (error) {
      setAlert(error, 'danger')
      clearErrors()
    }

    if (verificationCode) {
      setAlert(verificationData.msg, 'success')
    }

    if (isAuthenticated) {
      if (isLoggedIn === 'awaiting') {
        navigate(`/shop/set-up/${shopSetupData.shop_name}`)
      } else {
        navigate('/dashboard')
      }
    }

    // eslint-disable-next-line
  }, [error, verificationCode, isAuthenticated, isLoggedIn])
  return (
    <Fragment>
      {isSubmitting ? <LoadingBar /> : null}
      <div className="w-full md:w-11/12 mx-auto md:my-8 xl:my-20 2xl:my-16">
        <img
          src={smartphone}
          alt="smartphone"
          className="mx-auto w-24  md:w-24 lg:w-32 md:mt-0"
        />

        <h1 className="text-center text-2xl  mt-5 font-semibold">
          Two Step Verificcation
        </h1>
        <p className="text-center font-medium mt-4 text-slate-400 text-md">
          Enter the verfication code we sent to
        </p>
        <p className="text-center font-bold mt-4 text-lg md:text-xl 2xl:mt-12">{email}</p>

        <div className="mt-10">
          <p className="text-sm font-semibold text-center 2xl:text-lg 2xl:mb-4 mb-1">
            Type your 4 digit security code
          </p>

          <div>
            <Formik
              initialValues={{ digit1: '', digit2: '', digit3: '', digit4: '' }}
              validationSchema={TwoStepSchema}
              onSubmit={(values) => {
                verifyEmail(values, email)
              }}
            >
              {() => (
                <Form>
                  <div className="flex flex-wrap justify-center">
                    <div>
                      <Field
                        type="number"
                        maxlength="1"
                        name="digit1"
                        className="w-16 lg:w-14 h-14  2xl:w-20 2xl:h-20 2xl:mx-4 my-1 mx-2 rounded-lg shadow-sm border-0 bg-slate-100 focus:outline-none focus:border focus:border-indigo-600 text-2xl  text-slate-500 font-semibold text-center"
                      /><br />
                      <ErrorMessage name="digit1" component="small" className='text-red-600' />
                    </div>
                    <div>
                      <Field
                        type="number"
                        name='digit2'
                        maxlength="1"
                        className="w-16 lg:w-14 h-14  2xl:w-20 2xl:h-20 2xl:mx-4 my-1 mx-2 rounded-lg shadow-sm border-0 bg-slate-100 focus:outline-none focus:border focus:border-indigo-600 text-2xl  text-slate-500 font-semibold text-center"
                      /><br />
                      <ErrorMessage name="digit2" component="small" className='text-red-600' />

                    </div>
                    <div>
                      <Field
                        type="number"
                        name='digit3'
                        maxlength="1"
                        className="w-16 lg:w-14 h-14  2xl:w-20 2xl:h-20 2xl:mx-4 my-1 mx-2 rounded-lg shadow-sm border-0 bg-slate-100 focus:outline-none focus:border focus:border-indigo-600 text-2xl  text-slate-500 font-semibold text-center"
                      /><br />
                      <ErrorMessage name="digit3" component="small" className='text-red-600' />
                    </div>

                    <div>
                      <Field
                        type="number"
                        name='digit4'
                        maxlength="1"
                        className="w-16 lg:w-14 h-14  2xl:w-20 2xl:h-20 2xl:mx-4 my-1 mx-2 rounded-lg shadow-sm border-0 bg-slate-100 focus:outline-none focus:border focus:border-indigo-600 text-2xl  text-slate-500 font-semibold text-center"
                      /><br />
                      <ErrorMessage name="digit4" component="small" className='text-red-600' />
                    </div>
                  </div>

                  <button className="w-2/3 lg:w-1/5 mt-10 md:mt-8 mx-auto text-center bg-indigo-700 block text-white font-medium rounded-lg h-12 text-md  hover:bg-indigo-800 transition-all shadow-lg" disabled={isSubmitting} type="submit">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>

          </div>
        </div>
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

    </Fragment>
  );
};


export default Twostep 
