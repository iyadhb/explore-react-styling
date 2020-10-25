import React from 'react';
import './App.css';
import {Button, SecondButton} from './components/Buttons'
import Header from './components/Header'

function App() {
  return (
    <div>
    <Header />
    <Button>CLick me</Button>
    <SecondButton>Click me i'm second</SecondButton>
    </div>
  );
}

export default App;
