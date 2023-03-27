import Link from 'next/link';
import React, {useState} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import Image from 'next/image';
import heart from '../../../public/images/heart.png';
import cart from '../../../public/images/cart-b.png';
import reward from '../../../public/images/reward.png';

export const getStaticPaths = async () => {
  const res = await fetch(
    'https://camiestas-futbol.effectstudios.co/api/v1/products'
  );
  const data = await res.json();
  const paths = data.products.data.map((prod) => {
    return {
      params: {slug: prod.slug},
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  console.log(slug);
  const res = await fetch(
    `https://camiestas-futbol.effectstudios.co/api/v1/product-single/${slug}`
  );
  const data = await res.json();

  return {
    props: {product: data.product},
  };
};

const Details = ({product}) => {
  console.log({product});
  return (
    <div className='px-4 md:px-20 relative'>
      <div className='text-sm mb-2'>
        <Link href='/' className='text-blue-500 hover:text-black'>
          Home
        </Link>
        {product.categories !== [] ? null : <span className='mx-2'>{'>'}</span>}

        <Link href='#' className='text-blue-500 hover:text-black'>
          {product.categories !== [] ? null : product.categories[0].title}
        </Link>
        <span className='mx-2'>{'>'}</span>
        <Link href='#' className='text-gray-500 hover:text-black'>
          {product.product_name}
        </Link>
      </div>
      <div className='flex flex-col md:flex-row '>
        <div className='w-full md:w-1/2'>
          <Carousel
            showStatus={false}
            swipeable={true}
            showIndicators={false}
            showThumbs={false}
          >
            {product.gallery.map((gal) => (
              <div key={gal.id} className='w-3/4'>
                <Image
                  src={gal.image}
                  alt=''
                  width={500}
                  height={500}
                  className='w-full'
                  priority
                />
              </div>
            ))}
          </Carousel>
          <div className='flex gap-3 mt-3'>
            {product.gallery?.map((gal) => (
              <div key={gal.id} style={{width: '50px'}}>
                <Image
                  src={gal.image}
                  alt=''
                  width={500}
                  height={500}
                  className='w-full'
                  priority
                />
              </div>
            ))}
          </div>
        </div>
        <div className='w-full md:w-1/2 md:ml-4'>
          <h3 className='mt-4 mb-2 text-lg font-bold'>
            {product.product_name}
          </h3>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center gap-3'>
              <p className=' text-4xl font-bold'>€30.00</p>
              <p className='text-base text-red-600 line-through'>€89.95</p>
              <div className=' bg-green-500 px-2 py-1'>
                <p className=' text-xs text-white'>Save 67%</p>
              </div>
            </div>
            <button>
              <Image
                src={heart}
                alt=''
                width={500}
                height={500}
                className='w-6 h-6'
              />
            </button>
          </div>
          <p className='text-sm'>
            {product.description.replace(/<\/?[^>]+(>|$)/g, '')}
          </p>
          <form className='bg-white  p-4'>
            <div className='mb-4 flex items-center'>
              <label
                htmlFor='size'
                className='block font-medium w-1/5 text-left mr-4'
              >
                Size
              </label>
              <div className='w-3/4 flex gap-3'>
                <select className='w-full py-2 px-3 border border-gray-400 rounded-lg mt-2'>
                  <option>Select a shirt size</option>
                  {product.attributes.map((attribute) =>
                    attribute.product_attribute_values.map((att) => (
                      <option key={att.id}>{att.name}</option>
                    ))
                  )}
                </select>
                <button className='mt-2 text-xs w-1/4 border bg-gray-100'>
                  View Size chart
                </button>
              </div>
            </div>
            <div className='mb-4 flex items-center'>
              <label
                htmlFor='name'
                className='block font-medium w-1/5 text-left mr-4'
              >
                Name
              </label>
              <div className='w-3/4'>
                <input
                  id='name'
                  type='text'
                  className='w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
                />
              </div>
            </div>
            <div className='mb-4 flex items-center'>
              <label
                htmlFor='nos'
                className='block font-medium w-1/5 text-left mr-4'
              >
                Number on Shirt
              </label>
              <div className='w-3/4'>
                <input
                  id='nos'
                  type='text'
                  className='w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
                />
              </div>
            </div>
            <div className='mb-4 flex items-center'>
              <label
                htmlFor='patch'
                className='block font-medium w-1/5 text-left mr-4'
              >
                Patch
              </label>
              <div className='w-3/4'>
                <select className='w-full py-2 px-3 border border-gray-400 rounded-lg mt-2'>
                  <option>Select a shirt size</option>
                  {product.patches.map((patch) => (
                    <option key={patch.id}>{patch.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='mb-4 flex items-center'>
              <label
                htmlFor='quantity'
                className='block font-medium w-1/5 text-left mr-4'
              >
                Quantity
              </label>
              <input
                type='number'
                value='1'
                className='w-1/5 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <button className='flex justify-between items-center w-full bg-yellow-400'>
              <span className='px-5'>Add to Cart</span>
              <div className=' w-10 '>
                <Image src={cart} alt='' className='w-full md:w-6-h-6' />
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className='mb-10 absolute bottom-16 left-0 hidden md:block'>
        <div className=' w-40'>
          <Image src={reward} alt='reward' />
        </div>
      </div>
    </div>
  );
};

export default Details;
