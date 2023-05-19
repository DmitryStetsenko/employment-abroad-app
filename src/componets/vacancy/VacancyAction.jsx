import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavVacancy } from '../../store/slices/favVacanciesSlice';
import VacancyForm from '../forms/VacancyForm';
import ModalWindow from '../ModalWindow';

const VacancyAction = ({ id, vacancyTitle }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({isShow: false, component: null});


  return (
    <>
      <ul className="vacancy-action">
        <li className="vacancy-action__item">
          <button onClick={ () => dispatch(addFavVacancy({ id })) } className="vacancy-action__btn">
            <i className="fa-solid fa-heart-circle-plus"></i>
          </button>
        </li>
        <li className="vacancy-action__item">
          <button 
            onClick={ () => setModal({isShow: true, component: <VacancyForm vacancyTitle={ vacancyTitle }  style={{position: 'static', transform: 'none'}} type="full"/>}) } 
            className="vacancy-action__btn"
          >
              <i className="fa-solid fa-envelope-circle-check"></i>
          </button>
        </li>
      </ul>
      {
        modal.isShow && <ModalWindow setModal={setModal}>{ modal.component }</ModalWindow>
      }
    </>
  );
};

export default VacancyAction;