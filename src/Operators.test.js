import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Operators from './components/Operators';

describe('Operators', () => {
  test('it renders correctly', () => {
    render(<Operators />);
    screen.debug();

    expect(screen.getAllByRole('button').length).toBe(5);
  });
});
