import React from 'react';
import {
  getArticleBySlug,
  getArticlesWithMd,
} from '@cache/articles/lib/articles';
import { marked } from 'marked';
import ArticleSingleHero from '@components/Articles/AriticleSingleHero';
import MainLayout from '@components/Layouts/MainLayout';
import Container from '@styles/container.style';
import { IArticle } from 'types/article';
import { Col, Row } from '@components/FlexboxGrid';
import { GetStaticPropsContext } from 'next/types';
import styled from 'styled-components';
import ArticleTableOfContents from '@components/Articles/ArticleTableOfContents';
import ArticleTags from '@components/Articles/ArticleTags';

interface IProps {
  content: string;
  frontmatter: IArticle;
}

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const hljs = require('highlight.js');

    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

const MdContent = styled.div`
  margin-bottom: 10rem;
  line-height: 2.5rem;

  strong {
    font-weight: bold;
    /* background-color: #efe9e9; */
    text-shadow: rgba(0, 0, 0, 0.3) 0px 1px;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1.4rem;
  }

  blockquote {
    color: #c3c2c2;
    border-left: 2px solid #e60931;
    padding-left: 1em;
    margin-bottom: 1em;
    font-style: italic;
  }

  hr {
    border-top: 1px solid #efe9e9;
  }

  @media (max-width: 768px) {
    code {
      font-size: 10px;
    }
  }
  h2 {
    margin: 3rem 0;
  }
  ol {
    list-style: inside;
    padding-top: 1em;
    > li {
      > p {
        display: inline;
      }
    }
  }

  code {
    font-size: 1.6rem;
    margin: 2rem 0;
  }
  blockquote {
    margin: 1rem;
  }
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 9rem;
`;

const ArticlePage = ({ content, frontmatter }: IProps) => {
  return (
    <MainLayout>
      <ArticleSingleHero
        bgUrl={frontmatter.mainImage}
        title={frontmatter.title}
        subtitle={frontmatter.shortDesc}
        author={frontmatter.author}
        date={frontmatter.date}
      />
      <Container>
        <Row>
          <Col base={8}>
            <MdContent dangerouslySetInnerHTML={{ __html: marked(content) }} />
          </Col>
          <Col base={4}>
            <StickyContainer>
              <ArticleTableOfContents content={content} />
              <ArticleTags tags={frontmatter.tags} />
            </StickyContainer>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const paths = await getArticlesWithMd();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  if (!params || !params.slug) {
    return { notFound: true };
  }
  const { content, frontmatter } = await getArticleBySlug(params.slug);

  return {
    props: {
      frontmatter,
      content,
      slug: params?.slug,
    },
  };
}
export default ArticlePage;
