import React from 'react';
import { graphql } from 'gatsby';
import loadable from '@loadable/component';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
const Card = loadable(() => import('../components/Card'));

export const query = graphql`
  query querySinglePost($slug: String!) {
    gcms {
      wiersz(where: { slug: $slug }) {
        title
        date
        content {
          html
          text
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 5rem;

  @media (max-width: ${(props) => props.theme.screenSize.sm}) {
    padding: 2rem 0.5rem;
  }

  @media (min-width: 992px) {
    padding: 2rem;
    padding-top: 5rem;
  }
`;

const singlePost = ({ data }) => {
  const { gcms: post } = data;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marcin Pomierski | {post.wiersz.title}</title>
        <meta name="description" content={`Wiersz pod tytułem ${post.wiersz.title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pomierski.pl/" />
        <meta property="og:title" content={post.wiersz.title} />
        <meta property="og:description" content={`${post.wiersz.content.text.slice(0, 100)} \nCzytaj dalej`} />
      </Helmet>
      <Wrapper>
        <Card single="true" date={post.wiersz.date} title={post.wiersz.title}>
          {post.wiersz.content.html}
        </Card>
      </Wrapper>
    </>
  );
};

export default singlePost;
