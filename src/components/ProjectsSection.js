// src/components/ProjectsSection.js
import React from 'react';
import styled from 'styled-components';
import { FaClinicMedical, FaResearchgate, FaChild, FaHandsHelping, FaRobot, FaChartLine, FaBlog } from 'react-icons/fa';

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  position: relative;

  &::after {
    content: '';
    width: 50%;
    height: 2px;
    background-color: #333;
    display: block;
    margin: 0.5rem auto 0;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 15px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1), -4px -4px 20px rgba(255, 255, 255, 0.7);
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 8px 8px 40px rgba(0, 0, 0, 0.15), -8px -8px 40px rgba(255, 255, 255, 0.7);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(0, 123, 255, 0.1);
    transition: width 0.3s ease;
  }

  &:hover:before {
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: #0056b3;
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const ProjectsSection = () => (
  <ProjectsContainer id="projects">
    <ProjectsTitle>My Projects</ProjectsTitle>
    <ProjectsGrid>
      <ProjectCard>
        <IconWrapper><FaClinicMedical /></IconWrapper>
        <ProjectTitle>Afya Check Health Camp</ProjectTitle>
        <ProjectDescription>
          Organized and conducted health camps focused on non-communicable disease awareness and screenings. Played a key role in clinical examinations, education, and starting patients on medication.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <IconWrapper><FaResearchgate /></IconWrapper>
        <ProjectTitle>Prevalence of Pediatric CSOM and Hearing Loss</ProjectTitle>
        <ProjectDescription>
          Conducted research on chronic suppurative otitis media (CSOM) and its impact on hearing loss among primary school students. Presented findings that highlight the importance of early intervention.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <IconWrapper><FaChild /></IconWrapper>
        <ProjectTitle>Pediatric Health Education Initiative</ProjectTitle>
        <ProjectDescription>
          Developed educational materials to increase patient engagement and awareness in pediatric health, leading to a significant improvement in patient outcomes.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <IconWrapper><FaHandsHelping /></IconWrapper>
        <ProjectTitle>IRIS Program Volunteer Work</ProjectTitle>
        <ProjectDescription>
          Provided reproductive health education and basic needs to children in orphanages. Made a positive impact on community health and personal growth through service.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <IconWrapper><FaRobot /></IconWrapper>
        <ProjectTitle>Healthcare Chatbot Development</ProjectTitle>
        <ProjectDescription>
          Developed a healthcare chatbot using artificial intelligence to improve patient interaction and care. Utilized advanced AI algorithms to create an efficient and user-friendly tool.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <IconWrapper><FaChartLine /></IconWrapper>
        <ProjectTitle>Predictive Analytics for Disease Prevention</ProjectTitle>
        <ProjectDescription>
          Applied data science techniques to predict disease outbreaks and improve patient care. Implemented predictive models that significantly enhanced healthcare outcomes.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <IconWrapper><FaBlog /></IconWrapper>
        <ProjectTitle>HealthTech Insights Blog</ProjectTitle>
        <ProjectDescription>
          Authored a blog on health and technology, sharing insights on how technology can prevent diseases and promote healthier lifestyles. Reached a broad audience with engaging content.
        </ProjectDescription>
      </ProjectCard>
    </ProjectsGrid>
  </ProjectsContainer>
);

export default ProjectsSection;


