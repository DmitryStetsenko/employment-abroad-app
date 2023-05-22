import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import OutsideClickHandler from '../OutsideClickHandler';

const Menu = ({children, modificator}) => {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1100 });

  const isFooter = modificator === '-footer';

  let classForMobile = isMobile ? 'menu-list_mobile' : '';
  classForMobile = isFooter ? 'menu-list_mobile-footer' : classForMobile;

  useEffect(() => {
    if (isMobile && !isFooter) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [isMobile]);

  const closeMenu = () => {
    if (isMobile && !isFooter) {
      setIsActive(false);
    }
  }

  return (
    <OutsideClickHandler 
      className="menu-header__menu"
      tagName='nav'
      onOutsideClick={ closeMenu }
    >
        
      {
        (isMobile && !isFooter) &&
        <button 
          onClick={ () => setIsActive(!isActive) } 
          className={`btn ${isActive ? 'btn_toggle-menu-active' : 'btn_toggle-menu'}`}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      }
      
      {
        isActive &&
        <ul className={`menu-list${modificator} ${ classForMobile }`}>
          <li className={`menu-list${modificator}__item`}><NavLink onClick={ closeMenu } to="/" className={`menu-list${modificator}__link`}>Кандидату</NavLink></li>
          <li className={`menu-list${modificator}__item`}><NavLink onClick={ closeMenu } to="/employer" className={`menu-list${modificator}__link`}>Роботодавцю</NavLink></li>
          <li className={`menu-list${modificator}__item`}><NavLink onClick={ closeMenu } to="/contacts" className={`menu-list${modificator}__link`}>Контакти</NavLink></li>
          <li className={`menu-list${modificator}__item`}><NavLink onClick={ closeMenu } to="/about" className={`menu-list${modificator}__link`}>Про нас</NavLink></li>
        </ul>
      }
      
      { children }
    </OutsideClickHandler>
  );
};

Menu.defaultProps = { modificator: '' };

export default Menu;