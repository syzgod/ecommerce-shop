import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import SearchBar from '../SearchBar/SearchBar';
import SideNavbar from '../SideNavbar/SideNavbar';

import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products?limit=50';

const ProductList = () => {
  const [products, setProducts] = useState<any>();
  const [searchInput, setSearchInput] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = (): any => {
      axios.get(BASE_URL).then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      });
    };
    getProducts();
  }, []);
  console.log(products);

  return (
    <div className='product-container'>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <h1>Products:</h1>
      <div className='product-list'>
        <ProductCard filteredProducts={filteredProducts} />
      </div>
      <SideNavbar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
    </div>
  );
};

export default ProductList;
