import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../components/Display';

describe('Display', () => {
  test('it renders correctly and displays based on input (via props)', () => {
    const displayProps = { readout: '23' };
    const noInput = { readout: '0' };
    const { rerender } = render(<Display {...displayProps} />);
    const readout = screen.getByTitle('readout');

    expect(readout).toBeInTheDocument();
    expect(screen.getByText('23')).toBeInTheDocument();

    rerender(<Display {...noInput} />);

    expect(document.querySelector('p')).toHaveTextContent('0');
    expect(document.querySelector('p')).not.toBeEmptyDOMElement();
  });
});
