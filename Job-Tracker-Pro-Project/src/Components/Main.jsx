import React from 'react'
import '../Components/Main.css'
import Filter from './Filter'
import Search from './Search'
const Main = () => {
  return (
    <div className='main_container'>
          <Filter/>
          <Search/>
    </div>
  )
}

export default Main