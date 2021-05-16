import cn from 'classnames';
import React, { FC } from 'react';

type Props = {
  screenX: number;
  screenY: number;
  ratio: number;
};

const Parallax: FC<Props & React.HTMLProps<HTMLDivElement>> = ({ children, screenX, screenY, ratio, className }) => {
  return (
    <div
      className={cn(className)}
      style={{
        transform: `translate(${screenY * ratio}px, ${screenX * ratio}px)`,
      }}>
      {children}
    </div>
  );
};

export default Parallax;
