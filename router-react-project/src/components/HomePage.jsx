import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
   
  const navigate = useNavigate();
  function handleClick(){
          
navigate('/about');

  }

  return (
    <div>HomePage
      <br></br>
      <br></br>
      <button onClick={handleClick}>
          Move to about page
      </button>
    </div>
  )
}

export default HomePage