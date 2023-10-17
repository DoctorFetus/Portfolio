import './App.css';
import styled from 'styled-components';
import { Header } from './layuot/header/Header';
import { Main } from './layuot/sections/main/Main';
import React from 'react';
import { Skills } from './layuot/sections/skills/Skills';
import { Works } from './layuot/sections/works/Works';
import { Contacts } from './layuot/sections/contacts/Contacts';
import { Footer } from './layuot/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
