import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import { redTheme, greenTheme, blueTheme } from './components/Themes'
import NavBar from './components/NavBar'
import Button from './components/Button'






function App() {
  return (
    <ThemeProvider theme={blueTheme}>
    <main>
    <NavBar>
    <Button>Toggle theme</Button>
    
    </NavBar>
    </main>
   
    
    </ThemeProvider>
  );
}

export default App;
