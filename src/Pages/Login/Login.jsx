import React, { useContext, useState } from 'react';
//import {useState} from "react";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const { signIn } = useContext(AuthContext);
   const [logInError, setLogInError] = useState('');
   const location = useLocation();
   const navigate = useNavigate();

   const from = location.state?.from?.pathname || '/';

   const handleLogin = (data) => {
      setLogInError('');
      console.log(data);
      signIn(data.email, data.password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
         })
         .catch((error) => {
            console.log(error.message);
            setLogInError(error.message);
         });
   };
   return (
      <div className='h-[500px]   flex justify-center items-center '>
         <div className='w-96 p-7 shadow-xl '>
            <h2 className='text-xl text-centar '>Login</h2>

            <form onSubmit={handleSubmit(handleLogin)}>
               <div className='form-control w-full max-w-xs'>
                  <label className='label'>
                     <span className='label-text'>Email</span>
                  </label>
                  <input
                     type='email'
                     className='input input-bordered w-full max-w-xs'
                     {...register('email', { required: 'email is requard' })}
                  />
                  {errors.email && (
                     <p className='text-red-600 ' role='alert'>
                        {errors.email?.message}
                     </p>
                  )}
               </div>
               <div className='form-control w-full max-w-xs'>
                  <label className='label'>
                     <span className='label-text'>Password</span>
                  </label>
                  <input
                     type='password'
                     className='input input-bordered w-full max-w-xs'
                     {...register('password', {
                        required: 'password is requard',
                        minLength: { value: 6, message: 'password Must be 6 Chareccter' },
                     })}
                  />
                  {errors.password && (
                     <p className='text-red-600 ' role='alert'>
                        {errors.password?.message}
                     </p>
                  )}

                  <label className='label'>
                     <span className='  text-[#374151] label-text-alt'>
                        Forget password ?
                     </span>
                  </label>
               </div>

               <input
                  className='btn mt-3  	btn-accent  w-full max-w-xs text-white'
                  value='login'
                  type='submit'
               />
               <div>{logInError && <p>{logInError} error</p>}</div>
            </form>
            <p className='py-3'>
               New to Doctors Portal ?
               <Link className='text-primary' to='/signup'>
                  Create New Account
               </Link>
            </p>
            <div className='divider'>OR</div>
            <button className='btn btn-outline text-xs w-full'>
               CONTINUE WITH GOOGLE
            </button>
         </div>
      </div>
   );
};

export default Login;
