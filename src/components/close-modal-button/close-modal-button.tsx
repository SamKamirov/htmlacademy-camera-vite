import { useAppDispatch } from '../../app/hooks';
import { setModalIsOpen } from '../../store/action';

export const CloseModalButton = () => {
  const dispatch = useAppDispatch();

  const onCloseButtonClick = () => dispatch(setModalIsOpen(false));

  return (
    <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onCloseButtonClick}>
      <svg width={10} height={10} aria-hidden="true">
        <use xlinkHref="#icon-close" />
      </svg>
    </button>
  );
};
