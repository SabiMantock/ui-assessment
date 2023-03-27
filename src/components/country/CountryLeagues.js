import Image from 'next/image';
import React from 'react';
import ucl from '../../../public/images/ucl.png';

export const CountryLeagues = ({category}) => {
  console.log(category);
  return (
    <div className='px-4 py-10 md:px-20'>
      <h2 className='uppercase font-bold mb-5'>Country Leagues</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-2 '>
        {category.map((cat) => (
          <div key={cat.id}>
            <div className=' w-full'>
              <Image
                src={cat.image}
                alt='leagues'
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <p className='text-xs text-black'>{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
