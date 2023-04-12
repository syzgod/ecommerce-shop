const ProductCard = ({ filteredProducts }: any) => {
  return filteredProducts?.map((product: any) => (
    <div className='product-card' key={product.id}>
      <img className='product-image' src={`${product.image}`} alt='' />
      <h3>{product.title}</h3>
      <p>Rating: {product.rating.rate}</p>
      <p>Reviews: {product.rating.count}</p>
      <p>Price ${product.price}</p>
    </div>
  ));
};

export default ProductCard;
