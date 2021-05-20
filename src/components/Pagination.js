import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 2rem auto;
  width: fit-content;
  background: #fff;
  color: #757575;

  @media (max-width: ${(props) => props.theme.screenSize.sm}) {
    margin-bottom: ${(props) => (props.bottom ? '10rem' : '2rem')};
  }
`;

const Button = styled(Link)`
  font-size: 1.5rem;
  padding: 0 0.25rem;
  height: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.12);
  text-decoration: none;
  color: inherit;
  transition: color 0.5s, border-color 0.5s;

  &:hover {
    border-color: #0f4c5c;
    color: #0f4c5c;
    transition: color 0.5s, border-color 0.5s;
  }

  ${(props) =>
    props.left &&
    css`
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    `}

  ${(props) =>
    props.right &&
    css`
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    `}
`;

const Status = styled.div`
  height: 2rem;
  border-top: 2px solid rgba(0, 0, 0, 0.12);
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  color: #000;
  line-height: 2rem;
  vertical-align: middle;
`;

const Pagination = ({ prevLink, nextLink, currentPage }) => (
  <Wrapper>
    <Button left="true" to={prevLink}>
      <MdKeyboardArrowLeft />
    </Button>
    <Status>{currentPage}</Status>
    <Button right="true" to={nextLink}>
      <MdKeyboardArrowRight />
    </Button>
  </Wrapper>
);

export default Pagination;
