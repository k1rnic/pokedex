import cn from 'classnames';
import React, { FC } from 'react';
import Typography from '../Typography';
import s from './style.module.scss';

const CardId: FC = ({ children }) => (
  <div className={cn(s.root)}>
    <Typography variant="p" className={s.value}>
      {children}
    </Typography>
  </div>
);

export default CardId;
