

import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const[count , Setcount] = useState(0);
  const[total , Settotal] = useState(1);
  //first -> side -effect function
  //second  -> clean up function
  //third -> comma separated deep list


  //variation:1 // runs on every render  

  // useEffect(() => {
  //       alert("I will run on each render")
  // })

  // variations 2:
  // that runs on only first render
  // useEffect(() => {
  //       alert("I will run on only first render");
  // }, [])

  //variation 3:
  // useEffect(() => {
  //     alert("I will run every time when count is updated")
  // }, [count])
  
  //variation 4:
  // multiple dependencies
  // useEffect(() => {
  //     alert("I will run on when count nd total update")
  // }, [count, total])
  
  //variation 5:
   // lets add clean up function
  //  useEffect(() => {
  //    alert("The count is updated")
   
  //    return () => {
  //      alert("count is unmounted from UI")
  //    }
  //  }, [count])
   

  


  function handleClick(){
      Setcount(count+1);
  }
  function handleTotal(){
    Settotal(total+1);
  }
  
  return (
     <div>
        <button onClick={handleClick}>
          Update Count
        </button>
        <br />
        Count is: {count}
        <br />
        <button onClick={handleTotal}>
          Update Total
        </button>
        <br />
        
         Total is: {total}
     </div>
  )
}

export default App
