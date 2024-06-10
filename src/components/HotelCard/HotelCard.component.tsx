import React from 'react';
import Rating from '../Rating';
import PriceBlock from '../PriceBlock';
import './HotelCard.css';

export type HotelProps = {
  imageUrl: string;
  promotionTitle: string;
  title: string;
  address: string;
  name: string;
  canCancellation: boolean;
  rateType: 'self' | 'star';
  rateValue: number;
  currency: string;
  amount: number;
  saving: number | null;
}

const HotelCard: React.FC<HotelProps> = ({
  imageUrl,
  promotionTitle,
  title,
  address,
  name,
  canCancellation,
  rateType,
  rateValue,
  currency,
  amount,
  saving,
}) => {
  return (
    <div className='hotel-card' data-testid='hotel-card'>
      <div className='hotel-image' data-testid='hotel-img'>
        <img src={imageUrl} alt='hotel img' />
        <span className='promo-title'>{promotionTitle}</span>
      </div>
      <div className='block'>
        <div className='hotel-details' data-testid='hotel-details'>
          <div className='heading'>
            <div className='hotel-title'>
              <h2>{title}</h2>
              <Rating type={rateType} value={rateValue} />
            </div>
            <span>{address}</span>
          </div>
          <u className='room-type'>{name}</u>
          <p className='free-cancellation'>
            {canCancellation ? 'Free cancellation' : ''}
          </p>
        </div>
        <div className='price-block' data-testid='price-block'>
          <PriceBlock currency={currency} amount={amount} saving={saving} />
        </div>
      </div>
    </div>
  )
}

export default HotelCard;