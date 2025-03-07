import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';

export const Layout = () => (
  <div className="wrapper">
    <Header />
    <Outlet />
    <Footer />
  </div>
);
