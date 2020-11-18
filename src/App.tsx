import React, { useEffect, useState } from 'react';
import { RiPlantLine } from 'react-icons/ri';

import Footer from './components/Footer';

import About from './sections/About';
import Flexibility from './sections/Flexibility'
import Selfconfidence from './sections/Selfconfidence';

import GlobalStyle from './styles/global';
import { Container, Content } from './styles/app';

const App: React.FC = () => {
  const [section, newSection] = useState(<About />);

  return (
    <Container>
      <nav>
          <div>
            <RiPlantLine size={28} />
            <button onClick={() => newSection(<About />)}>Resiliência</button>
          </div>
          <hr />
          <button onClick={() => newSection(<Selfconfidence />)}>Autoconfiança</button>
          <button onClick={() => newSection(<Flexibility />)}>Flexibilidade</button>
          <button>Persistência</button>
          <button>Otimismo</button>
          <button>Empatia</button>
      </nav>
      <Content>
        {section}
      </Content>
      <Footer />
      <GlobalStyle />
    </Container>
  );
}

export default App;
