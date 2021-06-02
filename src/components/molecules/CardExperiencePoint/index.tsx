import React, { FC } from 'react';
import CardPoint from '../../atoms/CardPoint';

export type Props = {
  value: number;
};

const MAX_EXPERIENCE_VALUE = 12000000;

const CardExperiencePoint: FC<Props> = ({ value }) => {
  return (
    <CardPoint
      name="Experience"
      value={value}
      max={MAX_EXPERIENCE_VALUE}
      color="linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)"
    />
  );
};

export default CardExperiencePoint;
