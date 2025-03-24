import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../const';
import { Layout } from '../components/layout';
import { Product } from '../pages/product';
import { NotFound } from '../components/not-found';
import { Main } from '../pages/main';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.Root} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={AppRoutes.Camera} element={<Product />} />
        <Route path={AppRoutes.Everything} element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
