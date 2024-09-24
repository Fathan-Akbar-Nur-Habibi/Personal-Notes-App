import React from 'react';

const SearchBar = ({ keyword, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Find Note..."
      value={keyword}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
