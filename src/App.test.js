import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/React-Weather/i);
  expect(linkElement).toBeInTheDocument();
});
