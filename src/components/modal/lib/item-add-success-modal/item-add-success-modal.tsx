import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import { useAppDispatch } from '../../../../app/hooks';
import { setModalIsOpen } from '../../../../store/action';
import { Dispatch, FC, SetStateAction } from 'react';

type TItemAddSuccessModal = {
  setSuccessModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ItemAddSuccessModal: FC<TItemAddSuccessModal> = ({ setSuccessModalIsOpen }) => {
  const dispatch = useAppDispatch();

  const handleCloseBtnClick = () => {
    setSuccessModalIsOpen(false);
    dispatch(setModalIsOpen(false));
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
        <Link to={AppRoute.Basket} className="btn btn--purple modal__btn modal__btn--fit-width">
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
