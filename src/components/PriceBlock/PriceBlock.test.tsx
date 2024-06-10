import React from 'react';
import { render, screen } from '@testing-library/react';
import PriceBlock from './PriceBlock.component';

describe('PriceBlock component', () => {
  test('should render PriceBlock properly', () => {
    render(<PriceBlock currency="AUD" saving={30} amount={329} />)
    expect(screen.getByText(/AUD/)).toBeTruthy();
    expect(screen.getByText(/329/)).toBeTruthy();
    expect(screen.getByText(/30/)).toBeTruthy();
  })
});