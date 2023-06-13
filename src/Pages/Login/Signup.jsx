import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
const Signup = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const { createUser, updateUser } = useContext(AuthContext);
   const [signUpError, setSignUpError] = useState('');
   const handleSignUp = (data) => {
      console.log(data);
      setSignUpError('');
      createUser(data.email, data.password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            toast('user create successfully');
            const userInfo = {
               displayName: data.name,
            };
            updateUser(userInfo)
               .then(() => {})
               .catch((err) => console.log(err));
         })
         .catch((error) => {
            console.log(error);
            setSignUpError(error.message);
         });
   };

   return (
      <div className='h-[700px] flex justify-center items-center '>
         <div className='w-96 p-7 shadow-xl '>
            <h2 className='text-xl text-centar '>Sign up</h2>

            <form onSubmit={handleSubmit(handleSignUp)}>
               <div className='form-control w-full max-w-xs'>
                  <label className='label'>
                     <span className='label-text'>Name</span>
                  </label>
                  <input
                     type='text'
                     {...register('name', { required: 'name is requard' })}
                     className='input input-bordered w-full max-w-xs'
                  />
                  {errors.name && (
                     <p className='text-red-600 ' role='alert'>
                        {errors.name?.message}
                     </p>
                  )}
               </div>
               <div className='form-control w-full max-w-xs'>
                  <label className='label'>
                     <span className='label-text'>Email</span>
                  </label>
                  <input
                     type='email'
                     {...register('email', { required: true })}
                     className='input input-bordered w-full max-w-xs'
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
                     {...register('password', {
                        required: 'name is requard',
                        minLength: {
                           value: 6,
                           message: 'password Must be 6 Chareccter',
                        },
                     })}
                     className='input input-bordered w-full max-w-xs'
                  />
                  {errors.password && (
                     <p className='text-red-600 ' role='alert'>
                        {errors.password?.message}
                     </p>
                  )}
               </div>

               <input
                  className='btn mt-3 btn-accent w-full max-w-xs text-white'
                  value='login'
                  type='submit'
               />
               {signUpError && <p className='text-red-500'>{signUpError}</p>}
            </form>
            <p className='py-3'>
               Have An account !
               <Link className='text-primary' to='/login'>
                  Login
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

export default Signup;
