import React from 'react';
import renderer from 'react-test-renderer';
import { Navbar } from './Navbar';

test('Render correctly navbar component', () => {
  const component = renderer.create(<Navbar />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
