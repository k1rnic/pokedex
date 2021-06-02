import cn from 'classnames';
import React, { FC } from 'react';
import Paper from '../../atoms/Paper';
import CardExperiencePoint from '../CardExperiencePoint';
import CardHealthPoint from '../CardHealthPoint';
import s from './style.module.scss';

export type Props = {
  health: number;
  exp: number;
};

const CardPointList: FC<Props> = ({ health, exp }) => (
  <Paper className={cn(s.root)}>
    <CardHealthPoint value={health} />
    <CardExperiencePoint value={exp} />
  </Paper>
);

export default CardPointList;
