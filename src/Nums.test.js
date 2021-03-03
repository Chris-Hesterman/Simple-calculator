import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Nums from './components/Nums';
import Display from './components/Display';
import Key from './components/Key';

describe('Nums', () => {
  test('it renders keys correctly properly', () => {
    render(<Nums />);
    screen.debug();

    expect(screen.getAllByTestId('number')).toHaveLength(10);
    expect(screen.getByTestId('decimal')).toBeInTheDocument();
    expect(screen.getByTestId('CLEAR')).toBeInTheDocument();
  });

  test('it responds to user input', () => {
    render(<App />);

    expect(screen.getByTitle('readout')).toHaveTextContent('0');
  });
});
