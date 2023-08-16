import React from 'react';
import './TodoSearch.css'

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
  
    return (
      <input 
      placeholder="Cut Onion"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
    );
}

export { TodoSearch };