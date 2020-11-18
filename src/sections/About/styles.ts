import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  div {
    padding: 32px;
    flex: 1;
  }
`;

export const Left = styled.div`
  h1 {
    font-size: 92px;
    line-height: 1;
    font-weight: 900;
  }

  p {
    font-size: 24px;
    margin-top: 12px;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  hr {
    border: none;
    width: 64px;
    height: 6px;
    background: #1333DF;
  }
`;
