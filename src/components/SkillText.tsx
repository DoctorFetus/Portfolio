import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const SkillText = styled.h2`
  color: ${theme.colors.dark};
  font-size: 13px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 3px;
  text-transform: uppercase;
  width: 100%;

  @media ${theme.media.mobile} {
    font-size: 12px;
  }
`;
