import React from 'react';
import {Pagination, Virtual} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import styles from '../../styles/Hero.module.css';
import bag from '../../../public/images/bag.png';

export const Hero = ({banners}) => {
  return (
    <div className='md:p-10'>
      <Swiper
        className={styles.swiper}
        modules={[Pagination, Virtual]}
        // spaceBetween={50}
        slidesPerView={1}
        // navigation
        virtual
        pagination={{
          clickable: true,
          type: 'custom',
          horizontalClass: styles['swiper-pagination-custom'],
          renderCustom: function (swiper, current, total) {
            console.log(swiper);
            let dots = '';
            for (let i = 0; i < total; i++) {
              dots += `<span class="${styles['swiper-pagination-dash']} ${
                i === current - 1 ? styles['active'] : ''
              }"></span>`;
            }
            return dots;
          },
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {banners?.map((banner) => (
          <SwiperSlide
            key={banner.id}
            virtualIndex={banner.shop_id}
            className={styles['swiper-slide']}
          >
            <div className='relative w-full'>
              <Image
                src={banner.image}
                alt='banner'
                className='w-full h-50'
                width={1000}
                height={1000}
              />
              <div className='absolute top-5 left-5 w-full h-full'>
                <p className='text-white font-bold text-2xl capitalize'>
                  {banner.content?.replace(/<\/?[^>]+(>|$)/g, '')}
                </p>
              </div>
              {banner.btn_text && banner.btn_text.length > 0 && (
                <button className='absolute bottom-5 right-5 flex items-center  bg-black  bg-opacity-25 text-white border-white border-2 '>
                  <p className='px-4 py-2'>{banner.btn_text}</p>
                  <div className='w-8 z-50 bg-white  py-3.5  mx-auto'>
                    <div className='w-3 mx-auto '>
                      <Image src={bag} alt='bag' className={styles.image} />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
