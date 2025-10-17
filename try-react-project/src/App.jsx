import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import List from './Components/List'
import Counter from './Components/Counter'
import Wrapper from './Components/Wrapper'
import Card from './Components/Card'

import Incrementer from './Components/Incrementer'
import Decrementer from './Components/Decrementer'

function App() {
  
  const[count , setCount] = useState(0);

  return (


     <div style = {{
      display:"flex", flexDirection:"row" , justifyContent:"space-around"
          
     }}>
          <Incrementer count = {count} setCount = {setCount}/>
          <Decrementer count = {count} setCount = {setCount} />
     </div>









      // <div>
              
      //       <Card>
      //   <h2>🌼 Radha Krishna</h2>
      //   <p>Jai Shri Krishna! Experience the divine love and bliss.</p>
      // </Card>

      // <Card>
      //   <img 
      //     src="https://i.pinimg.com/736x/bb/82/91/bb82914b62196bfe61e4d93d135865c6.jpg" 
      //     alt="Lord Krishna"
      //     style={{ width: "100%", borderRadius: "8px" }}
      //   />
      // </Card>

      // <Card>
      //   <h3>📚 Favorite Spiritual Books</h3>
      //   <ul style={{ textAlign: "left", margin: "0 auto", width: "80%" }}>
      //     <li>Bhagavad Gita</li>
      //     <li>Srimad Bhagavatam</li>
      //     <li>Chaitanya Charitamrita</li>
      //   </ul>
      // </Card>


      // </div>




    //  <div>
    //       <p> Value of Count : {count} </p>
    //       <Counter name = "Click me " independentCount = {setCount} count = {count}/>
    //  </div>




    //  <div style = {{"display" : "flex" , "flex-direction" : "row" , "justify-content" : "space-around"}}>
    //       <Button name = "Like" color = "green" />
    //       <Button name = "Share" color = "blue" />
    //       <Button name = "Subscribe" color = "purple" />
    //       {/* <div>
    //           <List items = {["Radha " , "Krishna " , "Divine "]} />
    //       </div> */}
    //  </div>
  )
}

export default App
