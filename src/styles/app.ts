import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  nav {
    display: flex;
    flex-wrap: wrap;
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
        background-color: #4863f7;
      }
      &:hover::after {
        width: 100%;
        left: 0;
      }

      @media (max-width: 800px) {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100vw;

  div {
    animation: fadeIn .8s backwards ease-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateX(-50%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;
