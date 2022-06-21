import { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slide = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const moveInRight = keyframes` 
  0% {
      opacity: 0;
      transform: translateX(10rem);
  }

  80% {
      transform: translateX(-1rem);
  }

  100% {
      opacity: 1;
      transform: translateX(0);
  }
`;

const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export { fade, slide, moveInLeft, moveInRight };
