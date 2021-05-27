import cn from 'classnames';
import React, { FC } from 'react';
import { IPokemon } from '../../../interfaces/pokemon';
import CardAvatar from '../../atoms/CardAvatar';
import CardTitle from '../../atoms/CardTitle';
import Paper from '../../atoms/Paper';
import CardPropList from '../../molecules/CardPropList';
import CardTagList from '../../molecules/CardTagList';
import s from './style.module.scss';

export type Props = {
  pokemon: IPokemon;
};

const Card: FC<Props> = ({ pokemon: { name, stats, types, img } }) => (
  <Paper className={cn(s.root)}>
    <div className={s.stat}>
      <CardTitle compact>{name}</CardTitle>
      <CardPropList compact {...stats} />
      <CardTagList compact tags={types} />
    </div>
    <div className={s.avatar}>
      <CardAvatar name={name} img={img} background={types[0]} />
    </div>
  </Paper>
);

export default Card;
