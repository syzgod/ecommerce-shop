import React, { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchBar = ({
  searchInput,
  setSearchInput,
  products,
  setFilteredProducts,
}: any) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    const query = e.target.value.toLowerCase();
    const filtered = products.filter((item: any) =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <form role='search' className='search-form'>
      <input
        aria-label='Search products'
        type='search'
        placeholder='Search'
        className='search-input'
        value={searchInput}
        onChange={(e) => handleSearch(e)}
      />
      <button className='search-button'>
        <HiMagnifyingGlass />
      </button>
    </form>
  );
};

export default SearchBar;
