import cn from 'classnames';
import React, { FC } from 'react';
import s from './style.module.scss';

export type Props = {
  color: string;
  compact?: boolean;
};

const CardTag: FC<Props> = ({ color, compact, children }) => {
  const cardColor = `var(--card-${color})`;

  return (
    <span
      className={cn(s.root, {
        [s.compact]: compact,
      })}
      style={{ backgroundColor: cardColor }}>
      {children}
    </span>
  );
};

export default CardTag;
