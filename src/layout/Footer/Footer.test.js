import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  it('check the snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
