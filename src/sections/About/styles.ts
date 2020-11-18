import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 12px;

  > div {
    display: flex;
    flex-direction: column;
    padding: 32px;
    line-break: auto;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 92px;
    line-height: 1;
    font-weight: 900;
  }

  h2 {
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

  div {
    margin-top: 24px;
    max-width: 600px;
  }

  ul {
    margin-top: 16px;
    list-style: none;
    line-height: 3;

    svg {
      color: #1333DF;
      margin-right: 12px;
    }
  }
`;

export const Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    position: relative;
    right: 0;
    max-width: 800px;
    min-width: 300px;
  }
`;
