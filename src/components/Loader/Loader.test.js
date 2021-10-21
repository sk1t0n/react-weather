import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './index';

it('renders correctly loader component', () => {
  const { asFragment } = render(<Loader />);
  expect(asFragment()).toMatchSnapshot();
});
