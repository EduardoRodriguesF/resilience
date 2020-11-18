import styled from 'styled-components';
import { shade } from 'polished';

import confidenceImg from '../../assets/confidence.jpeg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    flex: 1 1;
  }
`;

export const Content = styled.div`
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 52px;
    font-weight: 400;
    color: #1333DF;

    span {
      font-family: Poppins, sans-serif;
      color: #000;
      font-weight: 800;
    }
  }

  p {
    text-align: center;
  }

  ul {
    margin-top: 24px;
    font-size: 24px;
    line-height: 2;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      svg {
        color: #1333DF;
        margin-right: 12px;
      }
    }
  }

  a {
    text-decoration: none;
    margin-top: 12px;
    font-size: 24px;
    color: #1333DF;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.4, '#1333DF')};
    }
  }
`;

export const Background = styled.div`
  display: flex;
  width: 40%;
  height: 600px;
  background: linear-gradient(to right, rgba(230, 231, 238, 0) 50%, rgba(230, 231, 238, 1)), url(${confidenceImg}) no-repeat left top;
  background-size: 100%;
`;
