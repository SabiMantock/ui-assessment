import React from 'react';
import {CardWithIcon} from '../cards/CardWithIcon';
import truck from '../../../public/images/truck.png';
import phone from '../../../public/images/phone.png';
import whats from '../../../public/images/whats.png';
import quality from '../../../public/images/quality.png';

export const Communication = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 grid-rows-2 xl:grid-rows-1 gap-2 p-3 mt-2 mb-3 md:px-10'>
      <div className='col-span-1 row-span-1'>
        <CardWithIcon
          icon={truck}
          title='Secure Shipping'
          text='on all orders'
        />
      </div>
      <div className='col-span-1 row-span-1'>
        <CardWithIcon icon={phone} title='Telephone' text='+1 23 456 7890' />
      </div>
      <div className='col-span-1 row-span-1'>
        <CardWithIcon
          icon={whats}
          title='Chat WhatsApp'
          text='Mon – Fri: 9:00 – 21:00'
          additionalText='Sat – Sun: 9:00 – 17:00'
          show
        />
      </div>
      <div className='col-span-1 row-span-1'>
        <CardWithIcon
          icon={quality}
          title='Quality Guarantee'
          text='Verified Purchase Reviews'
        />
      </div>
    </div>
  );
};
