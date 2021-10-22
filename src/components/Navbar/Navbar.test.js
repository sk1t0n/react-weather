import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar, isActive } from './index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

it('renders correctly navbar component', () => {
  const history = createMemoryHistory();
  const { asFragment } = render(
    <Router history={history}>
      <Navbar />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('test the function "isActive"', () => {
  expect(isActive({ pathname: '/' }, '/')).toBeTruthy();
  expect(isActive({ pathname: '/info' }, '/info')).toBeTruthy();
  expect(isActive({ pathname: '/route1' }, '/route2')).toBeFalsy();
});

describe('Testing router', () => {
  it('check exist the class with name "active"', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );
  
    const linkHome = screen.getByText(/home/i);
    expect(linkHome).toHaveClass('active');
    userEvent.click(screen.getByText(/info/i));
    expect(linkHome).not.toHaveClass('active');
  });
});
