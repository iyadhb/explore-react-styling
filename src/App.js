import React from 'react';
import './App.css';
import { BasicInput, AwsomeInput } from './components/Inputs'




function App() {
  return (
    <div>
   <BasicInput />
   <AwsomeInput />
   <AwsomeInput type='email' placeholder='enter your email' />
    
    </div>
  );
}

export default App;
