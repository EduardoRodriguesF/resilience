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
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  place-content: center;
  z-index: 1;
  color: #fff;
  padding: 48px;
  
  h2, h3 {
    font-size: 46px;
    text-align: center;
  }

  h3 {
    margin-top: 42px;
  }

  div {
    margin-top: 32px;
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
    background-size: auto 100%;
    opacity: 0.2;
  }
`;