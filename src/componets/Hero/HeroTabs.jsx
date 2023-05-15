import { NavLink } from 'react-router-dom';

const HeroTabs = () => {
  return (
    <div className="toggle-tabs">
        <NavLink to="/" className="btn-tab" data-number="1">
            <div className="btn-tab__content">
                <span className="btn-tab__title">Кандидату</span>
                <span className="btn-tab__subscr">Потреби та пропозиції</span>
            </div>
        </NavLink>
        <NavLink to="/employer" className="btn-tab" data-number="2">
            <div className="btn-tab__content">
                <span className="btn-tab__title">Роботодавцю</span>
                <span className="btn-tab__subscr">Потреби та пропозиції</span>
            </div>
        </NavLink>
    </div>
  );
};

export default HeroTabs;