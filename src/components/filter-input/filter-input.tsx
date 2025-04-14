import { FC } from 'react';

type TCategoryRadio = {
	name: string;
	type: string;
	title: string;
	value: string;
};

export const FilterInput: FC<TCategoryRadio> = ({ name, type, title, value }) => {
	return (
		<div className={`custom-${type} catalog-filter__item`}>
			<label>
				<input name={name} type={type} value={value} />
				<span className={`custom-${type}__icon`} />
				<span className={`custom-${type}__label`}>{title}</span>
			</label>
		</div>
	);
};
