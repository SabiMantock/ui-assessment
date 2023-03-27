import Image from 'next/image';
import React from 'react';
import twt from '../../../public/images/twt.png';
import fb from '../../../public/images/fb.png';
import ig from '../../../public/images/ig.png';
import styles from '../../styles/Card.module.css';

export const Card = ({src, title, text, addtionalText, show = false}) => {
  return (
    <div className='relative w-full px-4 md:p-0'>
      <div className='relative bg-black '>
        <Image src={src} alt='src' className='w-full' />
        <div className='absolute bottom-5 left-4 md:bottom-0'>
          <h3 className='text-white text-sm font-semibold md:text-lg'>
            {title}
          </h3>
          <p className={styles.text}>{text}</p>
          {!show && <p className={styles.addText}>{addtionalText}</p>}
          {show && (
            <div className='flex gap-1 mb-5 md:mb-10'>
              <a>
                <Image src={fb} alt='src' className='w-full' />
              </a>
              <a>
                <Image src={twt} alt='src' className='w-full' />
              </a>
              <a>
                <Image src={ig} alt='src' className='w-full' />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
