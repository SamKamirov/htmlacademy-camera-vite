import { useAppSelector } from '../../app/hooks';
import { getIsLoading } from '../../store/app-data/app-data-selectors';
import { Catalog } from '../catalog';
import { Loading } from '../loading/loading';

export const MainComponent = () => {
  const isLoading = useAppSelector<boolean>(getIsLoading);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Catalog />
  );
};
