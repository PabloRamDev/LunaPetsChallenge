"use client"
//actions
import { logIn, logInSuccess, logInFailure } from '@/redux/features/authSlice'
import { useAppSelector } from '@/redux/store'
import { Load } from '@/redux/features/servicesSlice'
//hooks
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { Formik, Form , Field } from 'formik'
import { SyncLoader } from 'react-spinners'
//types
import type { SlicesState } from '@/redux/features/servicesSlice'



const creditCardSchema = yup.object().shape({
    
    cardNumber: yup
      .string()
      .matches(/^\d{16}$/, 'Card number must be 16 digits')
      .required('Card number is required'),
    expirationDate: yup
      .string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiration date (MM/YY)')
      .required('Expiration date is required'),
    cvv: yup
      .string()
      .matches(/^\d{3,4}$/, 'CVV must be 3 digits')
      .required('CVV is required'),
    cardholderName: yup.string().required('Cardholder name is required'),
  });


interface creditCard {
    cardNumber: string,
    expirationDate: string,
    cvv: string,
    cardHolderName: string
}


const PayForm = ({props}: {props: SlicesState}) => {


    const dispatch = useDispatch<AppDispatch>()

    const router = useRouter()

    const initialValues: creditCard = { 
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        cardHolderName: ''
     };

    const { isLoading } = useAppSelector(state => state.authReducer.value)

 
    

    const handleSubmit = async (data: typeof initialValues) => {
        
        
        // await axios.get("http://localhost:8000/api/v1/services/", {
        //     params: {
        //         email: data.email
        //     }
        // }).then(res => {
            
        //         dispatch(logIn(data.email))
        //         dispatch(logInSuccess())
        //         localStorage.setItem('email', data.email)
        //         router.push('/dashboard')
           
        // }).catch(error => {
          
        //   dispatch(logInFailure(error.message))
        // })

        
    };
    
  

  return (
    <div className="w-full col-span-1 h-full bg-white border border-gray-200 rounded-lg dark:bg-cyan-900 shadow-lg justify-self-center p-3">
    
    <div className='p-2 border-2 border-red-100 rounded-xl mb-2'>
    <h3 className='text-2xl my-5'>Checkout</h3>
    <hr />
    <h4 className='text-xl'>Service</h4>
    <div className='flex justify-between'>
    <p className='text-gray-400'>{props.title}</p>
    <p>{`$${props.price}`}</p>
    </div>
    <hr />
    <div className='flex justify-between my-2'>
    <h4 className='text-xl'>Total</h4>
    <p>{`$${props.price}`}</p>
    </div>
    </div>
    
    

    

    
    
    <Formik

    initialValues = { initialValues }
    onSubmit = { handleSubmit }
    validationSchema = { creditCardSchema }
    
  >
    {({ errors, touched }) => (
        <fieldset className='border-2 border-red-200'>
        <legend>Credit card information</legend>
    <Form className="flex flex-col p-2">
        
       
        <label className='text-gray-500' htmlFor="cardNumber">Card Number</label>
    <Field
        className='rounded-xl p-2 w-1/2 bg-slate-200 focus:ring-red-400 border border-red-300 dark:text-slate-700' 
        type="text" 
        id="cardNumber"
        placeholder='credit card number'
        name = 'cardNumber'
         />
      
      {touched.cardNumber && errors.cardNumber && <div className='font-bold popins text-red-400'>{errors.cardNumber}</div>}

        
            <div>
        <label htmlFor="expirationDate">expiration date</label>
        <Field
        className='rounded-xl p-2 w-auto bg-slate-200 focus:ring-red-400 border border-red-300 dark:text-slate-700' 
        type="text" 
        id="expirationDate"
        placeholder='expirationDate'
        name = 'expirationDate'
         />
      </div>
      {touched.expirationDate && errors.expirationDate && <div className='font-bold popins text-red-400'>{errors.expirationDate}</div>}
        <label htmlFor="cvv">CVV</label>
      <Field
        className='rounded-xl p-2 w-auto bg-slate-200 focus:ring-red-400 border border-red-300 dark:text-slate-700' 
        type="text" 
        id="cvv"
        placeholder='cvv'
        name = 'cvv'
         />
      
      {touched.cvv && errors.cvv && <div className='font-bold popins text-red-400'>{errors.cvv}</div>}

      
      
    
      <Field
        className='rounded-xl p-2 w-auto bg-slate-200 focus:ring-red-400 border border-red-300 dark:text-slate-700' 
        type="text" 
        id="cardHolderName"
        placeholder='cardHolderName'
        name = 'cardHolderName'
         />
      
      {touched.cardHolderName && errors.cardHolderName && <div className='font-bold popins text-red-400'>{errors.cardHolderName}</div>}
      
      
      <button className='bg-red-500 hover:bg-red-600 duration-200 rounded-full p-3 text-white my-5' type="submit">{isLoading ? <SyncLoader color='white' /> : 'Submit'}</button>
     

    </Form>
    </fieldset>
    
      )}
    
    </ Formik>
    
    </div>
  )
}

export default PayForm