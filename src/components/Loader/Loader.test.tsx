import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader component', () => {
  it('check the snapshot', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
