import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchBar = () => {
  return (
    <form action=''>
      <input type='text' placeholder='Search for product' />
      <button>
        <HiMagnifyingGlass />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
