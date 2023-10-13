import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from './skill/Skill';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper>
        <Skill title={'React'} />
        <Skill title={'React'} />
        <Skill title={'React'} />
        <Skill title={'React'} />
        <Skill title={'React'} />
        <Skill title={'React'} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  background-color: #e7a8a8;
`;

const SectionTitle = styled.h2``;
