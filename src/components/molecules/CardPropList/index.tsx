import cn from 'classnames';
import React, { FC } from 'react';
import { IPokemonStats } from '../../../interfaces/pokemon';
import CardProp from '../../atoms/CardProp';
import s from './style.module.scss';

export type Props = {
  compact?: boolean;
} & Pick<IPokemonStats, 'defense' | 'attack' | 'special-attack' | 'special-defense'>;

const CardPropList: FC<Props> = ({ compact, defense, attack, ...props }) => {
  return (
    <div
      className={cn(s.root, {
        [s.compact]: compact,
      })}>
      <CardProp compact={compact} name="Defence" value={defense} />
      <CardProp compact={compact} name="Attack" value={attack} />
      {!compact && <CardProp name="Sp Attack" value={props['special-attack']} />}
      {!compact && <CardProp name="Sp Defence" value={props['special-defense']} />}
    </div>
  );
};

export default CardPropList;
