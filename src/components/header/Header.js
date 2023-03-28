import Image from 'next/image';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LanguageSelector} from '../LanguageSelector';
import {MobileHeader} from './MobileHeader';
import search from '../../../public/images/search-b.png';
import cart from '../../../public/images/cart.png';
import avatar from '../../../public/images/avatar.png';
import watsapp from '../../../public/images/watsapp.png';
import {NavItem} from '../navItem/NavItem';

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
          <div className='bg-green-500 py-3 px-8 z-50 flex text-xs items-center gap-3 text-white'>
            <div className='w-5'>
              <Image src={watsapp} alt='whatsapp' className='w-full' />
            </div>

            {t('whatsapp')}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <div
            style={{background: '#F9DC38', height: '88px', width: '160px'}}
          ></div>
          <div className='flex flex-col w-full justify-between '>
            <div className='flex border-b-2'>
              <div className='flex py-1'>
                <select className='w-40 mr-4 py-2 px-3  rounded-md outline-none '>
                  <option>All categories</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
              <div className='border-r-2 '></div>
              <form className='flex items-center w-full justify-between py-1'>
                <div className=' w-96'>
                  <input
                    className='w-full py-2 px-3  rounded-md outline-none   mr-2'
                    placeholder='what are you looking for?'
                  />
                </div>
                <div className=' h-full pr-8 flex '>
                  <button className='flex items-center self-center  bg-yellow-400 '>
                    <span className='px-5'>search</span>
                    <div className=' w-10'>
                      <Image
                        src={search}
                        alt=''
                        className='w-full md:w-6-h-6'
                      />
                    </div>
                  </button>
                </div>
              </form>
              <div className='border-r-2 '></div>
              <div className='flex items-center gap-5 px-5'>
                <div className='mr-4  '>
                  <Image src={cart} alt='' className='w-full' />
                </div>
                <div className='border-r-2 h-full'></div>
                <div className=''>
                  <Image src={avatar} alt='' className='w-full' />
                </div>
              </div>
            </div>
            <div className='border-b-2 flex px-4 gap-16'>
              <NavItem href='/'>Home</NavItem>
              <NavItem href='#'>T-shirts</NavItem>
              <NavItem href='#'>NBA</NavItem>
              <NavItem href='#'>Tracksuits</NavItem>
              <NavItem href='#'>Products Delivery • 1 – 2 days</NavItem>
              <NavItem href='#'>Contact</NavItem>
              <NavItem href='#'>Reviews</NavItem>
            </div>
          </div>
        </div>
      </div>
      <MobileHeader />
    </div>
  );
};
