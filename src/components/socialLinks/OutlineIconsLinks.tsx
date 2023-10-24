import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin';
import { RiTelegramLine } from '@react-icons/all-files/ri/RiTelegramLine';
import React from 'react';
import { SiCodewars } from '@react-icons/all-files/si/SiCodewars';

export const OutlineIconsLinks = () => {
  return (
    <StyledLinks>
      <FlexWrapper alignItems={'center'} gap={'25px'}>
        <IconWrapper href="https://github.com/DoctorFetus" target={'_blank'}>
          <FiGithub size={34} color={'white'} />
        </IconWrapper>
        <IconWrapper href="https://www.linkedin.com/in/mikhail-palkin-a66b42257/" target={'_blank'}>
          <AiOutlineLinkedin size={34} color={'white'} />
        </IconWrapper>
        <IconWrapper href="https://t.me/bvsxtv" target={'_blank'}>
          <RiTelegramLine size={34} color={'white'} />
        </IconWrapper>
        <IconWrapper href="https://www.codewars.com/users/mdpalkin" target={'_blank'}>
          <SiCodewars size={34} color={'white'} />
        </IconWrapper>
      </FlexWrapper>
    </StyledLinks>
  );
};

const StyledLinks = styled.div``;

const IconWrapper = styled.a`
  &:hover {
    transform: translateY(-4px);
  }
`;
