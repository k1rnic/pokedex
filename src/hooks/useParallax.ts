import { useEffect, useState } from 'react';

export default () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = ({ screenX, screenY }: MouseEvent) => {
    setX(screenX);
    setY(screenY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return [x, y];
};
