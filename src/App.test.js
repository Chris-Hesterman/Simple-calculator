import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    const keypad = screen.getByTitle('keypad');
    const numberKeys = within(keypad).getByTitle('numberKeys');
    const operatorKeys = within(keypad).getByTitle('operatorKeys');

    expect(screen.getByTitle('display')).toBeInTheDocument();
    expect(screen.getByText('Simple Calculator')).toBeInTheDocument();
    expect(numberKeys).toBeInTheDocument();
    expect(operatorKeys).toBeInTheDocument();
  });
});
