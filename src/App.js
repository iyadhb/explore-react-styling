import React from 'react';
import './App.css';
import StyledHeader from './components/StyledHeader'
import {DangerButton, SuccessButton} from './components/PropsButton'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

* {
  margin: 0;
  box-sizing: border-box;
}
`


function App() {
  return (
    <div>
    <GlobalStyle />

    <StyledHeader title="Hello from app.js" />
    <DangerButton big>danger button</DangerButton>
    <SuccessButton>success button</SuccessButton>
    
    </div>
  );
}

export default App;
