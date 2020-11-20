import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/city.jpg';

export const Container = styled.div`
  display: flex;
  min-height: 800px;
  background: url(${backgroundImg}) no-repeat 0 top;

  > div {
    display: flex;
    flex-direction: column;
    padding: 48px;
    line-break: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row !important; 
  justify-content: space-between;
  color: #fff;
  text-shadow: 0px 2px 5px rgba(0,0,0,0.68);

  @media (max-width: 800px) {
    flex-direction: column !important;
  }

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
    color: #4863f7;
  }

  hr {
    border: none;
    width: 64px;
    height: 6px;
    background: #4863f7;
  }

  div {
    margin-top: 24px;
    max-width: 600px;
    padding: 24px;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    list-style: none;
    line-height: 3;

    li {
      text-align: center;
      flex: 1;
    }

    svg {
      color: #4863f7;
      margin-right: 12px;
    }
  }

  .text {
    display: flex;
    flex: 1;
    justify-content: center;
    text-align: center;
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
