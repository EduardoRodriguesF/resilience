import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 12px 62px;

  h2 {
    font-size: 52px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1333DF;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #1333DF;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-bottom: 16px;

  position: relative;
  min-width: 360px;
  width: 835px;
  max-width: 1291px;
  border-radius: 5px;
  resize: horizontal;
  overflow: auto;

  > div {
    flex: 1 1 300px;
    margin: 12px;
  }

  > span {
    display: flex;
    position: absolute;
    right: 6px;
    bottom: 0;

    svg {
      color: #1333DF;
    }
  }
`;
