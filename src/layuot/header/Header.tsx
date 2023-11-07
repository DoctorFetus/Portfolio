import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/container/Container';
import React from 'react';
import { FlexWrapper } from '../../components/FlexWrapper';
import { OutlineIconsLinks } from '../../components/socialLinks/OutlineIconsLinks';
import { theme } from '../../styles/Theme';
import { MobileMenu } from './mobileMenu/MobileMenu';

export const Header = () => {
  return (
    <HeaderWrapper id={'header'}>
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
      <MobileMenu />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header``;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;
