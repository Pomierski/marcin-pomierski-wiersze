import React from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { getLinkFromDate, getMonthAndYear } from '../utility';
import moment from 'moment';

moment().format('DD-MM-YYYY');

const StyledLink = styled(AniLink)`
  text-decoration: none;
  color: inherit;
`;

const DateLink = ({ date }) => {
  const linkPath = getLinkFromDate(moment(date));

  return (
    <StyledLink paintDrip hex="#ffd54f" to={linkPath}>
      <time dateTime={date}>{getMonthAndYear(date)}</time>
    </StyledLink>
  );
};

export default DateLink;
