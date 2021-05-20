import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.article`
  padding: 2rem 3rem;
  background: #ffffff;
  border: 0;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  height: 480px;
  width: 380px;
  margin-bottom: 0;

  @media (max-width: ${(props) => props.theme.screenSize.sm}) {
    width: 100%;
    padding: 2rem 1.5rem;
    margin-bottom: ${(props) => (props.single ? '3rem' : '0')};
  }

  @media (min-width: ${(props) => props.theme.screenSize.md}) {
    width: ${(props) => (props.single ? '400px' : 'unset')};
  }

  ${(props) =>
    props.single &&
    css`
      height: auto;
      margin-bottom: 5rem;
    `}
`;

const Date = styled.time`
  font-size: 0.8rem;
  color: #656464;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Button = styled(Link)`
  background: none;
  border: 1px solid #000000;
  color: #000000;
  width: 7rem;
  padding: 1rem;
  margin-top: 2rem;
  display: block;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;
`;

const Content = styled.div`
  height: ${(props) => (props.single ? 'auto' : '15rem')};
  overflow: hidden;
  white-space: pre-wrap;
  color: #616161;
  position: relative;

  &::after {
    content: '';
    display: ${(props) => (props.single ? 'none' : 'block')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 0) 0%,
      rgba(9, 9, 121, 0) 67%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  ${(props) =>
    props.single ||
    css`
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `}
`;

const Card = ({ title, date, children, slug, single }) => (
  <Wrapper single={single}>
    <header>
      <Date dateTime={date}>{date}</Date>
      <Title>{title}</Title>
    </header>
    <Content single={single}>
      <span dangerouslySetInnerHTML={{ __html: children }} />
    </Content>
    <Button to={single ? window.prevLocation : `/wiersze/${slug}`}>
      {single ? 'Powrót' : 'Czytaj dalej'}
    </Button>
  </Wrapper>
);

export default Card;
