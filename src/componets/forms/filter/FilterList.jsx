import React from 'react';
import { useSelector } from "react-redux";
import FilterBlock from "./FilterBlock";

const FilterList = () => {
	const { data, status, error } = useSelector(state => state.filters);
  const filters = data.body;

  return (
    <form className="filter section__sidebar" name="filter">
      
      {
        status !== 'resolved' 
          ? <h2>Loading ...</h2>
          : filters.map( filter => <FilterBlock key={ filter.name } filter={ filter }/>)
      }
      
    </form>
  );
};

export default FilterList;