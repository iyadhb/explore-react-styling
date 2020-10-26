import React from 'react';
import './App.css';
import Hero from './components/Hero'
import img1 from './images/image-1.jpg'
import img2 from './images/image-2.jpg'
import img3 from './images/image-3.jpg'
import Banner from './components/Banner'
import {DangerButton} from './example/PropsButton'



function App() {
  return (
    <div>
   <Hero big img={img1}> 
   <Banner title="This is my title" color="orange">
   <DangerButton big>Click Me</DangerButton>
   </Banner>
   </Hero>
   <Hero big />
   <Hero img={img2} />
   <Hero img={img3} />
    
    </div>
  );
}

export default App;
