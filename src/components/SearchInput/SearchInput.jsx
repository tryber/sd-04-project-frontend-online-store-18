import React from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
  const { handleInput, inputValue } = props;
  return (
    <input
      data-testid="query-input"
      type="text"
      className="search-input"
      name="search-input"
      value={inputValue}
      onChange={handleInput}
    />
  );
};

export default SearchInput;
