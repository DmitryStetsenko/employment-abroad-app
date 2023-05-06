import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, Link} from 'react-router-dom';
import {fetchSingleVacancy} from '../../store/vacanciesSlice';

const VacancyPage = () => {
  const location = useLocation();
  const vacancyId = location.state;

  const dispatch = useDispatch();
  const {data} = useSelector(state => state.vacancies);

  console.log(data);

  const {
    id,
    created,
    title,
    description,
    country_name,
    country_id,
    employer_name,
    employer_id,
    salary,
    speciality_name,
    speciality_id,
    expirience_name,
    expirience_id,
    housing_id,
    housing_name
  } = data;

  useEffect(() => {
    dispatch(fetchSingleVacancy(vacancyId));
  }, [dispatch]);

  return (
    <section className="section section_vacancy">
      <div className="container">
        <div className="vacancy-single">
          <div className="vacancy-single__content-block">
            <div className="vacancy-single__thumbnail">
              <img src="/img/vacancy-thumb.jpg" alt=""/>
            </div>
            <div className="vacancy-single__content">
              <h1 className="vacancy-single__title">{title}</h1>
              <div className="vacancy-single__salary">Зарплата: {salary} USD</div>
              <div className="vacancy-single__text">
                {description}
              </div>
              <div className="vacancy-single__meta">
                <ul className="single-meta-info">
                  <li className="single-meta-info__item">
                    <i className="single-meta-info__item-icon fa-solid fa-location-dot"></i>
                    <span className="single-meta-info__item-text">Страна: </span>
                    <div className="single-meta-info__item-value">
                      <Link to={
                          `/vacancies/country/${country_name}`
                        }
                        state={country_id}
                        preventScrollReset={true}>
                        {country_name}</Link>
                      {/* <a href="#">Катовице</a> */} </div>
                  </li>
                  <li className="single-meta-info__item">
                    <i className="single-meta-info__item-icon fa-solid fa-suitcase"></i>
                    <span className="single-meta-info__item-text">Специальность: </span>
                    <div className="single-meta-info__item-value">
                      <Link to={
                          `/vacancies/speciality/${speciality_name}`
                        }
                        state={speciality_id}
                        preventScrollReset={true}>
                        {speciality_name}</Link>
                      {/* <a href="#">Разнорабочий</a> */} </div>
                  </li>
                  <li className="single-meta-info__item">
                    <i className="single-meta-info__item-icon fa-solid fa-suitcase"></i>
                    <span className="single-meta-info__item-text">Опыт работы: </span>
                    <div className="single-meta-info__item-value">
                      <Link to={
                          `/vacancies/speciality/${expirience_name}`
                        }
                        state={expirience_id}
                        preventScrollReset={true}>
                        {expirience_name} мес.</Link>
                      {/* <a href="#">Разнорабочий</a> */} </div>
                  </li>
                  <li className="single-meta-info__item">
                    <i className="single-meta-info__item-icon fa-solid fa-gear"></i>
                    <span className="single-meta-info__item-text">Работодатель: </span>
                    <div className="single-meta-info__item-value">
                      <Link to={
                          `/vacancies/employer/${employer_name}`
                        }
                        state={employer_id}
                        preventScrollReset={true}>
                        {employer_name}</Link>
                    </div>
                  </li>
                  <li className="single-meta-info__item">
                    <i className="single-meta-info__item-icon fa-solid fa-house"></i>
                    <span className="single-meta-info__item-text">Жилье: </span>
                    <div className="single-meta-info__item-value">
                      <Link to={`/vacancies/housing/${housing_name}`} state={ housing_id } preventScrollReset={true}>{ housing_name }</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VacancyPage;
