import React from 'react';
import renderer from 'react-test-renderer';
import { Result } from './index';

const defaultProps = {
  isLoading: false,
  error: null,
  temperature: null
};

test('renders correctly with default props', () => {
  const tree = renderer.create(
    <Result
      isLoading={defaultProps.isLoading}
      error={defaultProps.error}
      temperature={defaultProps.temperature}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with isLoading as true', () => {
  const tree = renderer.create(
    <Result
      isLoading={true}
      error={defaultProps.error}
      temperature={defaultProps.temperature}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with error', () => {
  const tree = renderer.create(
    <Result
      isLoading={defaultProps.isLoading}
      error={'error'}
      temperature={defaultProps.temperature}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with temperature', () => {
  const tree = renderer.create(
    <Result
      isLoading={defaultProps.isLoading}
      error={defaultProps.error}
      temperature={{ temp_c: 0, temp_f: 32 }}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
