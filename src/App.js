import React from 'react';
import './App.css';
import { RedBox, GreenBox } from './components/Boxes'
import {Box} from './components/AnnimatedBox'





function App() {
  return (
    <div>
   <RedBox color='red' />
   <GreenBox color='green' />
   <Box />
    
    </div>
  );
}

export default App;
