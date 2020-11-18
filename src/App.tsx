import React, { useEffect, useState } from 'react';
import { RiPlantLine } from 'react-icons/ri';

import Footer from './components/Footer';

import About from './sections/About';
import Flexibility from './sections/Flexibility'
import Selfcontrol from './sections/Selfcontrol';

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
          <button onClick={() => newSection(<Selfcontrol />)}>Autocontrole</button>
          <button>Flexibilidade</button>
          <button>Persistência</button>
          <button>Otimismo</button>
          <button>Empatia</button>
      </nav>
      <Content>
        <About />
        <Flexibility />
      </Content>
      <Footer />
      <GlobalStyle />
    </Container>
  );
}

export default App;
