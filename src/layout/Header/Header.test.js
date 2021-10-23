import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('Header component', () => {
  it('check the snapshot', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe('Testing router', () => {
    it('check exist the class with name "active"', () => {
      const history = createMemoryHistory();
      history.push('/');
      render(
        <Router history={history}>
          <Header />
        </Router>
      );

      const linkHome = screen.getByText(/home/i);
      expect(linkHome).toHaveClass('active');
      userEvent.click(screen.getByText(/info/i));
      expect(linkHome).not.toHaveClass('active');
    });
  });
});
