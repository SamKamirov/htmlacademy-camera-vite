import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { getSelectedCamera } from '../../store/app-data/app-data-selectors';
import { Loading } from '../loading';
import { getModalClassName } from './lib';
import './lib/modal.css';
import { ItemAddRequestModal } from './lib/item-add-request-modal/item-add-request';
import { ItemAddSuccessModal } from './lib/item-add-success-modal';

type TModal = {
  isModalOpen: boolean;
};

export const Modal: FC<TModal> = ({ isModalOpen }) => {
  const className = getModalClassName(isModalOpen);
  const camera = useAppSelector(getSelectedCamera);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  if (!camera) {
    return <Loading />;
  }

  return (
    <div className={`modal ${className}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        {!successModalOpen && <ItemAddRequestModal onSubmit={handleSubmit} camera={camera} />}
        {successModalOpen && <ItemAddSuccessModal setSuccessModalIsOpen={setSuccessModalOpen} />}
      </div>
    </div>
  );
};
