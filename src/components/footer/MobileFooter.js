import Image from 'next/image';
import React from 'react';
import payment from '../../../public/images/payment.png';
import fb from '../../../public/images/fb-black.png';
import twt from '../../../public/images/twt-black.png';
import ig from '../../../public/images/ig-black.png';
import play from '../../../public/images/play-2.png';

export const MobileFooter = () => {
  const date = new Date();
  return (
    <footer className='md:hidden bg-gray-100'>
      <div className='px-4 py-10'>
        <div className='flex flex-col gap-6'>
          <div>
            <h3 className='font-bold'>Main Menu</h3>
            <ul className='mt-5 flex flex-col gap-4'>
              <li className='text-sm'>Home</li>
              <li className='text-sm'>T-shirts</li>
              <li className='text-sm'>NBA</li>
              <li className='text-sm'>Tracksuits</li>
              <li className='text-sm'>Products Delivery • 1 – 2 days</li>
              <li className='text-sm'>Contact</li>
              <li className='text-sm'>Reviews</li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold'>Secondary Menu</h3>
            <ul className='mt-5 flex flex-col gap-4'>
              <li className='text-sm'>Search</li>
              <li className='text-sm'>Privacy policy</li>
              <li className='text-sm'>Shipping Policy</li>
              <li className='text-sm'>Returns Policy</li>
              <li className='text-sm'>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold'>Subscribe</h3>
            <div className='mt-5'>
              <p className='mb-5 text-sm'>
                Subscribe to our mailing list to receive the latest news.
              </p>
              <form>
                <div className='flex'>
                  <input
                    className='w-full py-1  h-10 outline-none  '
                    placeholder='Email Address'
                  />
                  <button>
                    <Image src={play} alt='twitter' className='w-full h-10' />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <h3 className='font-bold'>Follow Us</h3>
            <div className='flex items-center gap-1 mt-5'>
              <div className='w-10'>
                <Image src={fb} alt='facebook' className='w-full' />
              </div>
              <div className='w-10'>
                <Image src={twt} alt='twitter' className='w-full' />
              </div>
              <div className='w-10'>
                <Image src={ig} alt='instagram' className='w-full' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='mt-4'>
              <Image src={payment} alt='payment' />
            </div>
          </div>
        </div>
      </div>
      <div className=' border-t-2 px-4'>
        <p className='text-xs py-6 text-black'>
          © {date.getFullYear()} Jambulani • All rights reserved
        </p>
      </div>
    </footer>
  );
};
