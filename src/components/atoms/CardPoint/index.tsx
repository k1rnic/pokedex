import cn from 'classnames';
import React, { FC } from 'react';
import ProgressBar from '../ProgressBar';
import Typography from '../Typography';
import s from './style.module.scss';

export type Props = {
  name: string;
  value: number;
  max: number;
  color: string;
};

const CardPoint: FC<Props> = ({ name, value, max, color }) => {
  const progress = (value / max) * 100;
  const formattedValue = value?.toLocaleString(navigator.language);

  return (
    <div className={cn(s.root)}>
      <Typography variant="p">{name}</Typography>
      <Typography variant="p" className={s.value}>
        {formattedValue}
      </Typography>
      <ProgressBar progress={progress} color={color} />
    </div>
  );
};

export default CardPoint;
