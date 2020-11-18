import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { Container, Left, Right } from './styles';
import backgroundImg from '../../assets/resilience.jpg'

const About: React.FC = () => {
  const skills = [
    'Autocontrole',
    'Flexibilidade',
    'Persistência'
  ];

  return (
    <Container>
      <Left>
        <h1>RESILIÊNCIA</h1>
        <hr/>
        <h2>A incrível <strong>arte</strong> de se f*der e continuar de pé.</h2>
        <div>
          <p>O pensar de modo estratégico, a partir de <strong>oito habilidades</strong>, resulta no comportamento resiliente.</p>
          <ul>
            {skills.map(skill => <li><FaCheck size={16} />{skill}</li>)}
          </ul>
        </div>
      </Left>
    </Container>
  );
}

export default About;
