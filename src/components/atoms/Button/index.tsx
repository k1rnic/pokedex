import cn from 'classnames';
import React from 'react';
import s from './style.module.scss';

type Props = {
  color?: 'success' | 'default';
  compact?: boolean;
  fullWidth?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = ({
  color = 'default',
  compact,
  fullWidth = false,
  children,
  onClick,
}) => (
  <button
    className={cn(s.root, s[color], { [s.fullWidth]: fullWidth, [s.compact]: compact })}
    type="button"
    onClick={onClick}>
    {children}
  </button>
);

export default Button;
