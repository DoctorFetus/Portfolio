import styled from 'styled-components';
import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './Project';

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>Works</SectionTitle>
      <FlexWrapper wrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
        <Project title={'Social-network'} />
        <Project title={'Social-network'} />
        <Project title={'Social-network'} />
        <Project title={'Social-network'} />
        <Project title={'Social-network'} />
        <Project title={'Social-network'} />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  background-color: #d8f3d0;
  min-height: 700px;
`;
