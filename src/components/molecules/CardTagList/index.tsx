import cn from 'classnames';
import React, { FC } from 'react';
import CardTag from '../../atoms/CardTag';
import s from './style.module.scss';

export type Props = {
  tags: string[];
  compact?: boolean;
};

const CardPropList: FC<Props> = ({ tags, compact }) => (
  <div className={cn(s.root)}>
    {tags.map((tag) => (
      <CardTag key={tag} color={tag} compact={compact}>
        {tag}
      </CardTag>
    ))}
  </div>
);

export default CardPropList;
