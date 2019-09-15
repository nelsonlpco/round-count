import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');

  * {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }

  body, #root {
    font-family: 'Roboto', sans-serifri;
    font-size: 16px;
    font-weight: 400;
    height: 100%;
    color: ${({theme}) => theme.colors.text};
  }

  body {
    background-image: ${({ theme }) => `linear-gradient(${theme.colors.main}, ${theme.colors.mainDark})`};
  }

  @keyframes blink {
    0% { opacity: 0;}
    50% { opacity: 1;}
    100% { opacity: 0;}
  }

  .blink {
    animation: blink 0.7s infinite;
  }
`;
