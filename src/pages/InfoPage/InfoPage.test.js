import { render } from '@testing-library/react';
import { InfoPage } from './InfoPage';

describe('InfoPage component', () => {
  it('check the snapshot', () => {
    const { asFragment } = render(<InfoPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
