import { useLayoutEffect, useState, useEffect } from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const useSticky = (offset = 0) => {
  const [stick, setStick] = useState(false);

  const handleScroll = () => {
    setStick(window.scrollY > offset);
  };

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return stick;
};

export default useSticky;
