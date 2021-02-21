import React from 'react';
import { SpaContext } from '../../context/SpaContext';
import './sortBox.css';

const SortBox = React.memo(function SortBox() {
  const { sort, setSort } = React.useContext(SpaContext);

  const onSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="sort">
      <h4>SortBy: {sort}</h4>
      <ul className="sort-box">
        <div className="sort-subbox">
          <label>
            <input
              className="sort-subbox__item"
              type="radio"
              name="sort"
              value="category"
              onChange={onSort}
              defaultChecked
            />
            category
          </label>
          <label>
            <input
              className="sort-subbox__item"
              type="radio"
              name="sort"
              value="date"
              onChange={onSort}
            />
            date
          </label>
        </div>
        <div className="sort-subbox">
          <label>
            <input
              className="sort-subbox__item"
              type="radio"
              name="sort"
              value="name"
              onChange={onSort}
            />
            name
          </label>
          <label>
            <input
              className="sort-subbox__item"
              type="radio"
              name="sort"
              value="filesize"
              onChange={onSort}
            />
            filesize
          </label>
        </div>
      </ul>
    </div>
  );
});

export default SortBox;
