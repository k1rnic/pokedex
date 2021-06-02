import React, { FC } from 'react';
import CardPoint from '../../atoms/CardPoint';

export type Props = {
  value: number;
};

const MAX_HEALTH_VALUE = 12000000;

const CardHealthPoint: FC<Props> = ({ value }) => {
  return (
    <CardPoint
      name="Healthy Points"
      value={value}
      max={MAX_HEALTH_VALUE}
      color="linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)"
    />
  );
};

export default CardHealthPoint;
