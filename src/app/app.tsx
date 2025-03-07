import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../const';
import { Main } from '../pages/main';
import { Layout } from '../components/layout';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.Root} element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
