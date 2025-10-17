
import './App.css'
import LoginButton from './components/LoginButton';
import Logout from './components/Logout';
import React, { useState } from 'react';
function App() {
     const[isLoggedIn , setLoggedIn] = useState(false);
      
     if( !isLoggedIn){
        return(
            <LoginButton/>
        )
     }


     return(
        <div>
           <h1>Welcome everyone to Codehelp Web dev Course</h1>
           <div>
            {isLoggedIn && <Logout/>}
           </div>
        </div>
     )
  





  //     return(
  // <div>
  //   {isLoggedIn ? <Logout/> : <LoginButton/>}
  // </div>

  //     )

        
      // if( isLoggedIn){
      //       return (
      //          <Logout/>
      //       )
      // }
      // else{
      //   return(
      //     <LoginButton/>
      //   )
      // }



}

export default App
