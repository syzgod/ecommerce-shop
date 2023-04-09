import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://fakestoreapi.com/products';

const ProductCard = () => {
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    const getProducts = (): any => {
      axios.get(BASE_URL).then((response) => {
        setProducts(response.data);
      });
    };
    getProducts();
  }, []);
  console.log(products);

  return products?.map((product: any) => (
    <div className='product-card'>
      <img className='product-image' src={`${product.image}`} alt='' />
      <h3>{product.title}</h3>
      <p>Rating: {product.rating.rate}</p>
      <p>Reviews: {product.rating.count}</p>
      <p>Price ${product.price}</p>
    </div>
  ));
};

export default ProductCard;
