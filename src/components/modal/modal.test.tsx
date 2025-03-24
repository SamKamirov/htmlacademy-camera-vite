import { render } from '@testing-library/react';
import { Modal } from '.';
import { withStore } from '../../utils/mock-component';

describe('Component: Modal', () => {
  it('should render correctly', () => {
    const isModalOpen = true;

    const { withStoreComponent } = withStore(<Modal isModalOpen={isModalOpen} />, {});

    render(withStoreComponent);
  });
});
