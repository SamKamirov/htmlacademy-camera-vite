import { Nullable } from 'vitest';
import { useAppSelector } from '../../app/hooks';
import { getIsLoading, getReviews } from '../../store/app-data/app-data-selectors';
import { TReviewList } from '../../types/review';
import { Loading } from '../loading';
import { useState } from 'react';
import { ReviewsItem } from '../reviews-item';

const RANGE_START = 3;

export const Reviews = () => {
  const [reviewsRangeEnd, setReviewsRangeEnd] = useState(RANGE_START);

  const reviews = useAppSelector<Nullable<TReviewList>>(getReviews);
  const isLoading = useAppSelector<boolean>(getIsLoading);

  if (isLoading) {
    return <Loading />;
  }

  if (!reviews) {
    return <Loading />;
  }

  const handleMoreReviewsBtnClick = () => setReviewsRangeEnd(reviewsRangeEnd + RANGE_START);

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
          </div>
          <ul className="review-block__list">
            {...reviews.slice(0, reviewsRangeEnd).map((review) => <ReviewsItem cameraReview={review} key={review.id} />)}
          </ul>
          {reviewsRangeEnd < reviews.length &&
            <div className="review-block__buttons">
              <button className="btn btn--purple" type="button" onClick={handleMoreReviewsBtnClick}>Показать больше отзывов</button>
            </div>}
        </div>
      </section>
    </div>
  );
};
