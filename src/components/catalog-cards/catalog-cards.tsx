import { FC } from 'react';
import { TCameraList } from '../../types/camera';
import { ProductCard } from '../product-card';
import { applyFilters } from './lib';
import { useAppSelector } from '../../app/hooks';
import { getFilters } from '../../store/user-proccess/user-proccess-selectors';

type TCatalogCards = {
	cameras: TCameraList;
};

export const CatalogCards: FC<TCatalogCards> = ({ cameras }) => {
	const filters = useAppSelector(getFilters);
	const filteredCameras = applyFilters({ cameras, filters });

	return (
		<div className='cards catalog__cards'>
			{filteredCameras.map((camera) => (
				<ProductCard camera={camera} key={camera.id} />
			))}
		</div>
	);
};
