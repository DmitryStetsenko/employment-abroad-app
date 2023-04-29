import React from 'react';

const FilterItem = () => {
  return (
    <li className="filter-item">
      <label className="filter-item__element">
        <input type="checkbox" name="chk1_1" className="filter-item__checkbox" />
        <span className="filter-item__title">С детьми</span>
      </label>
    </li>
  );
};

export default FilterItem;