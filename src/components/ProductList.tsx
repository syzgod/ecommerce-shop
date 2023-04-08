import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';

const ProductList = () => {
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    const getProducts = (): any => {
      axios.get(BASE_URL).then((response) => {
        setProducts(response.data);
      });
    };
    getProducts();
    console.log(products);
  }, []);
  return products.map((product: any) => (
    <div>
      <img src={`${product.image}`} alt='' />
      {product.title}
    </div>
  ));
};

export default ProductList;
