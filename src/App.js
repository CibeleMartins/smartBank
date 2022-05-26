import React from 'react';
import Rotas from './routes/index';
import Header from './components/Header/Header';
import {GlobalStyle} from './components/GlobalStyle'

import {ThemeProvider} from 'styled-components';
import {clearTheme, darkTheme} from './components/UI/themes'

function App() {
  return (
    <ThemeProvider theme={clearTheme}>
     
        <GlobalStyle/>
        <Header/>
        <Rotas />
      
    </ThemeProvider>
    
   
  );
}

export default App;