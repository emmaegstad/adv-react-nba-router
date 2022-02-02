import './Filter.css';
import React from 'react';

export default function Filter({ type, setType }) {
  return (
    <div className="Filter">
      <label htmlFor="select" className="filter-label">
        Filter By Type
      </label>
      <select
        id="select"
        className="filter-select"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="nonfood">Non-food</option>
      </select>
    </div>
  );
}
