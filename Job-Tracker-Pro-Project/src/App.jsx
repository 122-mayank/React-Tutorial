import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header from './Components/Header'
import Application from './Components/Application'
import Main from './Components/Main'
function App() {

  return (
     <div>
           <Header/>
           <Application/>
           <Main/>
     </div>
      
  )
}

export default App
