import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from './index';

test('renders correctly footer component', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
