import React from 'react';
import {Footer} from './footer/Footer';
import {Header} from './header/Header';

const Layout = ({children, banners}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
