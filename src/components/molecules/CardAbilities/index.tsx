import cn from 'classnames';
import React, { FC } from 'react';
import Paper from '../../atoms/Paper';
import Typography from '../../atoms/Typography';
import s from './style.module.scss';

export type Props = {
  abilities: string[];
};

const CardAbilities: FC<Props> = ({ abilities = [] }) => (
  <Paper className={cn(s.root)}>
    <Typography variant="p">Abilities</Typography>
    <Typography variant="p">{abilities.join(' - ')}</Typography>
  </Paper>
);

export default CardAbilities;
