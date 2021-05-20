import React from 'react';
import { navigate } from '@reach/router';
import { getLinkFromDate, getMonthAndYear } from '../utility';
import styled from 'styled-components';

const StyledSelect = styled.select`
  margin-top: 1.3rem;
  padding: 0.5rem;
  border: 1px solid #fff;
  background: none;
  color: #fff;

  option {
    background: #0f4c5c;
    color: #fff;
    padding: 0.5rem;
  }

  &&::ms-expand {
    border: 1px solid #fff;
  }
`;

const Select = ({ arr }) => {
  const redirect = (e) => {
    navigate(getLinkFromDate(e.target.value));
  };

  return (
    <StyledSelect onChange={(e) => redirect(e)}>
      <option value="">Wybierz date</option>
      {arr.map((item) => (
        <option key={item} value={item}>
          {getMonthAndYear(item)}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
