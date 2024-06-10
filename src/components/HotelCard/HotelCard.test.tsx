import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelCard from './HotelCard.component';

describe('HotelCard Component', () => {
  const hotelCardProps = {
    imageUrl: 'https://unsplash.it/145/125/?random',
    promotionTitle: 'Exclusive Deal',
    title: 'Courtyard by Marriott Sydney-North Ryde',
    address: '7-11 Talavera Rd, North Ryde',
    name: 'Deluxe Balcony Room',
    canCancellation: true,
    rateType: 'star' as 'star',
    rateValue: 4.5,
    currency: 'AUD',
    amount: 329,
    saving: 30,
  }
  test('should render HotelCard image block properly', () => {
    render(<HotelCard {...hotelCardProps} />);
    expect(screen.getByTestId('hotel-img')).toBeInTheDocument();
    expect(screen.getByAltText('hotel img')).toHaveAttribute('src', hotelCardProps.imageUrl);
    expect(screen.getByText(hotelCardProps.promotionTitle)).toBeTruthy();
  });
  test('should render hotel details with free canCancellation true', () => {
    render(<HotelCard {...hotelCardProps} />);
    expect(screen.getByTestId('hotel-details')).toBeInTheDocument();
    expect(screen.getByText(hotelCardProps.title)).toBeTruthy();
    expect(screen.getAllByRole('img')).toBeTruthy();
    expect(screen.getByText(hotelCardProps.address)).toBeTruthy();
    expect(screen.getByText(hotelCardProps.name)).toBeTruthy();
    expect(screen.getByText(/Free cancellation/)).toBeTruthy();
  });
  test('should render hotel details with canCancellation false', () => {
    render(<HotelCard {...hotelCardProps} canCancellation={false} />);
    expect(screen.queryByText(/Free cancellation/)).toBeFalsy();
  });
});