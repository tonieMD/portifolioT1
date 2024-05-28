// src/components/JourneySection.js
import React from 'react';
import styled from 'styled-components';
import { FaSchool, FaUniversity, FaLaptopCode, FaMedkit, FaStethoscope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const JourneyContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1c1c1c;
  color: #fff;
`;

const JourneyTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #f0f0f0;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    width: 50%;
    height: 2px;
    background-color: #f0f0f0;
    display: block;
    margin: 0.5rem auto 0;
  }
`;

const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 600px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #f0f0f0;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin: 2rem 0;
  width: 50%;
  padding-left: 2rem;
  text-align: left;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease-in-out;

  &:nth-child(even) {
    left: 50%;
    padding-left: 0;
    padding-right: 2rem;
    text-align: right;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -6px;
    width: 12px;
    height: 12px;
    background: #007bff;
    border-radius: 50%;
    z-index: 1;

    &:nth-child(even) {
      left: auto;
      right: -6px;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007bff;
  transition: transform 0.3s ease;

  ${TimelineItem}:hover & {
    transform: scale(1.1);
  }
`;

const ItemContent = styled.div`
  background: #333;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  ${TimelineItem}:hover & {
    background-color: #444;
  }
`;

const SectionTitle = styled.h3`
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const SectionDescription = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  color: #d1d1d1;
  line-height: 1.6;
`;

const JourneySection = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });

  return (
    <JourneyContainer id="journey">
      <JourneyTitle>My Journey</JourneyTitle>
      <Timeline>
        <TimelineItem ref={ref1} className={inView1 ? 'visible' : ''}>
          <IconWrapper>
            <FaSchool />
          </IconWrapper>
          <ItemContent>
            <SectionTitle>2011-2014: St. Mary's Ulete</SectionTitle>
            <SectionDescription>
              During my four years at St. Mary's Ulete for my O-Level studies, I learned the power of determination and focus. This period was pivotal in shaping my academic and personal growth. I made lifelong friends and established a strong reputation for myself. One of my proudest moments was finishing third nationally in Chemistry during my finals, a testament to my hard work and dedication.
            </SectionDescription>
          </ItemContent>
        </TimelineItem>
        <TimelineItem ref={ref2} className={inView2 ? 'visible' : ''}>
          <IconWrapper>
            <FaUniversity />
          </IconWrapper>
          <ItemContent>
            <SectionTitle>2015-2017: Mzumbe Secondary School</SectionTitle>
            <SectionDescription>
              Mzumbe Secondary School, with its motto of determination, molded me into a resilient individual. Over these two years, I excelled in Physics, Chemistry, and Biology, finishing as one of the top students in my class. This achievement led to my selection for the prestigious medical school at Muhimbili University, marking the next significant step in my academic journey.
            </SectionDescription>
          </ItemContent>
        </TimelineItem>
        <TimelineItem ref={ref3} className={inView3 ? 'visible' : ''}>
          <IconWrapper>
            <FaLaptopCode />
          </IconWrapper>
          <ItemContent>
            <SectionTitle>2017-2022: Muhimbili University of Health and Allied Sciences</SectionTitle>
            <SectionDescription>
              My time at Muhimbili University was filled with remarkable experiences and achievements. As a first-year student, I was part of a historic team that became the only first-year students to win the university competition, emerging as the top scorer. This victory was a significant milestone in my academic career. In 2019, during my second year, a new chapter began as I was introduced to coding by my friends. This sparked a new passion, and I enrolled in the Andela Scholarship program. This experience not only broadened my skills but also opened up new opportunities in the field of technology.
            </SectionDescription>
          </ItemContent>
        </TimelineItem>
        <TimelineItem ref={ref4} className={inView4 ? 'visible' : ''}>
          <IconWrapper>
            <FaMedkit />
          </IconWrapper>
          <ItemContent>
            <SectionTitle>2022-2023: Medical Intern at Muhimbili National Hospital</SectionTitle>
            <SectionDescription>
              During my medical internship at Muhimbili National Hospital, I gained comprehensive clinical exposure across diverse specialties, including Pediatrics, Surgery, and Obstetrics and Gynecology. Engaging in direct patient care, assisting senior practitioners in surgeries, diagnostics, and intricate medical procedures was both challenging and rewarding. This period was pivotal in shaping my clinical skills and deepening my understanding of patient-centered care.
            </SectionDescription>
          </ItemContent>
        </TimelineItem>
        <TimelineItem ref={ref5} className={inView5 ? 'visible' : ''}>
          <IconWrapper>
            <FaStethoscope />
          </IconWrapper>
          <ItemContent>
            <SectionTitle>2024-Present: General Practitioner at Care Plus Hospital</SectionTitle>
            <SectionDescription>
              As a General Practitioner at Care Plus Hospital, I dedicated a significant portion of my practice to pediatric care. This role allowed me to manage both acute and chronic conditions, advocating for preventive health measures. One of my proudest achievements was developing pediatric health education materials, which led to a 20% increase in patient engagement. This experience reinforced my belief in the power of education and preventive care in improving health outcomes.
            </SectionDescription>
          </ItemContent>
        </TimelineItem>
      </Timeline>
    </JourneyContainer>
  );
};

export default JourneySection;







