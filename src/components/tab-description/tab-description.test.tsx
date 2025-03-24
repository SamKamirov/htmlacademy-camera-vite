import { render, screen } from '@testing-library/react';
import { TabDescriptionElement } from '.';
import { fakeCamera } from '../../utils/mocks';

describe('Component: TabDescription', () => {
  it('should render correctly', () => {


    render(<TabDescriptionElement camera={fakeCamera} />);

    expect(screen.getByRole('description')).toBeInTheDocument();
  });
});
