import React from 'react';
import { ReactComponent as PokemonLogo } from '../../assets/pokemon-logo.svg';
import NAV_ITEMS from '../../constants/nav-items';
import NavBar from '../NavBar';
import s from './style.module.scss';

const Header = () => (
  <div className={s.root}>
    <div className={s.wrap}>
      <div className={s.pokemonLogo}>
        <PokemonLogo />
      </div>
      <NavBar items={NAV_ITEMS} />
    </div>
  </div>
);

export default Header;
