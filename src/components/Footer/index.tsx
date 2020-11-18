import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <a href="https://github.com/EduardoRodriguesF/resilience" target="blank">
        <AiFillGithub size={32} />
      </a>
      <a href="https://www.linkedin.com/in/eduardo-rodrigues-4b3624190/" target="blank">
        <AiFillLinkedin size={32} />
      </a>
    </Container>
  )
}

export default Footer;
