import Image from 'next/image';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LanguageSelector} from '../LanguageSelector';
import {MobileHeader} from './MobileHeader';
import search from '../../../public/images/search-b.png';
import cart from '../../../public/images/cart.png';
import avatar from '../../../public/images/avatar.png';
import Link from 'next/link';

export const Header = () => {
  const {t} = useTranslation();

  return (
    <div>
      <div className='hidden md:block  relative'>
        <div className='flex justify-between items-center bg-gray-900'>
          <div className=' flex py-3 px-5 bg-neutral-700 items-center z-10'>
            <LanguageSelector />
          </div>
          <div className='text-white text-sm overflow-hidden '>
            <div className=' absolute top-3 animate-marquee'>
              <span className=''> {t('sales')}</span>
            </div>
          </div>
          <div className='bg-green-500 py-3 px-8 z-50'>{t('whatsapp')}</div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            style={{background: '#F9DC38', height: '88px', width: '160px'}}
          ></div>
          <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex '>
                <select className='w-40 mr-4 py-2 px-3  rounded-md outline-none '>
                  <option>All categories</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
                <form className='flex items-center w-full justify-between '>
                  <div className=' w-96'>
                    <input
                      className='w-full py-2 px-3  rounded-md outline-none   mr-2'
                      placeholder='what are you looking for?'
                    />
                  </div>
                  <button className='flex items-center bg-yellow-400'>
                    <span className='px-5'>search</span>
                    <div className=' w-10'>
                      <Image
                        src={search}
                        alt=''
                        className='w-full md:w-6-h-6'
                      />
                    </div>
                  </button>
                </form>
              </div>
              <div className='flex justify-between items-center gap-10'>
                <a className='mr-4'>
                  <Image src={cart} alt='' />
                </a>
                <a>
                  <Image src={avatar} alt='' />
                </a>
              </div>
            </div>
            <div>
              <ul className='mt-5 flex  gap-20 pl-4'>
                <Link href='/' className='text-sm'>
                  Home
                </Link>
                <li className='text-sm'>T-shirts</li>
                <li className='text-sm'>NBA</li>
                <li className='text-sm'>Tracksuits</li>
                <li className='text-sm'>Products Delivery • 1 – 2 days</li>
                <li className='text-sm'>Contact</li>
                <li className='text-sm'>Reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <MobileHeader />
    </div>
  );
};
