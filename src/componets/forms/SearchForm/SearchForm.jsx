import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import OutsideClickHandler from '../../OutsideClickHandler';
import SearchFormResults from './SearchFormResults';

const SearchForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchStr, setSearchStr] = useState('');
  const { data } = useSelector(state => state.vacancies);

  const isNarrow = useMediaQuery({ maxWidth: 1200 });
  const resActive = !!searchData.length;

  const closeSearchResultWindow = () => {
    setSearchStr('');
    setSearchData([]);
    if (isNarrow) {
      setIsActive(false);
    }
  }

  const searchHandler = (str) => {
    setSearchStr(str);
    if (!str || !data.body) {
      setSearchData([]);
      return;
    }

    const res = data.body.filter(vacancy => vacancy.title.includes(str) || vacancy.description.includes(str));
    if (res) {
      setSearchData(res);
    }
  }

  return (
      <OutsideClickHandler
        tagName='div'
        onOutsideClick={ closeSearchResultWindow }
        className={`search-form ${ isNarrow && 'search-form_narrow'}`}
      >
        <div
          onClick={ () => setIsActive(!isActive) }
          className={`search-form__field ${isActive ? 'search-form__field_active' : ''}`}
        >
          <i className="fa-solid fa-magnifying-glass search-form__icon"></i>
          <input
            onChange={e => searchHandler(e.target.value)}
            onClick={ e => e.stopPropagation()}
            value={ searchStr }
            type="text" 
            className="search-form__input"
            placeholder="почніть пошук..."
          />
        </div>
        <div className="search-form__results">
          
          { 
            resActive && 
              <SearchFormResults searchData={ searchData } closeMethod={ closeSearchResultWindow }/> 
          }

        </div>
      </OutsideClickHandler>
  );
};

export default SearchForm;