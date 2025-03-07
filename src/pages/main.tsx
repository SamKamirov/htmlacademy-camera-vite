import { Banner } from '../components/banner';
import { MainComponent } from '../components/main';
import { useAppSelector } from '../app/hooks';
import { getCameras } from '../store/app-data/app-data-selectors';

export const Main = () => {
  console.log();
  return (
    <main>
      <Banner />
      <MainComponent />
    </main>
  );
};
