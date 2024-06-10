import React, { useState, useEffect } from 'react';
import './App.css';
import { HotelProps, HotelData } from './types'; 
import HotelCard from './components/HotelCard';
import { truncateString } from './utils';

function App() {
  const [hotels, setHotels] = useState<HotelProps[]>([]);
  const [sortOrder, setSortOrder] = useState('price-high-low');
  useEffect(() => {
    fetch('/data.json')
    .then((response) => response.json())
    .then((data) => data.results)
    .then((data: HotelData[]) => {
      const hotelsData = data.map((item: HotelData) => ({
        id: item?.id,
        imageUrl: item?.property?.previewImage?.url,
        promotionTitle: item?.offer?.promotion?.title,
        title: truncateString(item?.property?.title),
        address: item?.property?.address.join(','),
        name: item?.offer?.name,
        canCancellation: item?.offer?.cancellationOption?.cancellationType === 'FREE_CANCELLATION',
        rateType: item?.property?.rating?.ratingType,
        rateValue: item?.property?.rating?.ratingValue,
        currency: item?.offer?.displayPrice?.currency,
        amount: item?.offer?.displayPrice?.amount,
        saving: item?.offer?.savings?.amount || null,
      }))
      .sort((a: HotelProps, b: HotelProps) => {
        if (sortOrder === 'price-low-high') {
          return a.amount - b.amount
        } else {
          return b.amount - a.amount
        }
      });
      setHotels(hotelsData)
    })
  }, [sortOrder])
  const handleSortChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSortOrder(event.target.value);
  }
  return (
    <div className="App">
      <header className="header">
        <img src='qantas-logo.png' alt='qantas logo' className='logo' />
        <div className='hotel-info'>
          <span><strong>{hotels.length}</strong> <i>hotels in</i> <strong>Sydney.</strong></span>
          <div className='sort-block'>
            <span className='sort-label'><strong>Sort by</strong></span>
            <select id='sort' className='sort-select' value={sortOrder} onChange={handleSortChange} role='combobox'>
              <option value='price-high-low' data-testid='price-high-low'>Price high-low</option>
              <option value='price-low-high' data-testid='price-low-high'>Price low-high</option>
            </select>
          </div>
        </div>
      </header>
      <>
      {hotels.map((hotel: HotelProps, idx) => (
        <div data-testid={`hotel-card-${idx}`} >
          <HotelCard {...hotel} key={hotel.id}/>
        </div>
      ))}
      </>
    </div>
  );
}

export default App;
