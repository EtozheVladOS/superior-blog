import { useCallback, useMemo, useState } from 'react';

type HoverFuncs = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverReturnValue = [boolean, HoverFuncs];

export const useHover = (): UseHoverReturnValue => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return useMemo(() => ([
    isHovered,
    {
      onMouseEnter,
      onMouseLeave,
    },
  ]), [isHovered, onMouseEnter, onMouseLeave]);
};
