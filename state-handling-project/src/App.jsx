import React, { useState } from 'react';
import ColorCard from './components/ColorCard';

function App() {
 
  const[color , setColor] = useState('');

  return (
     <div style = {{padding : "20px" , fontFamily:"sans-serif"}}>
          <h2>🌈 React State Handling Demo</h2>
          <ColorCard  color = {color} setColor={setColor} />
          <p>Parent Component: Your Favourite color is : <b> {color || "...."} </b> </p>
     </div>
  );
}

export default App;
