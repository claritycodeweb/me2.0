import { Col, Row } from '@components/FlexboxGrid';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  content: string;
}

const Style = {
  Wrapper: styled.div`
    margin-bottom: 3rem;
    background-color: #1e1e1e;
    padding: 1rem;
    ul {
      list-style: inside;

      margin-top: 2rem;
      display: block;
      li {
        display: list-item;
        padding: 1.5rem 0px;
      }
    }
    h2 {
      font-size: 2.8rem;
      font-weight: 600;
    }
    ${({ theme }) => theme.breakpoints.down('tablet')`
      display: none; 
    `}
  `,
  Link: styled.a<{ isActive: boolean }>`
    transition: all 0.5s ease;
    ${({ isActive }) =>
      isActive &&
      css`
        font-weight: 600;
        padding-left: 0.5rem;
      `}
  `,
};

const ArticleTableOfContents = ({ content }: IProps) => {
  const [active, setActive] = useState<string | null>(null);
  const lists = content.match(/(?!>)([^><]+)(?=<\/h2>)/g) || [];

  const ref = useRef<HTMLDivElement | null>(null);

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.5) {
        setActive(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const currentObserver = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    if (lists) {
      lists.forEach((elemID) => {
        const element = document.getElementById(elemID);
        if (element) {
          currentObserver.observe(element);
        }
      });
    }

    return () => currentObserver.disconnect();
  }, [ref, lists]);

  return (
    <Style.Wrapper>
      <Row>
        <Col>
          <h2>Table of contents</h2>
          <ul>
            {lists.map((item) => (
              <li key={item}>
                <Style.Link href="#" isActive={item === active}>
                  {item}
                </Style.Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Style.Wrapper>
  );
};

export default ArticleTableOfContents;
