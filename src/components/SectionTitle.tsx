import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const SectionTitle = styled.h2`
  //display: block;
  color: ${theme.colors.darkFont};
  //margin: 0 auto;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px; /* 168.75% */
  letter-spacing: 4.8px;
  text-transform: uppercase;
`;
