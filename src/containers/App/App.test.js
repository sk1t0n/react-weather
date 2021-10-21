import { render, screen } from '@testing-library/react';
import App from './index';

it('renders Navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/React-Weather/i);
  expect(linkElement).toBeInTheDocument();
});
