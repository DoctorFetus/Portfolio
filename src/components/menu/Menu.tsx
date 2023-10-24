import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <StyledItem>
          <Icon iconId={'email'} height={'24px'} width={'24px'} viewBox={'0 0 24 24'} />
          <Info href={'mailto:thefireofcoall@gmail.com'}>thefireofcoall@gmail.com</Info>
        </StyledItem>
        <StyledItem>
          <Icon iconId={'headphones'} height={'24px'} width={'24px'} viewBox={'0 0 24 24'} />
          <Info href={'tel:+79152714899'}>+7 915 271 48 99</Info>
        </StyledItem>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }
`;

const Info = styled.a`
  color: ${theme.colors.light};
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-decoration-line: underline;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 11px;
`;
