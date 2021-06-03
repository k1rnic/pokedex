import cn from 'classnames';
import React, { FC } from 'react';
import { ReactComponent as ArrowFilterDown } from '../../../assets/ArrowFilter.svg';
import Typography from '../Typography';
import s from './style.module.scss';

export type Props = {
  text: string;
  open: boolean;
  onToggle: () => void;
};

const DropdownHeader: FC<Props> = ({ text, open, onToggle }) => {
  const handleToggle = () => {
    onToggle();
  };

  return (
    <div className={s.root} onClick={handleToggle}>
      <Typography variant="p" className={s.title}>
        {text}
      </Typography>
      <ArrowFilterDown
        className={cn(s.arrow, {
          [s.open]: open,
        })}
      />
    </div>
  );
};

export default DropdownHeader;
