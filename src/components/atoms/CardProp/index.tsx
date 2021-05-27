import cn from 'classnames';
import React from 'react';
import Typography from '../Typography';
import Paper from '../Paper';
import s from './style.module.scss';

export type Props = {
  name: string;
  value: number;
  compact?: boolean;
};

const CardProp = ({ name, value, compact }: Props) => (
  <div className={cn(s.root)}>
    <div
      className={cn(s.valueWrap, {
        [s.compact]: compact,
      })}>
      <Typography variant="p" className={s.value}>
        {value}
      </Typography>
    </div>
    <Typography variant="span" className={s.name}>
      {name}
    </Typography>
  </div>
);

export default ({ ...props }: Props) =>
  props.compact ? (
    <CardProp {...props} />
  ) : (
    <Paper dense level={2} className={s.paper}>
      <CardProp {...props} />
    </Paper>
  );
