import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const Advertisements = ({ images }: any) => {
  return (
    <div className='adPage'>
      <div>
        <div>
          <h1>Looking for something cheap but amazing?</h1>
          <p>We have everything for you just a few click away.</p>
        </div>
        <ImageCarousel images={images} />
      </div>

      <button>Register</button>
      <button>Products</button>
    </div>
  );
};

export default Advertisements;
