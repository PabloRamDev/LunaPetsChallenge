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



const validationSchema = yup
.object().shape({
  email: yup.string()
  .email('Invalid email')
  .required('Required')
})


interface LoginForm {
  email: string;
}


const LoginForm = () => {


    const dispatch = useDispatch<AppDispatch>()

    const router = useRouter()

    const initialValues: LoginForm = { email: '' };

    const { isLoading } = useAppSelector(state => state.authReducer.value)

 
    

    const handleSubmit = async (data: typeof initialValues) => {
        
        
        await axios.get("http://localhost:8000/api/v1/services/", {
            params: {
                email: data.email
            }
        }).then(res => {
            
                dispatch(logIn(data.email))
                dispatch(logInSuccess())
                localStorage.setItem('email', data.email)
                router.push('/dashboard')
           
        }).catch(error => {
          
          dispatch(logInFailure(error.message))
        })

        
    };
    
  

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    
  >
    {({errors, touched})=> (
    <Form className="flex flex-col">
    <Field
        className='rounded-xl p-3 bg-slate-200 focus:ring-red-400 border border-red-300 dark:text-slate-700' 
        type="email" 
        id="email"
        placeholder='your email'
        name = 'email'
         />
      
      {touched.email && errors.email && <div className='font-bold popins text-red-400'>{errors.email}</div>}
      
      <button className='bg-red-500 hover:bg-red-600 duration-200 rounded-full p-3 text-white my-5' type="submit">{isLoading ? <SyncLoader color='white' /> : 'Submit'}</button>
     

    </Form>
    
      )}
    
    </ Formik>
  )
}

export default LoginForm