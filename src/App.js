import React from 'react';
import './App.css';
import StyledHeader from './components/StyledHeader'
import PropsButton from './components/PropsButton'

function App() {
  return (
    <div>
    <StyledHeader title="Hello from app.js" />
    <PropsButton color='blue'>Button number one</PropsButton>
    <PropsButton color='red'>Button number two</PropsButton>
    <PropsButton>Button number three</PropsButton>
    
    </div>
  );
}

export default App;
