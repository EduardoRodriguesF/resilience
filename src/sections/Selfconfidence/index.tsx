import React from 'react';
import { FaCheck, FaExternalLinkAlt } from 'react-icons/fa';

import { Container, Content, Background } from './styles';

const Selfconfidence: React.FC = () => {
    return (
      <Container>
        <Background />
        <Content>
          <h2>AUTO<span>CONFIANÇA</span></h2>
          <p>Existem pelo menos cinco atitudes que podem mudar essa percepção de si mesma. O site americano "Learn Vest", que dá dicas de carreira e finanças para mulheres, recomenda cinco hábitos.</p>
          <ul>
            <li><FaCheck /> Cerque-se de pessoas positivas</li>
            <li><FaCheck /> Tenha organização</li>
            <li><FaCheck /> Faça o que dá prazer</li>
            <li><FaCheck /> Movimente a agenda</li>
            <li><FaCheck /> Ajude, sem esperar nada em troca</li>
          </ul>
          <a target="blank" href="https://gnt.globo.com/bem-estar/noticia/como-aumentar-sua-autoconfianca-cinco-dicas-infaliveis.ghtml"><FaExternalLinkAlt size={16} /> Saiba mais</a>
        </Content>
      </Container>
    );
}

export default Selfconfidence;
