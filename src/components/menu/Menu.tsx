import styled from 'styled-components';

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>social links</li>
        <li>contacts</li>
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
