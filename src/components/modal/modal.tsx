import { FC, FormEvent, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getIsSuccessModalOpen, getSelectedCamera } from '../../store/app-data/app-data-selectors';
import { getModalClassName } from './lib';
import './lib/modal.css';
import { ItemAddRequestModal } from './lib/item-add-request-modal/item-add-request';
import { ItemAddSuccessModal } from './lib/item-add-success-modal';
import { addCardItem, setSuccessModalOpen } from '../../store/action';
import { addStorageCardItem } from '../../services/card';

type TModal = {
  isModalOpen: boolean;
};

export const Modal: FC<TModal> = ({ isModalOpen }) => {
  const className = getModalClassName(isModalOpen);
  const camera = useAppSelector(getSelectedCamera);
  const successModalOpen = useAppSelector(getIsSuccessModalOpen);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!camera) {
      return;
    }

    dispatch(addCardItem(camera));
    addStorageCardItem(camera);
    dispatch(setSuccessModalOpen(true));
  };

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  if (!camera) {
    return <span></span>;
  }

  return (
    <div className={`modal ${className}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        {!successModalOpen && <ItemAddRequestModal onSubmit={handleSubmit} camera={camera} />}
        {successModalOpen && <ItemAddSuccessModal />}
      </div>
    </div>
  );
};
