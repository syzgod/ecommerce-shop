import React, { useState } from 'react';

const Sidebar = () => {
  const [category, setCategory] = useState('');

  const compareCategory = () => {};

  // TODO: compare product category and category clicked and display the relevant products (cards)

  const clickHandle = (categoryValue: string) => {
    setCategory(categoryValue);
    console.log(category);
  };

  return (
    <div className='sidenavbar'>
      <h1>Categories</h1>
      <ul>
        <li>
          <a href='#' onClick={() => clickHandle("men's clothing")}>
            Men's Clothing
          </a>
        </li>
        <li>
          <a href='#' onClick={() => clickHandle("women's clothing")}>
            Women's Clothing
          </a>
        </li>
        <li>
          <a href='#' onClick={() => clickHandle("kids' wear")}>
            Kids' Wear
          </a>
        </li>
        <li>
          <a href='#' onClick={() => clickHandle('jewelry')}>
            Jewelry
          </a>
        </li>
        <li>
          <a href='#' onClick={() => clickHandle('electronics')}>
            Electronics
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
