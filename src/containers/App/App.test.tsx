import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should be a link in the navbar', () => {
    render(<App />);
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
  });
});
