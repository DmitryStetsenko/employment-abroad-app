import { NavLink } from 'react-router-dom';

const HeroTabs = () => {
  return (
    <div className="toggle-tabs">
        <NavLink to="/" className="btn-tab" data-number="1">
            <div className="btn-tab__content">
                <span className="btn-tab__title">Кандидату</span>
                <span className="btn-tab__subscr">Потребности клиентов</span>
            </div>
        </NavLink>
        <NavLink to="/employer" className="btn-tab" data-number="2">
            <div className="btn-tab__content">
                <span className="btn-tab__title">Работодателю</span>
                <span className="btn-tab__subscr">Работодателю</span>
            </div>
        </NavLink>
    </div>
  );
};

export default HeroTabs;