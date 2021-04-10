import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Key', () => {
  it('renders key with correct text', () => {
    render(<App />);

    expect(screen.getAllByTestId('number')).toHaveLength(10);
    expect(screen.getAllByTestId('number')).not.toHaveLength(9);

    expect(screen.getAllByTestId('decimal')).toHaveLength(1);
    expect(screen.getAllByTestId('decimal')).not.toHaveLength(2);

    expect(screen.getAllByTestId('CLEAR')).toHaveLength(1);
    expect(screen.getAllByTestId('CLEAR')).not.toHaveLength(2);
  });
});
