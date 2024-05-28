// src/components/AboutSection.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1c1c1c;
  color: #fff;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #f0f0f0;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    width: 50%;
    height: 2px;
    background-color: #f0f0f0;
    display: block;
    margin: 0.5rem auto 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 2rem;
  border-radius: 50%;
  overflow: hidden;
  width: 250px;
  height: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Description = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.2rem;
  color: #d1d1d1;
  line-height: 1.6;
  max-width: 600px;
`;

const AboutSection = () => (
  <AboutContainer id="about">
    <AboutTitle>About Me</AboutTitle>
    <ContentWrapper>
      <ImageWrapper>
        <ProfileImage src={`${process.env.PUBLIC_URL}/profileimage.jpg`} alt="Rashid Mbuma" />
      </ImageWrapper>
      <Description>
        <p>Hey there! I'm Rashid Mbuma, and I'm excited to share a bit about myself with you. I'm a Medical Doctor with a big heart for pediatric care. After graduating from Muhimbili University of Health and Allied Sciences in 2022, I dove right into my role as a General Practitioner at Care Plus Hospital in Dar es Salaam, where I get to focus on helping kids stay healthy.</p>
        <p>My journey in healthcare has been quite an adventure. I've worn many hats—intern, volunteer, researcher—and each experience has taught me something new about patient care, medical research, and the power of community health education. I truly believe in the magic of preventive health measures and educating patients to make informed health decisions.</p>
        <p>But it's not all work and no play! When I'm not at the hospital, you'll probably find me on the football field, staying active and having fun. I also love writing about health and technology, sharing insights on how we can prevent diseases and live healthier lives.</p>
      </Description>
    </ContentWrapper>
  </AboutContainer>
);

export default AboutSection;




