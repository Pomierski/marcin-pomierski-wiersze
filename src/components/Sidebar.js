import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import DateLink from './DateLink';
import penIcon from '../assets/icons/quill-ink.svg';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useSpring, animated as a } from 'react-spring';
import Select from './Select';

const StyledLink = styled(AniLink)`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled(a.div)`
  height: 100%;
  flex: 1;
  background: #0f4c5c;
  position: relative;
  z-index: 2;
  max-width: 340px;
  padding-bottom: 5rem;
  overflow-y: auto;
  transform: translateX(0px);

  @media (max-width: 992px) {
    display: block;
    position: absolute;
    left: -340px;
  }

  @media (min-width: 992px) {
    min-width: 310px;
  }
`;

const StyledNav = styled.nav`
  padding: 1.5rem 1.5rem 0 1.5rem;

  @media (min-width: 650px) {
    padding: 1.5rem 3rem 0rem 3rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin-top: 1rem;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #d2d2d2;
`;

const Logo = styled.button`
  object-fit: fill;
  height: 4rem;
  width: 4rem;
  margin: 0 auto;
  border: 1px solid #ffd54f;
  background: #ffd54f;
  border-radius: 50%;
  padding: 0.5rem;
  background-image: url(${penIcon});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  display: none;
`;

const Heading = styled.h1`
  margin: 0;
  margin-top: 3rem;
  font-size: 3rem;
  font-family: 'Inria Serif', serif;
  color: #ffffff;

  @media (max-width: 992px) {
    display: none;
  }
`;

const Category = styled.span`
  color: #ffd54f;
  border-bottom: 1px solid #ffd54f;
  padding-bottom: 0.5rem;
  text-decoration: none;
  font-weight: bold;
`;

const Sidebar = ({ show }) => {
  const [showSidebar, setshowSidebar] = useState(show);
  const props = useSpring({ transform: `translateX(${showSidebar ? '340' : '0'}px)` });

  useEffect(() => {
    setshowSidebar(show);
  }, [showSidebar, show]);

  const data = useStaticQuery(graphql`
    {
      gcms {
        wiersze {
          date
        }
      }
    }
  `);

  const date = [];
  data.gcms.wiersze.forEach((item) => date.push(item.date.slice(0, item.date.lastIndexOf('-'))));

  let uniqueDate = [...new Set(date)];
  uniqueDate.sort((a, b) => new Date(b) - new Date(a));

  const sideBarLinks = uniqueDate.slice(0, 10);
  uniqueDate = uniqueDate.slice(10, uniqueDate.length);

  return (
    <Wrapper style={props}>
      <StyledNav>
        <StyledLink paintDrip hex="#ffd54f" to="/">
          <Logo></Logo>
          <header>
            <Heading>Marcin Pomierski</Heading>
          </header>
        </StyledLink>
        <List>
          <ListItem>
            <Category>Najnowsze wiersze</Category>
          </ListItem>
          {sideBarLinks.map((item) => (
            <ListItem key={item}>
              <DateLink date={item} />
            </ListItem>
          ))}
          <ListItem>
            <Category>Pozostałe</Category>
            <div>
              <Select arr={uniqueDate} />
            </div>
          </ListItem>
        </List>
      </StyledNav>
    </Wrapper>
  );
};

export default Sidebar;
