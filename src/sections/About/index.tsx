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
        <div>
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
        </div>
        <div className="text">
          <p>
            O ano de 2020 nos provou que a resiliência é a soft skill mais importante para o mercado. São poucos aqueles que conseguem se adaptar a dificuldade de arrumar emprego e de trabalhar remotamente, preso dentro de casa sem poder ver aqueles que amam. <br /> 
            Não podemos falar de <strong>resiliência</strong> sem falar dessas três habilidades: <br /><br />
            A <strong>autoconfiança</strong> nos permite iniciar um comportamento resiliente; <br /><br />
            Ser <strong>flexível</strong> nos dará margem para adaptação e não cair diante das drásticas mudanças<br /><br />
            <strong>Persistência</strong> é o que nos faz conseguir levantar mesmo depois de tomar porrada!
          </p>
        </div>
      </Content>
    </Container>
  );
}

export default About;
