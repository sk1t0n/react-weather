import { render } from '@testing-library/react';
import { NotFoundPage } from './404';

describe('NotFoundPage component', () => {
  it('check the snapshot', () => {
    const { asFragment } = render(<NotFoundPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
