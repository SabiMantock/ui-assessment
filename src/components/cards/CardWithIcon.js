import Image from 'next/image';
import React from 'react';
import leftRect from '../../../public/images/leftRect.png';
import rightRect from '../../../public/images/rightRect.png';

export const CardWithIcon = ({
  icon,
  title,
  text,
  additionalText,
  show = false,
}) => {
  return (
    <div className='w-full h-full bg-yellow-100'>
      <div className='relative'>
        <div className=' w-10 sm:w-16'>
          <Image src={rightRect} alt='icon' className='w-full h-auto' />
        </div>
        <div className='absolute top-0 w-5 sm:w-8  '>
          <Image src={leftRect} alt='icon' className='w-full h-auto' />
        </div>
        <div className='absolute top-5 left-5 w-6 sm:top-8 sm:left-8 sm:w-9 '>
          <Image src={icon} alt='icon' className='h-auto w-full' />
        </div>
      </div>
      <div className='pl-4 pt-2 mt-5 pb-2'>
        <h3 className='font-medium text-xs sm:text-lg mt-1'>{title}</h3>
        <p className='text-gray-500 text-xs sm:text-sm mt-1'>{text}</p>
        {show && (
          <p className='text-gray-500 text-xs sm:text-sm'>{additionalText}</p>
        )}
      </div>
    </div>
  );
};
