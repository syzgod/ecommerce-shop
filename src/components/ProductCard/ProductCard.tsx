import StarRating from '../StarRating/StarRating';

const ProductCard = ({ filteredProducts }: any) => {
  return filteredProducts?.map((product: any) => (
    <div className='product-card' key={product.id}>
      <h1>{product.category}</h1>
      <img className='product-image' src={`${product.image}`} alt='' />
      <h3>{product.title}</h3>
      <StarRating rating={product.rating.rate} />
      <span>({product.rating.count})</span>
      <p>${product.price}</p>
    </div>
  ));
};

export default ProductCard;
