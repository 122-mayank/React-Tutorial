import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bharatheading from './components/bharatheading'
import Bharatslogan from './components/bharatslogan'
import Bharattime from './components/bharattime'

function App() {


  return (
    <>
           <Bharatheading></Bharatheading>
            <Bharatslogan></Bharatslogan>
            <Bharattime></Bharattime>
    </>
  )
}

export default App
