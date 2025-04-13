import { TSortingTypes } from '../../../const';
import { TCameraList } from '../../../types/camera';

const PRIMARY_SORT_INDEX = 0;
const SECONDARY_SORT_INDEX = 0;

type TSortCameras = {
  cameras: TCameraList;
  sortingType: TSortingTypes[];
};

export const sortCameras = ({ cameras, sortingType }: TSortCameras) => {
  switch (true) {
    case sortingType[PRIMARY_SORT_INDEX] === TSortingTypes.ByPrice &&
      sortingType[SECONDARY_SORT_INDEX] === TSortingTypes.Descending:
      return cameras.sort((prev, next) => next.price - prev.price);
    case sortingType[PRIMARY_SORT_INDEX] === TSortingTypes.ByPopularity &&
      sortingType[SECONDARY_SORT_INDEX] === TSortingTypes.Descending:
      return cameras.sort((prev, next) => prev.reviewCount - next.reviewCount);
    default:
      return cameras.sort((prev, next) => prev.price - next.price);
  }
};
