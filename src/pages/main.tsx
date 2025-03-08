import { useAppSelector } from '../app/hooks';
import { Banner } from '../components/banner';
import { MainComponent } from '../components/main';
import { Modal } from '../components/modal';
import { getIsModalOpen } from '../store/app-data/app-data-selectors';

export const Main = () => {
  const isModalOpen = useAppSelector(getIsModalOpen);

  return (
    <main>
      <Banner />
      <MainComponent />
      {isModalOpen && <Modal isModalOpen={isModalOpen} />}
    </main>
  );
};
