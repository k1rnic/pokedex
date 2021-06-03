/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FC } from 'react';
import Typography from '../Typography';
import s from './style.module.scss';

export type Props = {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

const Checkbox: FC<Props> = ({ label, checked, onChange }) => {
  const handleChange = ({ target: { checked: value } }: ChangeEvent<HTMLInputElement>) => {
    onChange(value);
  };

  return (
    <label className={s.root}>
      <input type="checkbox" checked={checked} onChange={handleChange} className={s.input} />
      <Typography variant="p" className={s.label}>
        {label}
      </Typography>
    </label>
  );
};

export default Checkbox;
