import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/container/Container';
import React from 'react';
import { FlexWrapper } from '../../components/FlexWrapper';
import { OutlineIconsLinks } from '../../components/socialLinks/OutlineIconsLinks';

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Container>
          <FlexWrapper alignItems={'center'} justifyContent={'space-between'}>
            <FlexWrapper gap={'41px'}>
              <Logo />
              <OutlineIconsLinks />
            </FlexWrapper>
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
  margin-top: 40px;
  //background-color: brown;
`;
