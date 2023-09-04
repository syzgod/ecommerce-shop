import { useState, useEffect, useRef } from 'react';

const delay = 5000;

export default function ImageCarousel({ images }: any) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null as any);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='slideshow'>
      <div
        className='slideshowSlider'
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((_: any, index: any) => (
          <img src={images[index]} className='slide' key={index}></img>
        ))}
      </div>

      <div className='slideshowDots'>
        {images.map((_: any, idx: any) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
