import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.paddingTop || '2rem'} 0.5rem;
  grid-gap: 2rem;

  @media (max-width: ${props => props.theme.screenSize.sm}) {
    padding: ${(props) => props.paddingTop || '2rem'} 0.5rem;
  }

  @media (min-width: ${props => props.theme.screenSize.md}) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.screenSize.lg}) {
    grid-gap: 5rem;
    padding: ${(props) => props.paddingTop} 5rem;
  }

  @media (min-width: ${props => props.theme.screenSize.xl}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
  }
`;

export default Container;
