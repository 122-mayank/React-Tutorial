import { useState } from 'react';
import styles from './App.module.css'
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {

 const [calval , setcalval] = useState(" ");
const onButtonClick =(buttonText)=>{
     if(buttonText === 'C'){
           setcalval("");
     }
     else if(buttonText === '='){
          const result = eval(calval);
          setcalval(result);
     }

     else{

      const newValue = calval + buttonText;
      setcalval(newValue);
     }
}


  return (
    <>
         <div className={styles.Calculator}>
          <Display calval = {calval}></Display>
         <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
         </div>
    </>
  )
}

export default App
