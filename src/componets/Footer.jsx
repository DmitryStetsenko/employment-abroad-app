import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="menu-header-block">
            <div className="container">
                <div className="menu-header">
                    <Menu />
                    <Link to="/" className="logo">
                        <img src="/img/logo-full-dark.svg" alt="logo liftron" />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;