import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Nums from '../components/Nums/Nums';

describe('Nums', () => {
  test('it renders keys correctly properly', () => {
    render(<Nums />);

    expect(screen.getAllByTestId('number')).toHaveLength(10);
    expect(screen.getByTestId('decimal')).toBeInTheDocument();
    expect(screen.getByTestId('CLEAR')).toBeInTheDocument();
  });

  test('it responds to user input', () => {
    render(<App />);

    expect(screen.getByTitle('readout')).toHaveTextContent('0');

    userEvent.click(screen.getByText('9'));
    expect(screen.getByTitle('readout')).toHaveTextContent('9');

    userEvent.click(screen.getByText('5'));
    expect(screen.getByTitle('readout')).toHaveTextContent('95');

    userEvent.click(screen.getByText('3'));
    expect(screen.getByTitle('readout')).toHaveTextContent('953');

    userEvent.click(screen.getByText('.'));
    expect(screen.getByTitle('readout')).toHaveTextContent('953.');

    userEvent.click(screen.getByText('4'));
    expect(screen.getByTitle('readout')).toHaveTextContent('953.4');

    userEvent.click(screen.getByText('CLEAR'));
    expect(screen.getByTitle('readout')).toHaveTextContent('0');
  });
});
