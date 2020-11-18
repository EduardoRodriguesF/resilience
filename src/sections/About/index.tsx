import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { Container, Content} from './styles';

const About: React.FC = () => {
  const skills = [
    'Autoconfiança',
    'Flexibilidade',
    'Persistência',
  ];

  return (
    <Container>
      <Content>
        <h1>RESILIÊNCIA</h1>
        <hr/>
        <h2>A incrível <strong>arte</strong> de se f*der e continuar de pé.</h2>
        <div>
          <p>O comportamento resiliente é resultado a partir de várias habilidades, mas essas são as três principais para ter uma atitude resiliente:</p>
          <ul>
            {skills.map(skill => <li><FaCheck size={16} />{skill}</li>)}
          </ul>
          <p>Você tem o que é preciso pra se <strong>destacar</strong> no mercado?</p>
        </div>
      </Content>
    </Container>
  );
}

export default About;
