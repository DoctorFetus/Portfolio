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
              ' Seamlessly connecting to the server through Axios, this task list application utilizes Redux Thunk for all server interactions. It offers user login, and robust error handling for a smooth, server-backed task management experience. All forms are processed using Formik.'
            }
            codeLink={'https://github.com/DoctorFetus/todolist_learn'}
            previewLink={'https://andrey-kuznetsov.github.io/todolist/'}
          />
          <Project
            title={'Social network'}
            img={socialNetwork}
            description={
              'A social network platform featuring server integration, utilizing React Router DOM for routing, offering user registration, full profile customization, and friend management. Additionally, an ongoing development includes a chat system built on WebSocket technology for real-time interactions.'
            }
            codeLink={'https://github.com/DoctorFetus/React-Samurai_way'}
            previewLink={'https://social-network-doctorfetus.vercel.app/profile'}
          />
          <Project
            title={'Nested list'}
            img={todo2}
            description={
              'A nested to-do list built using recursive algorithms with the implementation of all CRUD (Create, Read, Update, Delete) operations, using Redux Toolkit for data processing and storage. Material UI is used for interface development. Has a light and dark theme.'
            }
            codeLink={'https://github.com/DoctorFetus/recursive-shopping-list'}
          />
          <Project
            title={'Counter'}
            img={counter_new}
            description={
              'Built on the standard Redux library, this counter comes with built-in value validation for accurate counting. Crafted with clean, vanilla CSS for a stylish, user-friendly design'
            }
            codeLink={'https://github.com/DoctorFetus/Counter_Maria'}
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  background-color: ${theme.colors.light};
  //min-height: 700px;
  padding-top: 60px;
`;
