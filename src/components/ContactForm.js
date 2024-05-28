// src/components/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaTwitter, FaBlog } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1c1c1c;
  color: #fff;
  text-align: center;
`;

const ContactTitle = styled.h2`
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

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #aaa;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const SocialLink = styled.a`
  color: #007bff;
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'your_service_id', // Replace with your EmailJS service ID
      'your_template_id', // Replace with your EmailJS template ID
      formData,
      'your_user_id' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
    }).catch((error) => {
      console.error('FAILED...', error);
      alert('There was an error sending your message. Please try again later.');
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          />
        </FormGroup>
        <Button type="submit">Send Message</Button>
      </Form>
      <SocialLinks>
        <SocialLink href="https://medium.com/@rashtonyhag" target="_blank" rel="noopener noreferrer">
          <FaBlog />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/rashid-mbuma" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://twitter.com/toniejstz" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialLink>
      </SocialLinks>
    </ContactContainer>
  );
};

export default ContactForm;



