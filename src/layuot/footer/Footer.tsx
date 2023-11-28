import styled from 'styled-components';
import React from 'react';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaTelegram } from '@react-icons/all-files/fa/FaTelegram';
import { theme } from '../../styles/Theme';

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialIconsList>
        <SocialIconWrapper>
          <SocialIcon href="https://github.com/mdpalkin" target={'_blank'}>
            <AiFillGithub size={35} color={theme.colors.footerIcons} />
          </SocialIcon>
        </SocialIconWrapper>
        <SocialIconWrapper>
          <SocialIcon href="https://t.me/bvsxtv" target={'_blank'}>
            <FaTelegram size={35} color={theme.colors.footerIcons} />
          </SocialIcon>
        </SocialIconWrapper>
      </SocialIconsList>
      <Copyright>©2023 Palkin Mikhail. All rights reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const SocialIconsList = styled.ul`
  display: flex;
  gap: 17px;
  padding: 0;
`;

const SocialIconWrapper = styled.li`
  cursor: pointer;
  list-style: none;
  &:hover {
    transform: translateY(-4px);
  }
`;

const SocialIcon = styled.a``;

const Copyright = styled.small`
  color: ${theme.colors.footerIcons};
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin-top: 25px;

  @media ${theme.media.mobile} {
    font-size: 13px;
    margin-top: 10px;
  }
`;
