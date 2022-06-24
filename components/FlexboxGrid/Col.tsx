import { breakpoints } from '@config/themes/common';
import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../config/themes/styled';

type PartialRecord<K extends string, T> = {
  [P in K]?: T;
};

function isOfTypeBreakpoint(keyInput: string): keyInput is Breakpoint {
  return Object.keys(breakpoints).includes(keyInput);
}

const StyledCol = styled.div<
  PartialRecord<Breakpoint, number> & { base?: number }
>`
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  display: block;
  padding: 1.5rem;

  ${({ theme, ...rest }) => {
    return Object.keys(rest)
      .filter((key) => isOfTypeBreakpoint(key))
      .map((brk) => {
        return theme.breakpoints.down(brk as Breakpoint)` 
            max-width: ${((rest[brk as Breakpoint] || 12) / 12) * 100}%;
            flex-basis: ${((rest[brk as Breakpoint] || 12) / 12) * 100}%;
        `;
      });
  }}

  ${({ theme, base }) =>
    base &&
    theme.breakpoints.up('desktop')`
         max-width: ${((base || 12) / 12) * 100}%;
         flex-basis: ${((base || 12) / 12) * 100}%;
  `}
`;

interface IProps extends PartialRecord<Breakpoint, number> {
  children?: React.ReactNode;
  base?: number;
  style?: React.CSSProperties;
}

const Col = ({ children, ...rest }: IProps) => {
  return <StyledCol {...rest}>{children}</StyledCol>;
};

export { Col };
