import React, { useEffect, useState } from 'react';

const Sidebar = ({ products, setFilteredProducts }: any) => {
  const [category, setCategory] = useState('');

  useEffect(() => {
    setFilteredProducts(
      products?.filter((product: any) =>
        category ? product.category === category : true
      )
    );
  }, [category, products, setFilteredProducts]);

  const clickHandle = (categoryValue: string) => {
    setCategory(categoryValue);
  };

  return (
    <div className='sidenavbar'>
      <h1>Categories</h1>
      <ul>
        <li onClick={() => clickHandle('')}>
          <a href='#'>All</a>
        </li>
        <li onClick={() => clickHandle("men's clothing")}>
          <a href='#'>Men's Clothing</a>
        </li>
        <li onClick={() => clickHandle("women's clothing")}>
          <a href='#'>Women's Clothing</a>
        </li>
        <li onClick={() => clickHandle('jewelery')}>
          <a href='#'>Jewelry</a>
        </li>
        <li onClick={() => clickHandle('electronics')}>
          <a href='#'>Electronics</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
