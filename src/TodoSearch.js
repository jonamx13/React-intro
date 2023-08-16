import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log('Users are looking for: ' + searchValue);
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