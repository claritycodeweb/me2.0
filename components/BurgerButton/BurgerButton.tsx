import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const S = {
  Button: styled.button<{ open: boolean }>`
    width: 3rem;
    height: 3rem;
    display: inline-block;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    position: relative;

    &:focus {
      outline: none;
    }

    &:after {
      z-index: 0;
      top: 2px;
      left: 0;
      content: '';
      position: absolute;
      opacity: 0;
      border-radius: 50%;
      background-color: lightgray;
      height: 100%;
      width: 100%;
      transition: opacity 0.4s ease-out;
      transform: scale(1.5);
    }

    @media (hover: hover) {
      &:hover {
        &:after {
          opacity: 0.4;
        }
      }
    }

    span {
      z-index: 1;
      display: block;
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.15rem;
      background: ${({ open, theme: { palette } }) =>
        open ? palette.white : palette.white};
      transition: all 0.3s ease;
      opacity: 1;
      border-radius: 2rem;

      &:nth-of-type(1) {
        top: 0.8rem;
      }
      &:nth-of-type(2) {
        top: 1.6rem;
      }
      &:nth-of-type(3) {
        top: 2.4rem;
      }

      ${({ open }) =>
        open &&
        css`
          &:nth-of-type(1),
          &:nth-of-type(3) {
            top: 1.6rem;
          }
          &:nth-of-type(1) {
            transform: rotate(45deg);
          }
          &:nth-of-type(2) {
            opacity: 0;
          }
          &:nth-of-type(3) {
            transform: rotate(-45deg);
          }
        `}
    }
  `,
};

const Burger = ({ open, setOpen }: IProps) => {
  return (
    <S.Button open={open} onClick={() => setOpen(!open)} aria-label="Menu">
      <span />
      <span />
      <span />
    </S.Button>
  );
};

export default Burger;
