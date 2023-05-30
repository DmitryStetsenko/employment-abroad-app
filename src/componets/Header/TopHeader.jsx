import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const TopHeader = ({ routingData }) => {
  const { account, isOuter } = routingData;
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <div className="top-header">
      
      <div className="top-header__block">
        <ul className="language top-header__item">
          <li className="language__item language__item_active">ua</li>
          {
            !isMobile &&
            <>
              <li className="language__item">ru</li>
              <li className="language__item">pl</li>
              <li className="language__item">en</li>
              <li className="language__item">cz</li>
              <li className="language__item">de</li>
            </>
          }
          
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
      </div>
      
      <div className="top-header__block">
        <div className="top-header__action">
          <Link 
            to={ account.link } 
            target={ account.isOuter ? '_blank' : '_self' } 
            className={`user-account action-item ${account.inPage && 'action-item_active'}`}
          >
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>Власний кабінет</span>
          </Link>

          <Link 
            to="tel:+380663340226"
            target={ account.isOuter ? '_blank' : '_self' } 
            className="phone action-item"
          >
            <i className="fa-solid fa-phone"></i>
            <span>+38 066 334 02 26</span>
          </Link>

          {/* <Link 
            to="tel:+380663340226"
            target={ account.isOuter ? '_blank' : '_self' } 
            className="phone action-item"
          >
            <i className="fa-solid fa-phone"></i>
            <span>+38 066 334 02 26</span>

            <div className="notifications action-item">
              <i className="fa-solid fa-bell"></i>
            </div>
            <div className="user-menu action-item">
              <i className="fa-solid fa-bars"></i>
              <ul className="user-menu-list"></ul>
            </div>

          </Link> */}
        </div>
      </div>
      
    </div>
  );
};

export default TopHeader;