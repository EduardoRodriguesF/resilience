import React from 'react';

import { Container, Content, Background } from './styles';

const Persistence: React.FC = () => {
  return (
    <Container>
      <Content>
        <h2>Persistência</h2>
        <div>
          <div>
            <p>A vida profissional de qualquer pessoa é repleta de objetivos. A vantagem competitiva está justamente na persistência de correr atrás daquilo que se deseja.</p>
          </div>
          <div>
            <p>Semelhante a um jogo, como Celeste, você deve se manter firme diante das dificuldades e continuar tentando para atingir seus objetivos.</p>
          </div>
          <div>
            <p>Quer emagrecer? Quer parar de fumar? Quer construir uma casa para morar? Tudo isso só será possível se você trilhar um caminho embasado na persistência.</p>
          </div>
        </div>
        <h3>PERSISTÊNCIA É O DIFERENCIAL PARA SEU SUCESSO EM QUALQUER ÁREA</h3>
      </Content>
      <Background>
        <div className="mask"></div>
        <div className="background"></div>
      </Background>
    </Container>
  );
}

export default Persistence;