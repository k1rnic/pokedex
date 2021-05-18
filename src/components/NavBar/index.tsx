import React from 'react';
import s from './style.module.scss';

export interface NavBarItem {
  link: string;
  label: string;
}

type Props = {
  items: NavBarItem[];
};

const NavBar: React.FC<Props> = ({ items }) => (
  <div className={s.root}>
    {items.map(({ link, label }, idx) => (
      <a className={s.menuLink} href={link} key={`${label}-${idx}`}>
        {label}
      </a>
    ))}
  </div>
);

export default NavBar;
