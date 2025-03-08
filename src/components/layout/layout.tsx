import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getIsModalOpen } from '../../store/app-data/app-data-selectors';
import { setModalIsOpen } from '../../store/action';

export const Layout = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(getIsModalOpen);

  const handleEscClick = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      dispatch(setModalIsOpen(false));
    }
  };

  const handleOverlayClick = (evt: MouseEvent) => {
    if (evt.target.closest('.modal__overlay')) {
      dispatch(setModalIsOpen(false));
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscClick);
      window.addEventListener('click', handleOverlayClick);
      document.body.classList.add('no-scroll');
    }

    return () => {
      window.removeEventListener('keydown', handleEscClick);
      window.removeEventListener('click', handleOverlayClick);
      document.body.classList.remove('no-scroll');
    };
  });

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
