import { render } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('HomePage component', () => {
  it('check the snapshot', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  })
});
