import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { getSelectedCamera } from '../../store/app-data/app-data-selectors';
import { Loading } from '../loading';
import { getModalClassName } from './lib';
import { CloseModalButton } from '../close-modal-button';
import './lib/modal.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormErrorElement } from './lib/form-error-element';

const PHONE_PATTERN = /^(?:\+7|8)?9(?:\d{9})$/;

type TModal = {
  isModalOpen: boolean;
}

type TFormInput = {
  phone: string;
}

export const Modal: FC<TModal> = ({ isModalOpen }) => {
  const className = getModalClassName(isModalOpen);
  const camera = useAppSelector(getSelectedCamera);

  const { register, handleSubmit, formState: { errors } } = useForm<TFormInput>();
  const onSubmit: SubmitHandler<TFormInput> = (data) => data;

  if (!camera) {
    return <Loading />;
  }

  const { type, level, price, vendorCode, name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = camera;

  return (
    <div className={`modal ${className}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        <form className="modal__content" onSubmit={handleSubmit(onSubmit)}>
          <p className="title title--h4">Свяжитесь со мной</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
                <img src={previewImg} srcSet={`${previewImg2x} 2x`} width={140} height={120}
                  alt={name}
                />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item">
                  <span className="basket-item__article">Артикул:</span>
                  <span className="basket-item__number">{vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{type} фотокамера</li>
                <li className="basket-item__list-item">{level} уровень</li>
              </ul>
              <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
            </div>
          </div>
          <div className="custom-input form-review__item">
            <label>
              <span className="custom-input__label">Телефон
                <svg width={9} height={9} aria-hidden="true">
                  <use xlinkHref="#icon-snowflake" />
                </svg>
              </span>
              <input type="tel" placeholder="Введите ваш номер"
                {...register('phone', { required: true, pattern: PHONE_PATTERN })}
                aria-invalid={errors.phone ? 'true' : 'false'}
              />
            </label>
            {errors.phone?.type === 'required' && <FormErrorElement message='Нужно указать номер' />}
            {errors.phone?.type === 'pattern' && <FormErrorElement message='Укажите правильный формат' />}
          </div>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width" type="submit">
              <svg width={24} height={16} aria-hidden="true">
                <use xlinkHref="#icon-add-basket" />
              </svg>Заказать
            </button>
          </div>
          <CloseModalButton />
        </form>
      </div>
    </div>
  );
};
