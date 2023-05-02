import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from "react-redux";
import FilterBlock from "./FilterBlock";
import { clearFilters, fetchFilters } from '../../../store/filtersSlice';
import { fetchVacancies } from '../../../store/vacanciesSlice';

const FilterList = () => {
	const { data, status, error } = useSelector(state => state.filters);
  const filters = data.body;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const btnClickHandler = () => {
    dispatch(clearFilters());
    dispatch(fetchVacancies());
    dispatch(fetchFilters());
    navigate('/');
  }

  return (
    <div className="filter section__sidebar" >
      <button className="btn btn_filter filter__all-btn" onClick={ btnClickHandler }>Все вакансии</button>
      <form name="filter">
      {
        status !== 'resolved' 
          ? <h2>Loading ...</h2>
          : filters.map( filter => <FilterBlock key={ filter.name } filter={ filter }/>)
      }
      </form>
    </div>
  );
};

export default FilterList;