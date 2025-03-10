import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../const';
import { Main } from '../pages/main';
import { Layout } from '../components/layout';
import { Product } from '../pages/product';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.Root} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={AppRoutes.Camera} element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
