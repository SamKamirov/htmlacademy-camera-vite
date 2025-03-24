import { render, screen } from '@testing-library/react';
import { Toast } from '.';
import { fakeToast } from '../../utils/mock-component';

describe('Component: ToastContainer', () => {
  it('should render correctly', () => {
    const toastText = 'Toast';
    fakeToast(toastText);

    render(<Toast />);

    expect(screen.getByText(toastText)).toBeInTheDocument();
  });
});
