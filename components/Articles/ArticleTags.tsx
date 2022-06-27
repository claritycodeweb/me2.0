import { Col, Row } from '@components/FlexboxGrid';
import MainLink from '@components/Links/MainLink';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  tags: string[];
}

const Style = {
  Wrapper: styled.div`
    margin-bottom: 3rem;
    background-color: #1e1e1e;
    padding: 1rem;
    h2 {
      margin-bottom: 2rem;
    }
  `,
  Tags: styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  `,
  Tag: styled(MainLink)`
    display: block;
    padding: 0.75rem;
    font-size: 1.4rem;
  `,
};

const ArticleTags = ({ tags }: IProps) => {
  return (
    <Style.Wrapper>
      <Row>
        <Col>
          <h2>Tags</h2>
          <Style.Tags>
            {tags.map((tag) => (
              <li key={tag}>
                <Style.Tag
                  href={`/articles/category/${tag.toLocaleLowerCase()}`}
                >
                  {tag}
                </Style.Tag>
              </li>
            ))}
          </Style.Tags>
        </Col>
      </Row>
    </Style.Wrapper>
  );
};

export default ArticleTags;
