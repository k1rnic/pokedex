import React, { FC } from 'react';
import Typography from '../Typography';

export type Props = {
  compact?: boolean;
};

const CardTitle: FC<Props> = ({ compact, children }) => (
  <Typography variant={compact ? 'h4' : 'h3'}>{children}</Typography>
);

export default CardTitle;
