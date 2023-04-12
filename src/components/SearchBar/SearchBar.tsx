import React, { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchBar = ({
  searchInput,
  setSearchInput,
  products,
  setFilteredProducts,
}: any) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    const query = e.target.value.toLowerCase();
    const filtered = products.filter((item: any) =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <form action='' className='search-form'>
      <input
        type='text'
        placeholder='Search for product'
        className='search-input'
        value={searchInput}
        onChange={(e) => handleSearch(e)}
      />
      <button className='search-button'>
        <HiMagnifyingGlass />
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
