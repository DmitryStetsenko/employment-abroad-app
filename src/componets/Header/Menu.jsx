import { NavLink } from 'react-router-dom';

const Menu = ({children, modificator}) => {
  return (
    <nav className="menu-header__menu">
    <ul className="menu-list">
      <li className={`menu-list${modificator}__item`}><NavLink to="/" className={`menu-list${modificator}__link`}>Кандидату</NavLink></li>
      <li className={`menu-list${modificator}__item`}><NavLink to="/employer" className={`menu-list${modificator}__link`}>Роботодавцю</NavLink></li>
      <li className={`menu-list${modificator}__item`}><NavLink to="/contacts" className={`menu-list${modificator}__link`}>Контакти</NavLink></li>
      <li className={`menu-list${modificator}__item`}><NavLink to="/about" className={`menu-list${modificator}__link`}>Про нас</NavLink></li>
    </ul>
    { children }
    </nav>
  );
};

Menu.defaultProps = { modificator: '' };

export default Menu;