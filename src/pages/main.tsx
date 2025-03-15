import { useAppSelector } from '../app/hooks';
import { MainComponent } from '../components/main';
import { Modal } from '../components/modal';
import { getIsModalOpen } from '../store/app-data/app-data-selectors';

export const Main = () => {
  const isModalOpen = useAppSelector(getIsModalOpen);

  return (
    <>
      <MainComponent />
      {isModalOpen && <Modal isModalOpen={isModalOpen} />}
    </>
  );
};
