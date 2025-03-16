import { FC } from 'react';

type TFormErrorElement = {
  message: string;
}

export const FormErrorElement: FC<TFormErrorElement> = ({ message }) => (
  <p className="custom-input__error show">{message}</p>
);
