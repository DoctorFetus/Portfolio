import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Logo = () => {
  return (
    <StyledLogo href={'https://github.com'}>
      <Name>Mikhail Palkin</Name>
      <Profession>Front-End Developer</Profession>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  align-items: end;
  gap: 10px;
`;

const Profession = styled.h1`
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 5.6px;
  text-transform: uppercase;
  color: ${theme.colors.light};
`;

const Name = styled.span`
  font-size: 28px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -1px;
  color: ${theme.colors.light};
`;
