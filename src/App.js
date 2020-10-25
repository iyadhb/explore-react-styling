import React from 'react';
import './App.css';
import Hero from './components/Hero'
import img1 from './images/image-1.jpg'
import img2 from './images/image-2.jpg'
import img3 from './images/image-3.jpg'



function App() {
  return (
    <div>
   <Hero big img={img1}> 
   <h1>Iyad Barakat</h1>
   </Hero>
   <Hero big />
   <Hero img={img2} />
   <Hero img={img3} />
    
    </div>
  );
}

export default App;
