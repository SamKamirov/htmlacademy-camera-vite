import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import { Layout } from '../components/layout';
import { Product } from '../pages/product';
import { NotFound } from '../components/not-found';
import { Main } from '../pages/main';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={AppRoute.Camera} element={<Product />} />
        <Route path={AppRoute.Everything} element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
