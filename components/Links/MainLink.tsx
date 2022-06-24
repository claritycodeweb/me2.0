import Link from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Span = styled.span`
  outline: 0px;
  appearance: none;
  border: 0px;
  cursor: pointer;
  padding: 1rem 2rem;
  ont-size: 1.8rem;
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px, rgb(0 0 0 / 25%) 0px 1px 6px;
  transition: all 250ms ease-in-out;
  color: ${({ theme }) => theme.palette.background.default};
  background-color: #f7f8fa;
  &:hover {
    transform: translateY(-0.25rem);
  }
  border-radius: 2px;
`;

const MainLink = ({
  children,
  href,
}: PropsWithChildren<{ href: string; className?: string }>) => {
  return (
    <Link href={href}>
      <a>
        <Span>{children}</Span>
      </a>
    </Link>
  );
};

export default MainLink;
