import { keyframes } from 'styled-components';

export const duration = '0.25s';

export const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
    visibility: visible;
  }
  100% {
    transform: translateX(0);
  }
`;

export const slideInLeft = keyframes`
  0% {
    transform: translateX(-100%);
    visibility: visible;
  }
  100% {
    transform: translateX(0);
  }
`;

export const slideInDown = keyframes`
  0% {
    transform: translateY(100%);
    visibility: visible;
  }
  100% {
    transform: translateY(0);
  }
`;

export const slideInUp = keyframes`
  0% {
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    transform: translateY(0);
  }
`;

export const slideOutRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
    visibility: hidden;
  }
`;

export const slideOutLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
    visibility: hidden;
  }
`;

export const slideOutDown = keyframes`
  0% {
    transform: translateY(0);
   
  }
  100% {
    transform: translateY(100%);
    visibility: hidden;
  }
`;

export const slideOutUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
    visibility: hidden;
  }
`;
