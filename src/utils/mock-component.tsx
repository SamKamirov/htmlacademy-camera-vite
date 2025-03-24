import { MemoryHistory, createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { HistoryRouter } from '../components/history-router';
import { rootReducer } from '../store/reducer';
import { setupStore } from '../store';
import { toast } from 'react-toastify';

export const withHistory = (component: JSX.Element, history?: MemoryHistory) => {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      {component}
    </HistoryRouter>
  );
};

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
}

export const withStore = (component: ReactNode, initialState: Partial<typeof rootReducer> = {}): ComponentWithMockStore => {
  const mockStore = setupStore(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
  });
};

export const fakeToast = (text: string) => toast.info(text);
