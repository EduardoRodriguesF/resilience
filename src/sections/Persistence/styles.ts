import styled from 'styled-components';

import backgroundImg from '../../assets/celeste.gif';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 800px;
`;

export const Content = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  color: #fff;
  padding: 48px;
  
  h2, h3 {
    text-align: center;
  }

  h2 { 
    font-size: 52px;
  }

  h3 {
    font-size: 46px;
    margin-top: 42px;
  }

  strong {
    color: #4863f7;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    div {
      flex: 1 1 500px;
      text-align: center;
      margin: 24px;
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  div.mask {
    background-color: #000;
  }
  
  div.background {
    background: url(${backgroundImg}) no-repeat center;
    background-size: auto 150%;
    opacity: 0.2;
  }
`;