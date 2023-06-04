import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import ProductButton from '../ProductButton/ProductButton';

const Advertisements = ({ images }: any) => {
  return (
    <div className='adPage'>
      <div className='adContent'>
        <div className='adText'>
          <h1>Looking for something cheap but amazing?</h1>
          <p>We have everything for you just a click away:</p>
          <ProductButton option={'BEST DEALS'} />
        </div>
        <div className='adCarousel'>
          <ImageCarousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
