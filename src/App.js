// src/App.js
import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';

const AppContainer = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  background-color: #f9f9f9;
  color: #333;
`;

function App() {
  return (
    <AppContainer>
      <Nav />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <ProjectsSection />
      <ContactForm />
    </AppContainer>
  );
}

export default App;
