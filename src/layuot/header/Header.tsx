import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Logo />
        <Menu />
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: brown;
`;
