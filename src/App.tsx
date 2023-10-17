import './App.css';
import styled from 'styled-components';
import { Header } from './layuot/header/Header';
import { Main } from './layuot/sections/main/Main';
import React from 'react';
import { Skills } from './layuot/sections/skills/Skills';
import { Works } from './layuot/sections/works/Works';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
