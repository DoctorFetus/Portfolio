import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap={'wrap'} justifyContent={'space-between'}>
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
  text-align: center;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
