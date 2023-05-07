import { useState } from 'react';

const ImageCarousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  const translateX = `translateX(-${currentIndex * 100}%)`;

  return (
    <div className='carousel'>
      <div className='image-container' style={{ transform: translateX }}>
        {images.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            className='image'
          ></img>
        ))}
      </div>
      <div className='carousel-buttons'>
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
