import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className='product-container'>
      <h1>Products:</h1>
      <div className='product-list'>
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
