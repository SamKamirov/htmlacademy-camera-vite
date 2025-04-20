import { FC } from 'react';

type TCategoryRadio = {
	type: string;
	title: string;
	value: string;
  isDisabled?: boolean;
	name?: string;
};

export const FilterInput: FC<TCategoryRadio> = ({ type, title, value, isDisabled = false, name = 'default' }) => (
  <div className={`custom-${type} catalog-filter__item`}>
    <label>
      <input type={type} name={name} value={value} disabled={isDisabled}/>
      <span className={`custom-${type}__icon`} />
      <span className={`custom-${type}__label`}>{title}</span>
    </label>
  </div>
);
