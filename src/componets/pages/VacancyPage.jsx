import React from 'react';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleVacancy, fetchVacancies } from './../../store/slices/vacanciesSlice';

import { getMetaDataList, getVacancyMetaItemsList } from '../../store/functions';
import { vacancyUIinfoList } from '../../store/vacancyUIinfoList';
import { VacancyAction } from '../vacancy';

const VacancyPage = () => {
  const location = useLocation();
  const vacancyId = Number(location.state);

  const dispatch = useDispatch();
  const {singleData} = useSelector(state => state.vacancies);

  useEffect(() => {
    dispatch(fetchSingleVacancy(vacancyId));
    dispatch(fetchVacancies());
  }, [dispatch, vacancyId]);

  const imgPath = '/img/vacancies';
	const noImg = `${imgPath}/no-img.jpg`;

  const {
    title,
    description,
    salary,
    additionally,
    thumbnails,
  } = singleData;

  const metaDataList = getMetaDataList(singleData);
  const metaItemList = getVacancyMetaItemsList(metaDataList, vacancyUIinfoList, 'single', (dataObj) => {
		const {
			tableName, tableUiName, recordName, recordId, recordSlug, recordIcon
		} = dataObj;

    return (
			<li key={ recordSlug } className="single-meta-info__item">
        <i className={`single-meta-info__item-icon ${ recordIcon }`}></i>
        <span className="single-meta-info__item-text">{ tableUiName }: </span>
        <Link 
					className="single-meta-info__item-value" 
					to={`/vacancies/${tableName}/${recordSlug}`} 
					state={ recordId } 
					preventScrollReset={true}
				>
					{ recordName }
				</Link>
      </li>
		);
	});

  return (
    <section className="section section_vacancy">
      <div className="container">
        <div className="vacancy-single">
          <div className="vacancy-single__content-block">
            <div className="vacancy-single__thumbnail-block">
              <div className="vacancy-single__thumbnail">
                <img src={ thumbnails ? `${thumbnails}` : noImg } alt={ title } />
              </div>
              <div className="vacancy-single__action">
                
                <VacancyAction id={ vacancyId } vacancyTitle={ title }/>

              </div>
            </div>
            <div className="vacancy-single__content">
              <h1 className="vacancy-single__title">{title}</h1>
              <div className="vacancy-single__salary">Зарплата: договірна</div>
              {/* <div className="vacancy-single__salary">Зарплата: {salary} USD</div> */}

              {
                additionally &&
                <div className="vacancy-single__additionally">
                  <div className="additionally additionally_single-page">
                    <span className="additionally__item">
                      <i className="fa-solid fa-circle-exclamation"></i>
                    </span>
                    <span className="additionally__item">
                      Обов'язкові вимоги: 
                    </span>
                    <span className="additionally__item additionally__item_upper">{ additionally }</span>
                  </div>
                </div>
						  }
              <div className="vacancy-single__meta">
                <ul className="single-meta-info">
                  { metaItemList }
                </ul>
              </div>
              <div className="vacancy-single__text" dangerouslySetInnerHTML={{ __html: description }}>
                {/* {description} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VacancyPage;
