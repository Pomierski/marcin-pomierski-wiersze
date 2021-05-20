import React from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { Link } from 'gatsby';

const Header = styled.header`
  height: 3rem;
  padding: 1rem 0;
  width: 100%;
  background: #0f4c5c;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (min-width: 992px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: #ffffff;
  font-family: 'Inria Serif', serif;
  width: fit-content;
  font-size: 1.2rem;
`;

const DrawerButton = styled.button`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffd54f;
  border: 1px solid #ffd54f;
  background: none;
  height: 2rem;
  width: 2rem;
  font-size: 2rem;
  border-radius: 10%;
  align-self: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MobileNavbar = ({ buttonFn }) => (
  <>
    <Header>
      <DrawerButton onClick={buttonFn} aria-label="Open sidebar menu">
        <MdMenu />
      </DrawerButton>
      <Title>
        <StyledLink to="/">Marcin Pomierski</StyledLink>
      </Title>
    </Header>
  </>
);

export default MobileNavbar;
