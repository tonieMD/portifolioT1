// src/components/Nav.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #1c1c1c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavLogo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f0f0f0;
  text-decoration: none;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: ${(props) => (props.open ? '0' : '-100%')};
    width: 100%;
    background-color: #1c1c1c;
    transition: left 0.3s ease;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: ${(props) => (props.active ? '#007bff' : '#f0f0f0')};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #007bff;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 2rem;
  color: #f0f0f0;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100; // Adjust based on your navbar height

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  const handleClick = (e, section) => {
    e.preventDefault();
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the menu when an item is clicked
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavContainer>
      <NavLogo href="#">MyPortfolio</NavLogo>
      <HamburgerIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <NavList open={isOpen}>
        <NavItem>
          <NavLink
            href="#hero"
            active={activeSection === 'hero'}
            onClick={(e) => handleClick(e, 'hero')}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#about"
            active={activeSection === 'about'}
            onClick={(e) => handleClick(e, 'about')}
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#journey"
            active={activeSection === 'journey'}
            onClick={(e) => handleClick(e, 'journey')}
          >
            Journey
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#projects"
            active={activeSection === 'projects'}
            onClick={(e) => handleClick(e, 'projects')}
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#contact"
            active={activeSection === 'contact'}
            onClick={(e) => handleClick(e, 'contact')}
          >
            Contact
          </NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Nav;


