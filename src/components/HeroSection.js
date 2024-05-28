// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/background.webp');
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #fff;
  padding: 0 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); // Overlay effect
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled.p`
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <HeroContent>
        <HeroTitle>Hey, I'm Rashid!</HeroTitle>
        <HeroSubtitle>
          Welcome to my personal space where I share my journey in healthcare and tech. Dive into my stories, insights, and passions.
        </HeroSubtitle>
        <HeroButton href="https://medium.com/@rashtonyhag" target="_blank" rel="noopener noreferrer">
          Check Out My Blog
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;



