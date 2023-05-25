import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import ContactsForm from './forms/ContactsForm';
import CallBackForm from './forms/CallBackForm';
import ModalWindow from "./ModalWindow";

const UserActionFixed = () => {
  const { data, status } = useSelector(state => state.favVacancies);

  const count = data.contentRange?.count;
  const [modal, setModal] = useState({isShow: false, component: null});

  return (
    <div className="user-action-fixed">
        <Link to="account" data-count={ count } className={`user-action-fixed__item ${ count && 'user-action-fixed__item_active'}`}>
          <i className="fa-solid fa-heart"></i>
        </Link>
        <button onClick={ () => setModal({isShow: true, component: <CallBackForm setModal={ setModal } style={{transform: 'none'}} type="full"/>}) } className="user-action-fixed__item">
            <i className="fa-solid fa-phone-volume"></i>
        </button>
        <button onClick={ () => setModal({isShow: true, component: <ContactsForm style={{transform: 'none'}} type="full"/>}) } className="user-action-fixed__item">
            <i className="fa-solid fa-envelope"></i>
        </button>

        {
          modal.isShow && <ModalWindow setModal={setModal}>{ modal.component }</ModalWindow>
        }
    </div>
  );
};

export default UserActionFixed;
