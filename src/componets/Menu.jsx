import { Link } from 'react-router-dom';

const Menu = ({children}) => {
  return (
    <nav className="menu">
      <Link to="/">Главная</Link>

      { children }
      
      <Link to="/employer">Работодателю</Link>
      <Link to="/">Соискателю</Link>
      <Link to="/account">Личный кабинет</Link>
    </nav>
  );
};

export default Menu;