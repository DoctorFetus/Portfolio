import styled from 'styled-components';
import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './Project';

import socialNetwork from '../../../assets/images/projects/social-network.png';
import todo2 from '../../../assets/images/projects/todo2.0.png';
import todolist from '../../../assets/images/projects/todo.png';
import counter_new from './../../../assets/images/projects/counter_new.png';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>Works</SectionTitle>
      <Container>
        <FlexWrapper wrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
          <Project
            title={'Todolist'}
            img={todolist}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis commodi eaque odit quaerat quibusdam saepe sed, tenetur vitae. Dolorem eius illo perferendis quis soluta? Doloremque expedita harum inventore maiores maxime nemo numquam quas quibusdam, rem? Natus nemo quae quod!'
            }
          />
          <Project
            title={'Social-network'}
            img={socialNetwork}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis commodi eaque odit quaerat quibusdam saepe sed, tenetur vitae. Dolorem eius illo perferendis quis soluta? Doloremque expedita harum inventore maiores maxime nemo numquam quas quibusdam, rem? Natus nemo quae quod!'
            }
          />
          <Project
            title={'Social-network'}
            img={todo2}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis commodi eaque odit quaerat quibusdam saepe sed, tenetur vitae. Dolorem eius illo perferendis quis soluta? Doloremque expedita harum inventore maiores maxime nemo numquam quas quibusdam, rem? Natus nemo quae quod!'
            }
          />
          <Project
            title={'Counter'}
            img={counter_new}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis commodi eaque odit quaerat quibusdam saepe sed, tenetur vitae. Dolorem eius illo perferendis quis soluta? Doloremque expedita harum inventore maiores maxime nemo numquam quas quibusdam, rem? Natus nemo quae quod!'
            }
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  background-color: ${theme.colors.light};
  min-height: 700px;
`;
