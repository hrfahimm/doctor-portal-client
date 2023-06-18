import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModual = ({ treatment, setTreatment, selected }) => {
   const { name: treatmentName, slots } = treatment;
   // const date = format(selected, 'pp');
   const { user } = useContext(AuthContext);
   const handleBooking = (event) => {
      event.preventDefault();
      const form = event.target;
      const slot = form.slot.value;
      const name = form.name.value;
      const email = form.email.value;
      //const phone = form.phone.value;
      const booking = {
         appointmentDate: format(selected, 'PP'),
         treatment: treatmentName,
         patient: name,
         slot,
         email,
         //phone,
      };
      fetch('http://localhost:5000/bookings', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(booking),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.acknowledged) {
               setTreatment(null);
               toast.success('Booking confirmed');
               refetch();
            } else {
               toast.error(data.message);
            }
         });
      // setTreatment(null);
   };
   return (
      <>
         <input type='checkbox' id='my_modal' className='modal-toggle' />
         <div className='modal'>
            <div className='modal-box'>
               <h3 className='font-bold text-lg'>{treatmentName}</h3>
               <form
                  onSubmit={handleBooking}
                  className='grid grid-cols-1 gap-3 p-5 mt-10  '>
                  <input
                     type='text'
                     disabled
                     value={format(selected, 'PP')}
                     className='input w-full input-bordered '
                  />
                  <select name='slot' className='select input-bordered  w-full '>
                     {slots.map((slot) => (
                        <option value={slot}>{slot}</option>
                     ))}
                  </select>
                  <input
                     name='name'
                     type='text'
                     defaultValue={user?.uid}
                     disabled
                     placeholder='Your Name'
                     className='input input-bordered w-full '
                  />
                  <input
                     defaultValue={user?.email}
                     disabled
                     name='email'
                     type='text'
                     placeholder='Email'
                     className='input input-bordered w-full '
                  />
                  <input
                     name='number'
                     type='text'
                     placeholder='Number'
                     className='input input-bordered w-full '
                  />
                  <br />
                  <input
                     className='input input-bordered w-full  btn btn-accent'
                     type='submit'
                     value='Submit'
                  />
               </form>
               <div className='modal-action'>
                  <label htmlFor='my_modal' className='btn'>
                     Close!
                  </label>
               </div>
            </div>
         </div>
      </>
   );
};

export default BookingModual;
