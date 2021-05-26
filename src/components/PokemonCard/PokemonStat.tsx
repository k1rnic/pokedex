import React from 'react';
import { IPokemonStats } from '../../interfaces/pokemon';
import s from './style.module.scss';

type Props = {
  stats: IPokemonStats;
};

const PokemonStat = ({ stats }: Props) => {
  return (
    <div className={s.statWrap}>
      <div className={s.statItem}>
        <div className={s.statValue}>{stats.attack}</div>
        Attack
      </div>

      <div className={s.statItem}>
        <div className={s.statValue}>{stats.defense}</div>
        Defense
      </div>
    </div>
  );
};

export default PokemonStat;
