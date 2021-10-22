import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from './index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

it('renders correctly navbar component', () => {
  const history = createMemoryHistory();
  const { asFragment } = render(
    <Router history={history}>
      <Navbar />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
