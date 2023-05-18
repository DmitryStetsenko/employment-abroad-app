import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import ContactsForm from './forms/ContactsForm';
import CallBackForm from './forms/CallBackForm';

const UserActionFixed = () => {
  const { data, status } = useSelector(state => state.favVacancies);
  console.log(data);

  const count = data.contentRange?.count;
  const [modal, setModal] = useState({isShow: false, component: null});

  return (
    <div className="user-action-fixed">
        <Link to="account" data-count={ count } className={`user-action-fixed__item ${ count && 'user-action-fixed__item_active'}`}>
          <i className="fa-solid fa-heart"></i>
        </Link>
        <button onClick={ () => setModal({isShow: true, component: <CallBackForm style={{position: 'static', transform: 'none'}} type="full"/>}) } className="user-action-fixed__item">
            <i className="fa-solid fa-phone-volume"></i>
        </button>
        <button onClick={ () => setModal({isShow: true, component: <ContactsForm style={{position: 'static', transform: 'none'}} type="full"/>}) } className="user-action-fixed__item">
            <i className="fa-solid fa-envelope"></i>
        </button>

        {
          modal.isShow && <ModalWindow setModal={setModal}>{ modal.component }</ModalWindow>
        }
    </div>
  );
};

export default UserActionFixed;

const ModalWindow = ({ children, setModal }) => {
  return (
    <div className="modal-window">
      { children }
      <button onClick={() => setModal({isShow: false})} className="btn btn_close">X</button>
    </div>
  )
}
