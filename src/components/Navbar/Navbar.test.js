import React from 'react';
import renderer from 'react-test-renderer';
import { Navbar } from './index';

test('renders correctly navbar component', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
