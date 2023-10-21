import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap={'wrap'} justifyContent={'space-between'}>
          <Skill title={'Unit tests'} icon={'unitTests'} />
          <Skill title={'Storybook'} icon={'storybook'} />
          <Skill title={'TypeScript'} icon={'typescript'} />
          <Skill title={'Redux Toolkit'} icon={'redux'} />
          <Skill title={'Material UI'} icon={'materialui'} />
          <Skill title={'React'} />
          <Skill title={'Styled Components'} icon={'styledComponents'} />
          <Skill title={'Rest API'} icon={'restApi'} />
          <Skill title={'WebSocket'} icon={'websocket'} />
          <Skill title={'React Hook Form'} icon={'hookForm'} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  background-color: ${theme.colors.light};
  text-align: center;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
