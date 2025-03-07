import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/app';
import { store } from './store';
import { fetchCameras } from './api/api-actions';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchCameras());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
