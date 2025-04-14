import { OrderType, SortingType } from "../../../const";
import { TCamera, TCameraList } from "../../../types/camera";
import { TSorting } from "../../../types/state";

const sortByPopularityAscending = (prev: TCamera, next: TCamera) => prev.reviewCount - next.reviewCount;
const sortByPopularityDescending = (prev: TCamera, next: TCamera) => next.reviewCount - prev.reviewCount;
const sortByPriceAscending = (prev: TCamera, next: TCamera) => prev.price - next.price;
const sortByPriceDescending = (prev: TCamera, next: TCamera) => next.price - prev.price;

export const sortCameras = (cameras: TCameraList, sorting: TSorting) => {
    switch (true) {
        case sorting.type === SortingType.ByPopularity && sorting.order === OrderType.Ascending:
            return cameras.sort(sortByPopularityAscending)
        case sorting.type === SortingType.ByPopularity && sorting.order === OrderType.Descending:
            return cameras.sort(sortByPopularityDescending)
        case sorting.type === SortingType.ByPrice && sorting.order === OrderType.Ascending:
            return cameras.sort(sortByPriceAscending)
        case sorting.type === SortingType.ByPrice && sorting.order === OrderType.Descending:
            return cameras.sort(sortByPriceDescending)
        default:
            return cameras;
    }
}