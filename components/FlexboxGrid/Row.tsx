import styled, { css } from 'styled-components';

type RowType = {
  reverse?: boolean;
  start?: boolean;
  center?: boolean;
  end?: boolean;
  top?: boolean;
  middle?: boolean;
  bottom?: boolean;
  around?: boolean;
  between?: boolean;
  first?: boolean;
  last?: boolean;
};
export const Row = styled.div<RowType>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${(p) =>
    p.reverse &&
    css`
      flex-direction: row-reverse;
    `}
  ${(p) =>
    p.start &&
    css`
      justify-content: flex-start;
    `}
  ${(p) =>
    p.center &&
    css`
      justify-content: center;
    `}
  ${(p) =>
    p.end &&
    css`
      justify-content: flex-end;
    `}
  ${(p) =>
    p.top &&
    css`
      align-items: flex-start;
    `}
  ${(p) =>
    p.middle &&
    css`
      align-items: center;
    `}
  ${(p) =>
    p.bottom &&
    css`
      align-items: flex-end;
    `}
  ${(p) =>
    p.around &&
    css`
      justify-content: space-around;
    `}
  ${(p) =>
    p.between &&
    css`
      justify-content: space-between;
    `}
  ${(p) =>
    p.first &&
    css`
      order: -1;
    `}
  ${(p) =>
    p.last &&
    css`
      order: 1;
    `}
`;
