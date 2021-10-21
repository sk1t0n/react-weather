import React from 'react';
import { render } from '@testing-library/react';
import { Result } from './index';

const defaultProps = {
  isLoading: false,
  error: null,
  temperature: null
};

it('renders correctly with default props', () => {
  const { asFragment } = render(
    <Result
      isLoading={defaultProps.isLoading}
      error={defaultProps.error}
      temperature={defaultProps.temperature}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it('renders correctly with isLoading as true', () => {
  const { asFragment } = render(
    <Result
      isLoading={true}
      error={defaultProps.error}
      temperature={defaultProps.temperature}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it('renders correctly with error', () => {
  const { asFragment } = render(
    <Result
      isLoading={defaultProps.isLoading}
      error={'error'}
      temperature={defaultProps.temperature}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it('renders correctly with temperature', () => {
  const { asFragment } = render(
    <Result
      isLoading={defaultProps.isLoading}
      error={defaultProps.error}
      temperature={{ temp_c: 0, temp_f: 32 }}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
