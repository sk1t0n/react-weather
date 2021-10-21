import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from './index';

it('renders correctly navbar component', () => {
  const { asFragment } = render(<Navbar />);
  expect(asFragment()).toMatchSnapshot();
});
