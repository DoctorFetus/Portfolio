import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';

export const Footer = () => {
  return (
    <StyledFooter>
      <Email>thefireofcoall@gmail.com</Email>
      <SocialIconsList>
        <SocialIconWrapper>
          <SocialIcon>
            <Icon iconId={'react'}></Icon>
          </SocialIcon>
        </SocialIconWrapper>
        <SocialIconWrapper>
          <SocialIcon>
            <Icon iconId={'react'}></Icon>
          </SocialIcon>
        </SocialIconWrapper>
        <SocialIconWrapper>
          <SocialIcon>
            <Icon iconId={'react'}></Icon>
          </SocialIcon>
        </SocialIconWrapper>
        <SocialIconWrapper>
          <SocialIcon>
            <Icon iconId={'react'}></Icon>
          </SocialIcon>
        </SocialIconWrapper>
        <SocialIconWrapper>
          <SocialIcon>
            <Icon iconId={'react'}></Icon>
          </SocialIcon>
        </SocialIconWrapper>
      </SocialIconsList>
      <Copyright>©2023 Palkin Mikhail. All rights reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #dc9696;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Email = styled.span``;

const SocialIconsList = styled.ul`
  display: flex;
  padding: 0;
`;

const SocialIconWrapper = styled.li`
  list-style: none;
`;

const SocialIcon = styled.a``;

const Copyright = styled.small``;
