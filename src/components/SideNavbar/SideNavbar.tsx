import React, { useEffect, useState } from 'react';
import { ImMan, ImWoman } from 'react-icons/im';
import { GiPearlNecklace } from 'react-icons/gi';
import { BsPlugin } from 'react-icons/bs';
import { TbCategory } from 'react-icons/Tb';

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
          <a href='#'>
            <TbCategory size={20} />
            <span>All</span>
          </a>
        </li>
        <li onClick={() => clickHandle("men's clothing")}>
          <a href='#'>
            <ImMan size={20} />
            <span>Men's Clothing</span>
          </a>
        </li>
        <li onClick={() => clickHandle("women's clothing")}>
          <a href='#'>
            <ImWoman size={20} />
            <span>Women's Clothing</span>
          </a>
        </li>
        <li onClick={() => clickHandle('jewelery')}>
          <a href='#'>
            <GiPearlNecklace />
            <span>Jewelry</span>
          </a>
        </li>
        <li onClick={() => clickHandle('electronics')}>
          <a href='#'>
            <BsPlugin size={20} />
            <span>Electronics</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
