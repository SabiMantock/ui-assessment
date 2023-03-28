import Image from 'next/image';
import {LanguageSelector} from '../LanguageSelector';
import menu from '../../../public/images/menu.png';
import searchIcon from '../../../public/images/searchIcon.png';
import cart from '../../../public/images/cart.png';
import avatar from '../../../public/images/avatar.png';
import watsapp from '../../../public/images/watsapp.png';
import {useTranslation} from 'react-i18next';

export const MobileHeader = () => {
  const {t} = useTranslation();
  return (
    <div className='md:hidden'>
      <div className='flex justify-between items-center bg-black'>
        <div className=' flex py-1 px-5 bg-neutral-700 items-center z-10'>
          <LanguageSelector />
        </div>
        <div className='text-white text-sm overflow-hidden '>
          <div className=' absolute top-1 animate-marquee w-full'>
            <span> {t('sales')}</span>
          </div>
        </div>
        <div className='bg-green-500 py-1 px-4  z-50 flex text-xs items-center gap-3 text-white'>
          <div className='w-5'>
            <Image src={watsapp} alt='whatsapp' className='w-full' />
          </div>
          {t('mobile')}
        </div>
      </div>
      <div className=' px-4 py-6'>
        <div className='flex flex-col w-full'>
          <div className='flex justify-between w-full'>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <button style={{width: '25px'}}>
                <Image src={menu} alt='menu' />
              </button>
              <button style={{width: '25px'}}>
                <Image src={searchIcon} alt='search' />
              </button>
              {/* <form><input /></form> */}
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <button style={{width: '25px'}}>
                <Image src={cart} alt='search' />
              </button>
              <button style={{width: '30px'}}>
                <Image src={avatar} alt='search' />
              </button>
            </div>
          </div>
          {/* <div>nav</div> */}
        </div>
      </div>
    </div>
  );
};
