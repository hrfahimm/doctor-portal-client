import React from 'react';

const AppOp = ({ appoinmentOption, setTreatment }) => {
   const { name, slots } = appoinmentOption;
   return (
      <div className='card w-[425]  m-5 px-5 bg-base-100 shadow-xl'>
         <div className='card-body justify-start'>
            <h2 className=' text-2xl  text-primary'>{name}</h2>
            <p>{slots.length > 0 ? slots[0] : 'try Another Day'}</p>
            <p>
               <span className='text-primary font-bold underline pr-2'>
                  {slots.length}{' '}
               </span>
               {slots.length > 1 ? 'space' : 'Space'} AvaiAble
            </p>
            <div className='card-actions justify-end pt-5'>
               <label
                  disabled={slots.length === 0}
                  onClick={() => setTreatment(appoinmentOption)}
                  htmlFor='my_modal'
                  className='btn  btn-primary bg-gradient-to-r from-primary to-secondary text-white'>
                  Book Appoinment
               </label>
            </div>
         </div>
      </div>
   );
};
export default AppOp;
