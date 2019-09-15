import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Theme} from './styles/theme';

import GlobalStyle from './styles';
import ConfigureRoundsPage from './pages/configure-rounds-page';
import StartRoundCount from './pages/start-round-count';

const App: React.FC = () => {
  return (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyle />
      <ConfigureRoundsPage />
      <StartRoundCount />
    </>
  </ThemeProvider>
  );
}

export default App;
