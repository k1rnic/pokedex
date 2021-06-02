import cn from 'classnames';
import React from 'react';
import s from './style.module.scss';

export type Props = {
  name: string;
  img: string;
  background: string;
};

const CardAvatar = ({ img, name, background }: Props) => {
  const bgColor = `var(--card-${background})`;
  const bgDarken = `var(--card-${background}-darken)`;
  const bg = `linear-gradient(270deg, ${bgDarken} 0.15%, ${bgColor} 100%)`;

  return (
    <div className={cn(s.root)} style={{ background: bg }}>
      <img className={cn(s.img)} src={img} alt={name} />
    </div>
  );
};

export default CardAvatar;
