import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchFormResults from './SearchFormResults';

const SearchForm = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchStr, setSearchStr] = useState('');
  const { data } = useSelector(state => state.vacancies);

  const isNarrow = false;
  const isActive = false;
  const resActive = !!searchData.length;

  console.log(data);

  const closeSearchResultWindow = () => {
    setSearchData([]);
    setSearchData('');
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
    <div className={`search-form ${ isNarrow && 'search-form_narrow'}`}>
      <label className={`search-form__field ${isActive && 'search-form__field_active'}`}>
        <i className="fa-solid fa-magnifying-glass search-form__icon"></i>
        <input
          onChange={e => searchHandler(e.target.value)}
          value={ searchStr }
          type="text" 
          className="search-form__input"
          placeholder="почніть пошук..."
        />
      </label>
      <div className="search-form__results">
        
        { 
          resActive && 
            <SearchFormResults searchData={ searchData } closeMethod={ closeSearchResultWindow }/> 
        }

      </div>
    </div>
  );
};

export default SearchForm;