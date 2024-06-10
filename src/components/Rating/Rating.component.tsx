import React from 'react';
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Rating.css';

type RatingProps = {
  value: number;
  type: 'self' | 'star';
};

const COUNT = 5;

const Rating: React.FC<RatingProps> = ({
  value,
  type
}) => {
  const fullStars = Math.floor(value);
  const halfStars = value %1 === 0 ? 0 : 1;
  const emptyStars = COUNT - fullStars - halfStars;
  return type === 'star'
    ? (
      <div className='rating'>
        {
          [...Array(fullStars)].map((_, idx) => (
            <FontAwesomeIcon 
              key={`full-star-${idx}`}
              icon={faStar}
              className='star active'
              data-testid={`full-star-${idx}`}
            /> 
          ))
        }
        {
          halfStars === 1 && 
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            className="star active"
            data-testid='half-star'
          />
        }
        {
          [...Array(emptyStars)].map((_, idx) => (
            <FontAwesomeIcon
              key={`empty-star-${idx}`}
              icon={faStarEmpty}
              className='star empty'
              data-testid={`empty-star-${idx}`}
            />
          ))
        }
      </div>
    )
    : (
      <div className='rating'>
        {
          [...Array(fullStars)].map((_, idx) => (
            <div
              key={`full-circle-${idx}`}
              className='circle active'
              data-testid={`full-circle-${idx}`}
            /> 
          ))
        }
        {
          halfStars === 1 && 
          <div
            className="circle half-filled"
            data-testid='half-circle'
          />
        }
        {
          [...Array(emptyStars)].map((_, idx) => (
            <div
              key={`empty-circle-${idx}`}
              className='circle empty'
              data-testid={`empty-circle-${idx}`}
            />
          ))
        }
      </div>
    )
}

export default Rating;