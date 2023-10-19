import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/container/Container';
import React from 'react';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Container>
          <FlexWrapper alignItems={'center'} justifyContent={'space-between'}>
            <Logo />
            <Menu />
          </FlexWrapper>
        </Container>
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
