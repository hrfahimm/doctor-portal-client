import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppOp from './AppOp';
import BookingModual from '../BookingModal/BookingModual';
import { useQuery } from 'react-query';

const AbleAppi = ({ selected }) => {
   const [treatment, setTreatment] = useState(null);
   //const date = format(selectedDate, 'pp');
   const { data: appoinmentOptions = [] } = useQuery({
      queryKey: ['appoinmentOptions'],
      queryFn: async () =>
         fetch('http://localhost:5000/appointmentoptions').then((res) => res.json()),
   });

   return (
      <section className=''>
         <p className='text-center py-16 font-bold text-xl   '>
            AvailAble Appoinments on{' '}
            <span className='text-primary underline text-2xl'>
               {format(selected, 'PP')}
            </span>
         </p>
         <div className='grid gap-6 px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {appoinmentOptions.map((option) => (
               <AppOp
                  key={option._id}
                  appoinmentOption={option}
                  setTreatment={setTreatment}></AppOp>
            ))}
         </div>

         {/* <BookingModual
            setTreatment={setTreatment}
            selected={selected}
            treatment={treatment}></BookingModual> */}

         {treatment && (
            <BookingModual
               setTreatment={setTreatment}
               selected={selected}
               treatment={treatment}></BookingModual>
         )}
      </section>
   );
};

export default AbleAppi;
