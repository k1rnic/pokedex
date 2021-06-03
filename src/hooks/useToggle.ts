import { useState } from 'react';

const useToggle = (value = false) => {
  const [open, setOpen] = useState(value);

  const toggle = () => setOpen((state) => !state);

  return [open, toggle] as const;
};

export default useToggle;
