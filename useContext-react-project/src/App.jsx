import { createContext, useState } from 'react'

import './App.css'
import ChildA from './components/ChildA';

// step1: crate a context
// const UserContext = createContext();
//step 2: wrap all the child inside the provider
//step 3: pss value
// step 4: consumer ke andar jaake consume kr lo

const ThemeContext = createContext();

function App() {
  // const[user , setUser] = useState({name:"Love"});
   const[theme , setTheme ] = useState('light');

  return (

      <ThemeContext.Provider value = {{theme,setTheme}}>

      <div id = 'container' style = {{backgroundColor: theme === 'light' ? "beige" : "black"}}>
          <ChildA/>
      </div>

      </ThemeContext.Provider>
   
  //  <>
  //      <UserContext.Provider value = {user}>
  //            <ChildA/>
  //      </UserContext.Provider>
     
  // </>
  )
}

export default App
export{ThemeContext}