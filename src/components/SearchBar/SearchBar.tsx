import React, { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <form action='' className='search-form'>
      <input
        type='text'
        placeholder='Search for product'
        className='search-input'
        value={searchInput}
        onChange={(e) => inputChange(e)}
      />
      <button className='search-button'>
        <HiMagnifyingGlass />
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
