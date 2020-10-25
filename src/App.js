import React from 'react';
import './App.css';
import StyledHeader from './components/StyledHeader'
import PropsButton from './components/PropsButton'

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
    <PropsButton color='blue'>Button number one</PropsButton>
    <PropsButton color='red'>Button number two</PropsButton>
    <PropsButton>Button number three</PropsButton>
    
    </div>
  );
}

export default App;
