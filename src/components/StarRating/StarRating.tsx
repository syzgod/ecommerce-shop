import React from 'react';

const StarRating = ({ rating, count }: any) => {
  const filledStars = Math.round(rating * 2) / 2; // round to nearest 0.5
  const maxStars = 5;

  return (
    <div className='star-rating'>
      {[...Array(maxStars)].map((_, index) => {
        const starClass =
          index + 0.5 <= filledStars ? 'star full' : 'star empty';
        return <span key={index} className={starClass}></span>;
      })}
      <span className='rating-number'>{rating}</span>
      <span className='rating-count'>({count})</span>
    </div>
  );
};

export default StarRating;
