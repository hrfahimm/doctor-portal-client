import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AbleAppi from '../AbleAppi/AbleAppi';

const Appoinment = () => {
   const [selected, setSelected] = useState(new Date());

   return (
      <div>
         <AppoinmentBanner
            selected={selected}
            setSelected={setSelected}></AppoinmentBanner>
         <AbleAppi selected={selected}></AbleAppi>
      </div>
   );
};

export default Appoinment;
