import cn from 'classnames';
import React from 'react';
import s from './style.module.scss';

type Props = {
  variant: keyof JSX.IntrinsicElements;
};

const Typography: React.FC<Props & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  variant: Tag,
  className,
  children,
  ...tagProps
}) => (
  <Tag className={cn(s[Tag], className)} {...tagProps}>
    {children}
  </Tag>
);

export default Typography;
