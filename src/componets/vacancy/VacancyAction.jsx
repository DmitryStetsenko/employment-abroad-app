import React from 'react';

const VacancyAction = () => {
  return (
    <ul className="vacancy-action">
      <li className="vacancy-action__item">
        <button className="vacancy-action__btn"><i className="fa-solid fa-heart-circle-plus"></i></button>
      </li>
      <li className="vacancy-action__item">
        <button className="vacancy-action__btn"><i className="fa-solid fa-envelope-circle-check"></i></button>
      </li>
    </ul>
  );
};

export default VacancyAction;