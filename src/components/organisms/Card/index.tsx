import cn from 'classnames';
import React, { FC } from 'react';
import { IPokemon } from '../../../interfaces/pokemon';
import CardAvatar from '../../atoms/CardAvatar';
import Paper from '../../atoms/Paper';
import Typography from '../../atoms/Typography';
import CardPropList from '../../molecules/CardPropList';
import CardTagList from '../../molecules/CardTagList';
import s from './style.module.scss';

export type Props = {
  pokemon: IPokemon;
  onClick?: (pokemon: IPokemon) => void;
};

const Card: FC<Props> = ({ pokemon, onClick }) => {
  const { name, stats, types, img } = pokemon;

  return (
    <Paper className={cn(s.root)} onClick={() => onClick?.(pokemon)}>
      <div className={s.stat}>
        <Typography variant="h4">{name}</Typography>
        <CardPropList compact {...stats} />
        <CardTagList compact tags={types} />
      </div>
      <div className={s.avatar}>
        <CardAvatar name={name} img={img} background={types[0]} />
      </div>
    </Paper>
  );
};

export default Card;
