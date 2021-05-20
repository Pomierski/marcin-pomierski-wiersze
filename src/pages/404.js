import React from 'react';
import styled, { keyframes } from 'styled-components';
import Astronaut from '../assets/Astronaut-01.svg';
import { Link } from 'gatsby';

const floatingAnim = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(50px);
    }
`;

const AnimatedImg = styled.img`
  transform: translateY(0px);
  animation: ${floatingAnim} 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: ${(props) => props.theme.screenSize.sm}) {
    padding-top: 2rem;
    align-items: flex-start;
  }
`;

const NotFound = () => (
  <Wrapper>
    <div>
      <h2>
        Strona nie została znaleziona
        <span role="img" aria-label="magnifier emoji">
          🔍
        </span>
      </h2>
      <Link to="/">Przejdź do strony głównej</Link>
      <AnimatedImg src={Astronaut} alt="Astronata zgubiony w kosmosie"></AnimatedImg>
    </div>
  </Wrapper>
);

export default NotFound;
