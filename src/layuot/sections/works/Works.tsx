import styled from 'styled-components';
import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
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
        <Wrapper>
          <Project
            animationDirection={'left'}
            title={'Todolist'}
            img={todolist}
            description={
              ' Seamlessly connecting to the server through Axios, this task list application utilizes Redux Thunk for all server interactions. It offers user login, and robust error handling for a smooth, server-backed task management experience. All forms are processed using Formik.'
            }
            codeLink={'https://github.com/DoctorFetus/todolist_learn'}
            previewLink={'https://andrey-kuznetsov.github.io/todolist/'}
          />
          <Project
            animationDirection={'right'}
            title={'Social network'}
            img={socialNetwork}
            description={
              'A social network platform featuring server integration, utilizing React Router DOM for routing, offering user registration, full profile customization, and friend management. Additionally, an ongoing development includes a chat system built on WebSocket technology for real-time interactions.'
            }
            codeLink={'https://github.com/DoctorFetus/React-Samurai_way'}
            previewLink={'https://social-network-doctorfetus.vercel.app/profile'}
          />
          <Project
            animationDirection={'left'}
            title={'Nested list'}
            img={todo2}
            description={
              'A nested to-do list built using recursive algorithms with the implementation of all CRUD (Create, Read, Update, Delete) operations, using Redux Toolkit for data processing and storage. Material UI is used for interface development. Has a light and dark theme.'
            }
            codeLink={'https://github.com/DoctorFetus/recursive-shopping-list'}
            previewLink={'https://recursive-shopping-list-8ofe.vercel.app/'}
          />
          <Project
            animationDirection={'right'}
            title={'Counter'}
            img={counter_new}
            description={
              'Built on the standard Redux library, this counter comes with built-in value validation for accurate counting. It possesses a easily expandable architecture for the subsequent addition of functionality or specific modifications to the existing one. Crafted with clean, vanilla CSS for a stylish, user-friendly design'
            }
            codeLink={'https://github.com/DoctorFetus/Counter_Maria'}
            previewLink={'https://counter-maria-git-master-doctorfetus.vercel.app/'}
          />
        </Wrapper>
      </Container>
    </StyledWorks>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media ${theme.media.tablet} {
    gap: 76px;
    margin-top: 30px;
  }
`;

const StyledWorks = styled.div`
  background-color: ${theme.colors.light};
  padding: 50px 0;
`;
