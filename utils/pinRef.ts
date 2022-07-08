import { MutableRefObject } from 'react';

const pinRef = (
  refs: MutableRefObject<HTMLElement[]>,
  element: HTMLElement | null
) => {
  if (element) {
    refs.current.push(element);
  }
};

export default pinRef;
