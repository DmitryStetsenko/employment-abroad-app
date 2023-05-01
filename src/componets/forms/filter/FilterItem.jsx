import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVacancies } from '../../../store/vacanciesSlice';
import { addParams } from './../../../store/filtersSlice';

const FilterItem = ({ field, tableName }) => {
  const dispatch = useDispatch();

  const onChangeHandler = (param, tableName) => {
    dispatch(addParams({ param, tableName: `${tableName}_id` }));
    dispatch(fetchVacancies());
  }

  return (
    <li className="filter-item">
      <label className="filter-item__element">
        <input 
          type="radio" 
          name={ tableName } 
          className="filter-item__checkbox"
          onChange={() => onChangeHandler(field.id, tableName)}
        />
        <span className="filter-item__title">{ field.name }</span>
      </label>
    </li>
  );
};

export default FilterItem;