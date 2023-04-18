import { NavLink } from 'react-router-dom';

const Menu = ({children}) => {
  return (
    <nav className="menu-header__menu">
    <ul className="menu-list">
      <li className="menu-list__item"><NavLink to="/" className="menu-list__link">Соискателю</NavLink></li>
      <li className="menu-list__item"><NavLink to="/employer" className="menu-list__link">Работодателю</NavLink></li>
      <li className="menu-list__item"><NavLink to="/contacts" className="menu-list__link">Контакты</NavLink></li>
      <li className="menu-list__item"><NavLink to="/about" className="menu-list__link">О нас</NavLink></li>
    </ul>
    { children }
    </nav>
  );
};

export default Menu;