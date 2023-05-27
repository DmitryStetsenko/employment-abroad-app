import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavVacancy, delFavVacancy, fetchVacancyList } from '../../store/slices/favVacanciesSlice';
import VacancyForm from '../forms/VacancyForm';
import ModalWindow from '../ModalWindow';
import Form from '../forms/Form';

const VacancyAction = ({ id, vacancyTitle }) => {
  const dispatch = useDispatch();
  const {ids} = useSelector(state => state.favVacancies);

  const [modal, setModal] = useState({isShow: false, component: null});

  const isFav= ids.includes(id)
  const favVacancyAction = isFav ? delFavVacancy : addFavVacancy;

  useEffect(() => {
    dispatch(fetchVacancyList(ids));
  }, [dispatch, ids]);

  const vacancyFormHandle = () => {
    const formProps = {
      setOuterState: setModal,
      formTitle: vacancyTitle,
      style: {position: 'static', transform: 'none'},
      type: 'full',
    };
    const modalState = {
      isShow: true, 
      component: <Form {...formProps}><VacancyForm /></Form>
      };

    setModal(modalState);
  }

  return (
    <>
      <ul className="vacancy-action">
        <li className="vacancy-action__item">
          <button onClick={ () => dispatch(favVacancyAction({ id })) } className={`vacancy-action__btn ${isFav && 'vacancy-action__btn_active'}`}>
            {
              isFav
              ? <i className="fa-solid fa-heart-circle-minus"></i>
              : <i className="fa-solid fa-heart-circle-plus"></i>
            }
          </button>
        </li>
        <li className="vacancy-action__item">
          <button onClick={ () => vacancyFormHandle() } className="vacancy-action__btn">
              <i className="fa-solid fa-envelope-circle-check"></i>
          </button>
        </li>
      </ul>
      {
          modal.isShow && 
          <ModalWindow 
            setOuterState={setModal}
            className="modal-window" 
          >
            { modal.component }
          </ModalWindow>
        }
    </>
  );
};

export default VacancyAction;