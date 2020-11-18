import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi';

import FlexCard from '../../components/FlexCard';

import { Container, Content } from './styles';

const Flexibility: React.FC = () => {
    return (
      <Container>
        <h2>FLEXIBILIDADE</h2>
        <p>Aonde essa habilidade se aplica?</p>
        <Content>
          <FlexCard
            title="Adversidades"
            description="Uma pessoa flexível se adapta a diversas situações, atividades e ambientes diferentes com muita facilidade."
          />
          <FlexCard
            title="Ambiente profissional"
            description="Ser flexível é certeza de um bom relacionamento interpessoal dentro da empresa."
          />
          <FlexCard
            title="Mercado de trabalho"
            description="Constante processo de mudanças. Mudanças estas que acontecem para que haja evolução contínua."
          />
          <FlexCard
            title="Clientes"
            description="Sempre em busca de soluções inovadoras e criativas para sanar suas mais diversas necessidades."
          />
          <FlexCard
            title="Flexbox"
            description="Seja como uma, adapte-se de acordo com a circunstãncia para manter-se responsivo!"
          />
          <span>Redimensione<FiArrowDownRight size={20} /></span>
        </Content>
      </Container>
    );
}

export default Flexibility;
