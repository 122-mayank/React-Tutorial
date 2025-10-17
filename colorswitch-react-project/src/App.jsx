import { useState } from 'react'
import './App.css'
import Colorswitch from './components/Colorswitch'

function App() {
  const[count , SetCount] = useState(0);
  const[color , SetColor] = useState('rgb(255 , 255 , 255)');
 
  function handleCount(){
      SetCount(count => count + 1 );
  }

  function getrandomLightColor(){
   let r = 150 + Math.round(100 * Math.random());
   let g = 150 + Math.round(100 * Math.random());
   let b = 150 + Math.round(100 * Math.random());

   return `rgb(${r} , ${g} , ${b})`;

  }

  function getColor(){
    let r = 100 + Math.round(100 * Math.random());
   let g = 100 + Math.round(100 * Math.random());
   let b = 80 + Math.round(100 * Math.random());
 
    return `rgb(${r} , ${g} , ${b})`;

  }

   function handleChangeColor(){
    let newColor = getrandomLightColor();
    let newColor2 = getColor();
    document.body.style.backgroundColor = newColor;
    SetColor(newColor2);
   }


  return (
     <div style={{height:'100%' , width:'100%' }} onClick={handleCount}>
       <Colorswitch onChangeColor={handleChangeColor} buttonColor={color}/>
       <br />
       <br />
       <h2> Clicks on the page : {count}</h2>
     </div>
  )
}

export default App
