import React from 'react';
import { ReactComponent as PokemonLogo } from '../../assets/Logo.svg';
import { IRoute } from '../../interfaces/route';
import { ROUTES } from '../../routes';
import NavBar from '../NavBar';
import s from './style.module.scss';

const NAV_MENU: IRoute[] = ROUTES.filter(({ showInNav }) => showInNav);

const Header = () => (
  <div className={s.root}>
    <div className={s.wrap}>
      <div className={s.pokemonLogo}>
        <PokemonLogo />
      </div>
      <NavBar items={NAV_MENU} />
    </div>
  </div>
);

export default Header;
