import ProductCard from '../ProductCard/ProductCard';
import SearchBar from '../SearchBar/SearchBar';

const ProductList = () => {
  return (
    <div className='product-container'>
      <SearchBar />
      <h1>Products:</h1>
      <div className='product-list'>
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
