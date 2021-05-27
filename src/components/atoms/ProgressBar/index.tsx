import cn from 'classnames';
import React, { FC } from 'react';
import s from './style.module.scss';

export type Props = {
  color: string;
  progress: number;
};

const ProgressBar: FC<Props> = ({ color, progress }) => (
  <div className={cn(s.root)}>
    <div className={cn(s.progress, s.full)} />
    <div className={cn(s.progress, s.current)} style={{ background: color, width: `${progress}%` }} />
  </div>
);

export default ProgressBar;
