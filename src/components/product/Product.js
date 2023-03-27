import React from 'react';
import {Virtual} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ProductCard} from '../cards/ProductCard';
import 'swiper/css';
import styles from '../../styles/Product.module.css';
import Link from 'next/link';

export const Product = ({products}) => {
  return (
    <div className=' px-4 md:px-20'>
      <div className='flex'>
        <div>
          <h3 className=' text-black font-bold uppercase'>
            Most popular t-shirts
          </h3>
        </div>
        <div>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Virtual]}
          className={[styles['swiper'], styles['swiper-wrapper']].join(' ')}
          slidesPerView={1}
          spaceBetween={2}
          virtual
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 4,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id} virtualIndex={product.shop_id}>
              <Link href={`/products/${product.slug}`}>
                <ProductCard
                  productName={product.product_name}
                  total={product.total}
                  images={product.gallery}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
