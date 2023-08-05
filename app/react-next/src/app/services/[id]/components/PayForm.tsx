"use client";
//actions
import { logIn, logInSuccess, logInFailure } from "@/redux/features/authSlice"
import { Load } from "@/redux/features/servicesSlice"
//hooks
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { useAppSelector } from "@/redux/store"
import { useUpdateServiceMutation, useGetSingleServiceDataQuery, useGetServicesDataQuery } from "@/redux/api"
import { useRouter } from "next/navigation"
//types
import type { SlicesState } from "@/redux/features/servicesSlice"
//components
import axios from "axios"
import { Formik, Form, Field, FormikHelpers } from "formik"
import { SyncLoader } from "react-spinners"
import * as yup from "yup"
import InputMask from 'react-input-mask'


const creditCardSchema = yup.object().shape({

  cardHolderName: yup.string()
  .required("Cardholder name is required"),
  cardNumber: yup
    .string()
    .required("Card number is required"),
  expirationDate: yup
    .string()
    .required("Expiration date is required"),
  cvv: yup
    .string()
    .required("CVV is required"),
  
});

interface creditCard {
  cardHolderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  
}

const PayForm = ({ props }: { props: {id: string, email:string, price: string} }) => {


  const services = useGetServicesDataQuery(props.email)
  const service = useGetSingleServiceDataQuery(props.id)

  const [ updateService, result ] = useUpdateServiceMutation()

  const initialValues: creditCard = {
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardHolderName: "",
  };

  const handleSubmit = (data: typeof initialValues, formikHelpers) => {
   
    formikHelpers.setSubmitting(true)
    console.log('click')
    updateService({
      ...service.data,
      status: 'paid'
    })
    .then(()=> services.refetch())
    .then(()=>service.refetch())
    .then(()=>formikHelpers.setSubmitting(false))
   
  };

  return (
    <div className="w-full col-span-5 sm:col-span-3 h-full bg-white border border-gray-200 rounded-lg dark:bg-cyan-900 shadow-lg justify-self-center p-5">
      
        <h3 className="text-2xl my-5">Checkout</h3>
    

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={creditCardSchema}
        
       
      >
        {({ errors, touched, isSubmitting }) => (
          <fieldset className="">
            <legend>Payment details</legend>
            <Form className="p-2">

            <fieldset className="border-2 p-2 rounded-xl border-gray-200">
              <legend>Card holder</legend>
              
            <Field
                className="rounded-xl p-2 w-full bg-slate-200 focus:ring-red-400 border border-red-300 dark:text-slate-700"
                type="text"
                id="cardHolderName"
                placeholder="cardHolderName"
                name="cardHolderName"
              />
             
                

              {touched.cardHolderName && errors.cardHolderName && (
                <div className="font-bold popins text-red-400">
                  {errors.cardHolderName}
                </div>
              )}

            </fieldset>
             
              <fieldset className="border-2 p-2 rounded-xl border-gray-200 grid grid-cols-7 gap-1">
                <legend>Card details</legend>
              
                <div className="col-span-7 sm:col-span-3 flex flex-col">
                <Field name="cardNumber">
          {({ field }) => (
            <InputMask
              {...field}
              mask="9999 9999 9999 9999"
              placeholder="xxxx xxxx xxxx xxxx"
              maskChar= ' '
              className="rounded-xl p-2 col-span-2 w-auto bg-slate-200 focus:ring-red-400 border border-red-300 dark:text-slate-700" 
            />
          )}
        </Field>

              {touched.cardNumber && errors.cardNumber && (
                <div className="font-bold popins text-red-400">
                  {errors.cardNumber}
                </div>
              )}
</div>
<div className="col-span-7 sm:col-span-2 flex flex-col">
<Field name="expirationDate">
          {({ field }) => (
            <InputMask
              {...field}
              mask="99/99"
              placeholder="MM/YY"
              maskChar= ''
              className="rounded-xl p-2 col-span-2 w-auto bg-slate-200 focus:ring-red-400 border border-red-300 dark:text-slate-700" 
            />
          )}
        </Field>
              
              {touched.expirationDate && errors.expirationDate && (
                <div className="font-bold popins text-red-400">
                  {errors.expirationDate}
                </div>
              )}
            </div>
            <div className="col-span-7 sm:col-span-2 flex flex-col">
            <Field name="cvv">
          {({ field }) => (
            <InputMask
              {...field}
              mask="999"
              placeholder="CVV"
              maskChar= ''
              className="rounded-xl p-2 col-span-2 w-auto bg-slate-200 focus:ring-red-400 border border-red-300 dark:text-slate-700" 
            />
          )}
        </Field>

              {touched.cvv && errors.cvv && (
                <div className="font-bold popins text-red-400">
                  {errors.cvv}
                </div>
              )}
              </div>

</fieldset>

       
       
        
        <div className="flex justify-between my-2">
          <h4 className="text-xl">Total</h4>
          <p>{`$${props.price}`}</p>
        </div>

              <button
                className="bg-red-500 w-full hover:bg-red-600 duration-200 rounded-lg p-3 text-white my-5"
                type="submit"
                disabled={isSubmitting}
              >
                { isSubmitting ? <SyncLoader color="white" /> : "Pay & Finish"}
              </button>
            </Form>
          </fieldset>
        )}
      </Formik>
    </div>
  );
};

export default PayForm;
