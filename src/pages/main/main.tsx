import { useAppSelector } from '../../app/hooks';
import { Catalog } from '../../components/catalog';
import { Modal } from '../../components/modal';
import { getIsModalOpen } from '../../store/app-data/app-data-selectors';

export const Main = () => {
  const isModalOpen = useAppSelector(getIsModalOpen);

  return (
    <>
      <Catalog />
      {isModalOpen && <Modal isModalOpen={isModalOpen} />}
    </>
  );
};
