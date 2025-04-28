import { Filter, SortingType } from '../../../const';
import { TCameraList } from '../../../types/camera';
import { TFilters } from '../../../types/state';

const PRIMARY_SORT_INDEX = 0;
const SECONDARY_SORT_INDEX = 0;

type TSortCameras = {
	cameras: TCameraList;
	sortingType: SortingType[];
};

type ApplyFiltersProps = {
	cameras: TCameraList;
	filters: TFilters;
};

export const sortCameras = ({ cameras, sortingType }: TSortCameras) => {
  switch (true) {
    case sortingType[PRIMARY_SORT_INDEX] === SortingType.ByPrice &&
			sortingType[SECONDARY_SORT_INDEX] === SortingType.Descending:
      return cameras.sort((prev, next) => next.price - prev.price);
    case sortingType[PRIMARY_SORT_INDEX] === SortingType.ByPopularity &&
			sortingType[SECONDARY_SORT_INDEX] === SortingType.Descending:
      return cameras.sort((prev, next) => prev.reviewCount - next.reviewCount);
    default:
      return cameras.sort((prev, next) => prev.price - next.price);
  }
};

export const applyFilters = ({ cameras, filters }: ApplyFiltersProps) => {
  const {
    priceFilter: { minPrice, maxPrice },
    equipmentFilters: { cameraType, category, level },
  } = filters;

  return cameras.filter((item) => {
    if (!(item.price >= minPrice) || !(item.price <= maxPrice || maxPrice === 0)) {
      return false;
    }
    if (category !== item.category && category !== Filter.Category.All) {
      return false;
    }
    if (!cameraType.includes(item.type) && cameraType.length > 0) {
      return false;
    }
    if (!level.includes(item.level) && level.length > 0) {
      return false;
    }
    return true;
  });
};
