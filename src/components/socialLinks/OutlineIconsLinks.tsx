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
        <a href="https://github.com/DoctorFetus">
          <FiGithub size={34} color={'white'} />
        </a>
        <a href="https://www.linkedin.com/in/mikhail-palkin-a66b42257/">
          <AiOutlineLinkedin size={34} color={'white'} />
        </a>
        <a href="https://t.me/bvsxtv">
          <RiTelegramLine size={34} color={'white'} />
        </a>
        <a href="https://www.codewars.com/users/mdpalkin">
          <SiCodewars size={34} color={'white'} />
        </a>
      </FlexWrapper>
    </StyledLinks>
  );
};

const StyledLinks = styled.div``;
