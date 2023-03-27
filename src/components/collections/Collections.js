import Image from 'next/image';
import React from 'react';
import play from '../../../public/images/play.png';
import styles from '../../styles/Collections.module.css';

export const Collections = ({categories}) => {
  console.log({categories: categories});

  return (
    <div className='px-4 py-14 md:px-20'>
      <h2 className='uppercase font-bold mb-5'>Other Collections</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-2 md:gap-4'>
        {categories.map((cat) => (
          <div key={cat.id} className='relative w-full md:w-96'>
            <div className=' w-full md:w-40 xl:w-full '>
              <Image
                src={cat.image}
                alt='leagues'
                width={500}
                height={500}
                className='w-full  xl:h-36 object-cover object-center'
              />
            </div>
            <div className=' flex h-auto absolute w-full md:w-40 xl:w-full   bottom-0'>
              <div className='w-full  xl:w-full   bg-gray-900 bg-opacity-60 blur-sm '></div>
              <div className=' w-1/12 '>
                <Image
                  src={play}
                  alt='play'
                  className='w-full h-auto object-contain'
                />
              </div>
            </div>
            <div className='absolute bottom-0 md:bottom-2  left-4'>
              <p className={styles.text}>{cat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
