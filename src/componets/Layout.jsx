import { Outlet } from 'react-router-dom';

import Header from './Header';
import Hero from './Hero';

const Layout = () => {
  return (
    <>
      <Header />

      <Hero />

      <main>
        <Outlet />
      </main>

      <footer>Footer 2023</footer>
    </>
  );
};

export default Layout;