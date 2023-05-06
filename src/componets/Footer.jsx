import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="menu-footer-block">
            <div className="container">
                <div className="menu-footer">
                    <Menu modificator="-footer"/>

                    <Link to="/" className="logo logo_footer">
                        <img src="/img/logo-full-text-white.svg" alt="logo liftron" />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;