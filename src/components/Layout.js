import React from 'react';
import {Footer} from './footer/Footer';
import {Header} from './header/Header';
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({subsets: ['latin']});

const Layout = ({children}) => {
  return (
    <div className={montserrat.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
