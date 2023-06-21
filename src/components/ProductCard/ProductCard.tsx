import StarRating from '../StarRating/StarRating';
import ProductButton from '../ProductButton/ProductButton';

const ProductCard = ({ filteredProducts }: any) => {
  return filteredProducts?.map((product: any) => (
    <div className='product-card' key={product.id}>
      <div className='product-info'>
        <h1>{product.category}</h1>
        <div className='ribbon-sale'>Sale</div>
        <div className='product-image__container'>
          <img className='product-image' src={`${product.image}`} alt='' />
        </div>
        <h3>{product.title}</h3>
      </div>
      <div className='card-bottom'>
        <StarRating rating={product.rating.rate} count={product.rating.count} />
        <p>${product.price}</p>
        <div>${(product.price * 0.8).toFixed(2)}</div>
        <div className='option-buttons'>
          <ProductButton option={'See more'} />
          <ProductButton option={'Add to Basket'} />
        </div>
      </div>
    </div>
  ));
};

export default ProductCard;
