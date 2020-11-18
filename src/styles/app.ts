import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  nav {
    display: flex;
    justify-content: space-between;
    padding: 24px 36px;
    max-width: 1100px;

    div {
      display: flex;
      align-items: center;

      button {
        margin-left: 6px;
      }
    }

    hr {
      min-width: 3px;
      max-height: 100px;
      border: none;
      background: #000;
    }

    button {
      position: relative;
      background: none;
      border: none;
      font-size: 18px;
      font-family: Poppins;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 8px 0;

      &::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        width: 0;
        height: 3px;
        transition: all .4s;
        background-color: #1333DF;
      }
      &:hover::after {
        width: 100%;
        left: 0;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100vw;
  padding: 0 24px;

  div {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;
