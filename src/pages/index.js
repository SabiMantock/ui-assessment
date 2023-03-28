import React from 'react';
import Head from 'next/head';
import {Hero} from '@/components/hero/Hero';
import reward from '../../public/images/reward.png';
import Image from 'next/image';
import personal from '../../public/images/personal.png';
import social from '../../public/images/social.png';
import 'swiper/css';
import {Product} from '@/components/product/Product';
import {Communication} from '@/components/communication/Communication';
import {CountryLeagues} from '@/components/country/CountryLeagues';
import {Collections} from '@/components/collections/Collections';
import {Card} from '@/components/cards/Card';

export const getStaticProps = async () => {
  const [banners, products, categories, category] = await Promise.all([
    fetch(
      'https://camiestas-futbol.effectstudios.co/api/v1/banner?sortby=asc'
    ).then((res) => res.json()),
    fetch(
      'https://camiestas-futbol.effectstudios.co/api/v1/popular-products?sortby=asc'
    ).then((res) => res.json()),
    fetch(
      'https://camiestas-futbol.effectstudios.co/api/v1/product-category?sortby=asc'
    ).then((res) => res.json()),
    fetch(
      'https://camiestas-futbol.effectstudios.co/api/v1/product-category-slug/country-leagues?sortby=asc'
    ).then((res) => res.json()),
  ]);

  const updatedData = [
    ...categories.categories.data.splice(0, 3),
    ...categories.categories.data.slice(4, 5),
    ...categories.categories.data.slice(6, 12),
  ];

  return {
    props: {
      banners: banners.banners.data || [],
      products: products.products.data || [],
      categories: updatedData || [],
      category: category.category.sub_categories,
    }, // will be passed to the page component as props
  };
};

export default function Home({banners, products, categories, category}) {
  console.log({products});
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Home page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero banners={banners} />
      <Communication />
      <div className='mb-10'>
        <div className=' w-40'>
          <Image src={reward} alt='reward' />
        </div>
      </div>
      <Product products={products} />
      <CountryLeagues category={category} />
      <Collections categories={categories} />
      <div className='flex flex-col gap-4 pb-20 md:flex-row md:gap-10 md:px-20'>
        <Card
          src={personal}
          title='PERSONALIZATION'
          text='Put a custom print on the football shirt of your choice with our Personalization service.'
          addtionalText='Tell us what name, what number and we put it. FREE!!!'
        />
        <Card
          src={social}
          title='Social networks'
          text='Share your shirts with us with the #CamisetasFutbolSpainnn'
          show
        />
      </div>
    </>
  );
}
