import {ProductCard} from '@/components/cards/ProductCard';
import Link from 'next/link';
import React from 'react';

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     'https://camiestas-futbol.effectstudios.co/api/v1/product-category?sortby=asc'
//   );
//   const data = await res.json();

//   const paths = data.categories.data.map((cat) => {
//     return {
//       params: {slug: cat.slug},
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    'https://camiestas-futbol.effectstudios.co/api/v1/products'
  );
  const data = await res.json();

  return {
    props: {products: data.products.data},
  };
};

const League = ({products}) => {
  console.log(products);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-20 px-4 py-10'>
      {products.map((prod) => (
        <Link href={`/products/${prod.slug}`} key={prod.id}>
          <ProductCard
            images={prod.gallery}
            productName={prod.product_name}
            total={prod.total}
          />
        </Link>
      ))}
    </div>
  );
};

export default League;
