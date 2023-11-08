import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Logo } from '../../../components/logo/Logo';
import { OutlineIconsLinks } from '../../../components/socialLinks/OutlineIconsLinks';
import React, { useEffect, useState } from 'react';
import { Menu } from '../../../components/menu/Menu';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={isOpen} onClick={onClickHandler}>
        <span></span>
      </BurgerButton>

      <MobileMenuWrapper isOpen={isOpen}>
        <Logo />
        <OutlineIconsLinks />
        <Menu />
      </MobileMenuWrapper>
    </StyledMobileMenu>
  );
};

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 9999;
  display: none;

  span {
    display: block;
    position: absolute;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.lightFont};
    left: 40px;
    bottom: 50px;
    transition: ${theme.animations.transition};

    ${props =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: transparent;
      `}

    &:before {
      content: '';
      display: block;
      position: absolute;
      transform: translateY(-10px);
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.lightFont};
      transition: ${theme.animations.transition};
      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `};
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      transform: translateY(10px);
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.lightFont};
      transition: ${theme.animations.transition};
      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `};
    }
  }

  @media ${theme.media.headerMin} {
    display: block;
  }
`;

const StyledMobileMenu = styled.nav``;

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.dark};
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0.9;
  transform: translateY(-100%);
  transition: 1s ease-in-out;
  ${props =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
    `}
`;
