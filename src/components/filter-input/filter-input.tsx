import { FC } from 'react';

type TCategoryRadio = {
	type: string;
	title: string;
	value: string;
};

export const FilterInput: FC<TCategoryRadio> = ({ type, title, value }) => {
	return (
		<div className={`custom-${type} catalog-filter__item`}>
			<label>
				<input type={type} value={value} />
				<span className={`custom-${type}__icon`} />
				<span className={`custom-${type}__label`}>{title}</span>
			</label>
		</div>
	);
};
