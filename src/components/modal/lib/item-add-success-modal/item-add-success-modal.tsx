import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import { useAppDispatch } from '../../../../app/hooks';
import { setModalIsOpen, setSuccessModalOpen } from '../../../../store/action';

export const ItemAddSuccessModal = () => {
  const dispatch = useAppDispatch();

  const handleCloseBtnClick = () => {
    dispatch(setModalIsOpen(false));
    dispatch(setSuccessModalOpen(false));
  };

  return (
    <div className='modal__content'>
      <p className="title title--h4">Товар успешно добавлен в корзину</p>
      <svg className="modal__icon" width={86} height={80} aria-hidden="true">
        <use xlinkHref="#icon-success" />
      </svg>
      <div className="modal__buttons">
        <button className="btn btn--transparent modal__btn" onClick={handleCloseBtnClick}>
          Продолжить покупки
        </button>
        <Link to={AppRoute.Card} className="btn btn--purple modal__btn modal__btn--fit-width" onClick={handleCloseBtnClick}>
          Перейти в корзину
        </Link>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleCloseBtnClick}>
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </div >
  );
};
