import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVacancies } from '../../../store/vacanciesSlice';
import { addParams, delParam } from './../../../store/filtersSlice';

const FilterItem = ({ field, tableName }) => {
  const dispatch = useDispatch();
  // const { query } = useSelector(state => state.filters);

  const onChangeHandler = (param, tableName) => {
    if (param === 0) {
      dispatch(delParam({ tableName: `${tableName}_id` }));
      dispatch(fetchVacancies());
      return;
    }
    
    dispatch(addParams({ param, tableName: `${tableName}_id` }));
    dispatch(fetchVacancies());
  }

  const fieldName = field.level ? `${field.name} (${field.level})` : field.name;

  return (
    <li className="filter-item">
      <label className="filter-item__element">
        <input
          type="radio" 
          name={ tableName } 
          className="filter-item__checkbox"
          onChange={() => onChangeHandler(field.id, tableName)}
        />
        <span className="filter-item__title">{ fieldName }</span>
      </label>
    </li>
  );
};

export default FilterItem;