import React from 'react'
import '../Components/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'


const Header = () => {
  return (
    <div className='container'>
         
        <h1>Job Tracker Pro</h1>
        <FontAwesomeIcon icon= {faMoon} className="cursor-pointer" size='3x' style={{'padding-right': '90px' , 'padding-top' : '20px','color':'white'}} />
    </div>
  )
}

export default Header