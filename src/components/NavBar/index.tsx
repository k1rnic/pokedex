import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import React from 'react';
import { IRoute } from '../../interfaces/route';
import s from './style.module.scss';

type Props = {
  items: IRoute[];
};

const NavBar: React.FC<Props> = ({ items }) => {
  const path = usePath();

  return (
    <div className={s.root}>
      {items.map(({ route, label }, idx) => (
        <A className={cn(s.menuLink, { [s.activeLink]: path === route })} href={route} key={`${label}-${idx}`}>
          {label}
        </A>
      ))}
    </div>
  );
};

export default NavBar;
