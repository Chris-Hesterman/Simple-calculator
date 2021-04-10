import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Operators from '../components/Operators';
import App from '../App';

describe('Operators', () => {
  test('it renders correctly', () => {
    render(<Operators />);

    expect(screen.getAllByRole('button').length).toBe(6);
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('/')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
  });

  test('buttons respond appropriately to being pressed', () => {
    render(<App />);

    userEvent.click(screen.getByText('9'));
    expect(screen.getByTitle('readout')).toHaveTextContent('9');

    userEvent.click(screen.getByText('/'));
    expect(screen.getByTitle('readout')).toHaveTextContent('9/');

    userEvent.click(screen.getByText('3'));
    expect(screen.getByTitle('readout')).toHaveTextContent('9/3');

    userEvent.click(screen.getByText('='));
    expect(screen.getByTitle('readout')).toHaveTextContent('3');
    expect(screen.getByTitle('readout')).not.toHaveTextContent('4');

    userEvent.click(screen.getByText('*'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('='));
    expect(screen.getByTitle('readout')).toHaveTextContent('9');
    expect(screen.getByTitle('readout')).not.toHaveTextContent('7');

    userEvent.click(screen.getByText('√'));
    expect(screen.getByTitle('readout')).toHaveTextContent('9√');
    userEvent.click(screen.getByText('='));
    expect(screen.getByTitle('readout')).toHaveTextContent('3');
  });
});
