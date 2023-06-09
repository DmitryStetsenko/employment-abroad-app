import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Header/Menu';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="menu-footer-block">
            <div className="container">
                <div className="menu-footer">
                  <Link to="/" className="logo logo_footer">
                      <img src="/img/logo-full-text-white.svg" alt="logo liftron" />
                  </Link>
                  
                  <Menu modificator="-footer"/>

                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;