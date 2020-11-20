import React from 'react';

import { Container, Content, Background } from './styles';

const Persistence: React.FC = () => {
  return (
    <Container>
      <Content>
        <h2>PERSISTÊNCIA</h2>
        <div>
          <div>
            <p>A vida profissional de qualquer pessoa é repleta de <strong>objetivos</strong>. A vantagem competitiva está justamente na persistência de correr atrás daquilo que se deseja.</p>
          </div>
          <div>
            <p>Semelhante a um jogo, como <strong>Celeste</strong>, você deve se manter firme diante das dificuldades e continuar tentando para atingir seus objetivos.</p>
          </div>
          <div>
            <p>Quer emagrecer? Quer parar de fumar? Quer construir uma casa para morar? Tudo isso só será possível se você trilhar um <strong>caminho embasado na persistência</strong>.</p>
          </div>
        </div>
        <h3>O DIFERENCIAL PARA SEU <strong>SUCESSO</strong> EM QUALQUER ÁREA</h3>
      </Content>
      <Background>
        <div className="mask"></div>
        <div className="background"></div>
      </Background>
    </Container>
  );
}

export default Persistence;