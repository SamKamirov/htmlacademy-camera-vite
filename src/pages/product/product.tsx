import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getIsLoading, getSelectedCamera } from '../../store/app-data/app-data-selectors';
import { useEffect } from 'react';
import { fetchCamera, fetchCameraReviews } from '../../api/api-actions';
import { Loading } from '../../components/loading';
import { TCamera } from '../../types/camera';
import { Nullable } from 'vitest';
import { Reviews } from '../../components/reviews';
import { ProductComponent } from '../../components/product';

export const Product = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector<boolean>(getIsLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamera(id));
      dispatch(fetchCameraReviews(id));
    }
  }, [id, dispatch]);

  const selectedCamera = useAppSelector<Nullable<TCamera>>(getSelectedCamera);

  if (isLoading) {
    return <Loading />;
  }

  if (!selectedCamera) {
    return <Loading />;
  }

  return (
    <>
      <ProductComponent selectedCamera={selectedCamera} />
      <Reviews />
    </>
  );
};
