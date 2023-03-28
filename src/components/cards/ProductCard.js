import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Product.module.css';
export const ProductCard = ({productName, total = [] || '', images = []}) => {
  const firstImage = images[0].image;
  return (
    <div className={styles.card}>
      <div className=' relative'>
        <div className='absolute bottom-2 left-2 bg-green-500 px-2 py-1'>
          <p className=' text-xs text-white'>Save 67%</p>
        </div>
        <div className={styles.image}>
          <Image
            src={firstImage}
            alt='product'
            className='w-full h-full'
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className=' p-4'>
        <p className=' text-xs text-gray-500'>{productName}</p>
        <div className='flex gap-2 items-center'>
          <p className=' font-bold'>€{total}</p>
          <p className=' text-red-600 line-through text-xs'>€89.95</p>
        </div>
      </div>
    </div>
  );
};
