import { Outlet } from 'react-router-dom';
import Footer from './Footer';

import { Header } from './Header';
import { Hero } from './Hero';
import UserActionFixed from './UserActionFixed';

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />

      {/* <main>
        <Outlet />
      </main> */}

      <Footer />
      <UserActionFixed />
    </>
  );
};

export default Layout;