import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import mockData from '../public/data.json';

describe('Hotel App', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve(mockData)
      })
    ) as unknown as typeof global.fetch
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should renders app correctly with price high-low', async () => {
    render(<App />);
  
    expect(screen.getByAltText('qantas logo')).toBeInTheDocument();
    expect(screen.getByText(/hotels in/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByTestId('hotel-card-0')).toHaveTextContent(/PARKROYAL Darling Harbour Sy.../);
    });
  });

  test('should renders app correctly with price low-high', async () => {
    render(<App />);
  
    expect(screen.getByAltText('qantas logo')).toBeInTheDocument();
    expect(screen.getByText(/hotels in/i)).toBeInTheDocument();
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByTestId('price-low-high'),
    )
    await waitFor(() => {
      expect(screen.getByTestId('hotel-card-0')).toHaveTextContent(/Rydges World Square Sydney/);
    });
  });
});
