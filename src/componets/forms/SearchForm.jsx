import React from 'react';

const SearchForm = () => {
  const isNarrow = true;
  const isActive = false;


  return (
    <div className={`search-form ${ isNarrow && 'search-form_narrow'}`}>
      <label className={`search-form__field ${isActive && 'search-form__field_active'}`}>
        <i className="fa-solid fa-magnifying-glass search-form__icon"></i>
        <input type="text" className="search-form__input" />
      </label>
    </div>
  );
};

export default SearchForm;