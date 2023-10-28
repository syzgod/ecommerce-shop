import StarRating from '../StarRating/StarRating';
import Button from '../ui/Button';

const ProductCard = ({ filteredProducts }: any) => {
  const discountedPride = (price: number) => {
    return (Math.ceil(price * 0.8) - 0.01).toFixed(2);
  };

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
        <p>${discountedPride(product.price)}</p>
        <div className='product-price'>
          ${(Math.ceil(product.price) - 0.01).toFixed(2)}
        </div>
        <div className='option-buttons'>
          <Button className='secondary'>Details</Button>
          <Button className='primary'>Add to basket</Button>
        </div>
      </div>
    </div>
  ));
};

export default ProductCard;
