import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './index';

it('renders correctly footer component', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
