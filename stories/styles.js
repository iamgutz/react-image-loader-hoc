import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ProstoOne';
    src: url('/fonts/ProstoOne-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'ProstoOne', sans-serif;
  }
  #root {
    height: 100%;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: 2rem;
  width: 100%;
  text-align: center;
  background: #fff;
  margin: 0 0 2rem 0;
  padding: 1.5rem 0;
  color: #666666;
  border-bottom: 1px solid #ccc;
`;
