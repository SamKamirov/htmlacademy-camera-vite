import { useAppSelector } from '../../app/hooks';
import { getIsLoading } from '../../store/app-data/app-data-selectors';
import { BreadScrumps } from '../breadscrumps';
import { Catalog } from '../catalog';
import { Loading } from '../loading/loading';
import { Modal } from '../modal';

export const MainComponent = () => {
  const isLoading = useAppSelector(getIsLoading);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="page-content">
      <BreadScrumps />
      <Catalog />
      <Modal />
    </div>
  );
};
