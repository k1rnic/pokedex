import cn from 'classnames';
import React, { FC, useState } from 'react';
import { ReactComponent as ArrowFilterDown } from '../../../assets/ArrowFilter.svg';
import Typography from '../Typography';
import s from './style.module.scss';

export type Props = {
  text: string;
  open: boolean;
  onToggle: (value: boolean) => void;
};

const DropdownHeader: FC<Props> = ({ text, open, onToggle }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = () => {
    setIsOpen((state) => !state);
    onToggle(!isOpen);
  };

  return (
    <div className={s.root} onClick={handleToggle}>
      <Typography variant="p" className={s.title}>
        {text}
      </Typography>
      <ArrowFilterDown
        className={cn(s.arrow, {
          [s.open]: isOpen,
        })}
      />
    </div>
  );
};

export default DropdownHeader;
