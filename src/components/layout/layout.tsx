import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getIsModalOpen } from '../../store/app-data/app-data-selectors';
import { setModalIsOpen, setSuccessModalOpen } from '../../store/action';
import { checkIsRoot } from './lib';
import { Breadcrumbs } from '../breadscrumbs';
import { Banner } from '../banner';
import { UpBtnComponent } from '../up-btn-component';
import { Toast } from '../toast';
import { Modal } from '../modal';

export const Layout = () => {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector<boolean>(getIsModalOpen);

  const handleEscClick = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      dispatch(setModalIsOpen(false));
      dispatch(setSuccessModalOpen(false));
    }
  };

  const handleOverlayClick = (evt: MouseEvent) => {
    const target = evt.target as HTMLElement;
    if (target.closest('.modal__overlay')) {
      dispatch(setModalIsOpen(false));
      dispatch(setSuccessModalOpen(false));
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
      <main>
        {checkIsRoot(location.pathname) && <Banner />}
        <div className='page-content'>
          <Breadcrumbs />
          <Outlet />
          <Modal isModalOpen={isModalOpen} />
        </div>
      </main>
      {!checkIsRoot(location.pathname) && <UpBtnComponent />}
      <Footer />
      <Toast />
    </div>
  );
};
