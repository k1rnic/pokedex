import cn from 'classnames';
import React, { FC, HTMLProps } from 'react';
import s from './style.module.scss';

export type Props = {
  dense?: boolean;
  level?: 1 | 2;
};

const Paper: FC<Props & HTMLProps<HTMLDivElement>> = ({ dense, level = 1, children, className, ...props }) => (
  <div
    {...props}
    className={cn(s.root, s[`level-${level}`], className, {
      [s.dense]: dense,
    })}>
    {children}
  </div>
);

export default Paper;
