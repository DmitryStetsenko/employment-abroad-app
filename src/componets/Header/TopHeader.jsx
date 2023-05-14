import { Link } from 'react-router-dom';

const TopHeader = ({ routingData }) => {
  const { account, isOuter } = routingData;

  return (
    <div className="top-header">
      <ul className="language top-header__item">
        <li className="language__item">ru</li>
        <li className="language__item">ua</li>
        <li className="language__item">pl</li>
        <li className="language__item">en</li>
        <li className="language__item">cz</li>
        <li className="language__item">de</li>
      </ul>
      <ul className="social top-header__item">
        <li className="social__item social__item_instagram">
          <Link to="/"><i className="fa-brands fa-instagram"></i></Link>
        </li>
        <li className="social__item social__item_facebook">
          <Link to="/"><i className="fa-brands fa-facebook-f"></i></Link>
        </li>
        <li className="social__item">
          <Link to="/"><i className="fa-sharp fa-solid fa-paper-plane"></i></Link>
        </li>
      </ul>
      <div className="top-header__action">
        <div className="user-account action-item">
          <i className="fa-solid fa-right-to-bracket"></i>
          {/* <Link to="/account">Личный кабинет</Link> */}
          <Link to={ account.link } target={ account.isOuter ? '_blank' : '_self' }>Личный кабинет</Link>
        </div>
        <div className="top-header__addit-features">
          <Link to="tel: +380991112233" className="phone action-item">+38 099 111 22 33</Link>
          <div className="notifications action-item">
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="user-menu action-item">
            <i className="fa-solid fa-bars"></i>
            <ul className="user-menu-list"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;