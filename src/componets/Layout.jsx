import { Outlet } from 'react-router-dom';
import Footer from './Footer';

import Header from './Header';
import { Hero } from './Hero';

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;