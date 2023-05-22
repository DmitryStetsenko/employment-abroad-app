import { Link } from 'react-router-dom';

const TopHeader = ({ routingData }) => {
  const { account, isOuter } = routingData;

  return (
    <div className="top-header">
      <ul className="language top-header__item">
        <li className="language__item">ru</li>
        <li className="language__item language__item_active">ua</li>
        <li className="language__item">pl</li>
        <li className="language__item">en</li>
        <li className="language__item">cz</li>
        <li className="language__item">de</li>
      </ul>
      <ul className="social top-header__item">
        <li className="social__item social__item_instagram">
          <a target="_blank" href="https://www.instagram.com/liftroncompany/?igshid=YmMyMTA2M2Y%3D"><i className="fa-brands fa-instagram"></i></a>
        </li>
        <li className="social__item social__item_facebook">
          <a target="_blank" href="https://www.facebook.com/people/Liftron-Company/100090525202143/"><i className="fa-brands fa-facebook-f"></i></a>
        </li>
        <li className="social__item">
          <a target="_blank" href="https://t.me/+ksBXwaXvGD5iNmIy"><i className="fa-sharp fa-solid fa-paper-plane"></i></a>
        </li>
      </ul>
      <div className="top-header__action">
        <div className={`user-account action-item ${account.inPage && 'action-item_active'}`}>
          <i className="fa-solid fa-right-to-bracket"></i>
          {/* <Link to="/account">Личный кабинет</Link> */}
          <Link to={ account.link } target={ account.isOuter ? '_blank' : '_self' }>Власний кабінет</Link>
        </div>
        <div className="top-header__addit-features">
          <Link to="tel:+380663340226" className="phone action-item">+38 066 334 02 26</Link>
          {/* <div className="notifications action-item">
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="user-menu action-item">
            <i className="fa-solid fa-bars"></i>
            <ul className="user-menu-list"></ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;