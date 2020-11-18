import React from 'react';

import { Container } from './styles';

interface cardProps {
  title: string;
  description: string;
}

const FlexCard: React.FC<cardProps> = ({ title, description }) => {
    return (
      <Container>
        <h3>{title}</h3>
        <span>{description}</span>
      </Container>
    );
}

export default FlexCard;
