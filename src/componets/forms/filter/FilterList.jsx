import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import FilterBlock from "./FilterBlock";
import { clearFilters, fetchFilters } from './../../../store/slices/filtersSlice';
import { fetchVacancies } from './../../../store/slices/vacanciesSlice';

const FilterList = ({ setIsActive }) => {
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

  const isMobile = useMediaQuery({ maxWidth: 1200 });

  const closeFilters = () => {
    setIsActive(false);
  } 
  
  return (
    <div className="filter section__sidebar" >
      <div className="filter__btn-block">
        <button className="btn btn_filter filter__all-btn" onClick={ btnClickHandler }>Всі вакансії</button>

        {
          isMobile &&
          <button onClick={ closeFilters } className="btn">X</button>
        }
        
      </div>
      
      <form name="filter">
      {
        status !== 'resolved' 
          ? <h2>Loading ...</h2>
          : filters.map( filter => <FilterBlock key={ filter.name } filter={ filter } closeFilters={ closeFilters }/>)
      }
      </form>
    </div>
  );
};

export default FilterList;