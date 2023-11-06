import './App.css';
import { Header } from './layuot/header/Header';
import { Main } from './layuot/sections/main/Main';
import React from 'react';
import { Skills } from './layuot/sections/skills/Skills';
import { Works } from './layuot/sections/works/Works';
import { Contacts } from './layuot/sections/contacts/Contacts';
import { Footer } from './layuot/footer/Footer';
import { Particle } from './components/particles/Particle';

function App() {
  return (
    <div className="App">
      <Particle />
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
