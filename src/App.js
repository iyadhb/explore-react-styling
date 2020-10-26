import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import { redTheme, greenTheme, blueTheme } from './components/Themes'
import NavBar from './components/NavBar'
import Button from './components/Button'
import Content from './components/Content'

function App() {
const [ theme, setTheme ] = useState(redTheme)

const handeTheme = () => {
  if(theme.primaryColor === 'red') {
    setTheme(greenTheme)
  } else if (theme.primaryColor === 'green') {
    setTheme(blueTheme)
  } else if(theme.primaryColor === 'blue') {
    setTheme(redTheme)
  }
}

  return (
    <ThemeProvider theme={theme}>
    <main>
    <NavBar>
    <Button onClick={handeTheme}>Toggle theme</Button>
    
    </NavBar>
    <Content />
    </main>
    </ThemeProvider>
  );
}

export default App;
