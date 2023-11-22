import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { RiTelegramLine } from '@react-icons/all-files/ri/RiTelegramLine';
import React from 'react';

export const OutlineIconsLinks = () => {
  return (
    <StyledLinks>
      <FlexWrapper alignItems={'center'} gap={'25px'}>
        <IconWrapper href="https://github.com/DoctorFetus" target={'_blank'}>
          <FiGithub size={34} color={'white'} />
        </IconWrapper>
        <IconWrapper href="https://t.me/bvsxtv" target={'_blank'}>
          <RiTelegramLine size={34} color={'white'} />
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
