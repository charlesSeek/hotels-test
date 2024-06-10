import { render, screen } from '@testing-library/react';
import Rating from './Rating.component';

describe('Rating component', () => {
  test('should render properly when type is star', () => {
    render(<Rating value={3.5} type='star' />);
    expect(screen.getByTestId('full-star-0')).toBeTruthy();
    expect(screen.getByTestId('full-star-1')).toBeTruthy();
    expect(screen.getByTestId('full-star-2')).toBeTruthy();
    expect(screen.getByTestId('half-star')).toBeTruthy();
    expect(screen.getByTestId('empty-star-0')).toBeTruthy();
  });
  test('should render properly when type is self', () => {
    render(<Rating value={2.5} type='self' />);
    expect(screen.getByTestId('full-circle-0')).toBeTruthy();
    expect(screen.getByTestId('full-circle-1')).toBeTruthy();
    expect(screen.getByTestId('half-circle')).toBeTruthy();
    expect(screen.getByTestId('empty-circle-0')).toBeTruthy();
    expect(screen.getByTestId('empty-circle-1')).toBeTruthy();
  });
})