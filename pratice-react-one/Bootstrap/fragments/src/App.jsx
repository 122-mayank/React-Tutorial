import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditmes";
import ErrorMessage from "./components/ErrorMessage";
import './App.css';
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {

  // let fooditems =    [];
  // let fooditems = ['Pulses','Green vegetables','Milk','Sprouts','Dry fruits'];
  // let [textToShow ,setTextState] = useState();


  // console.log(`Current value of textState: ${textToShow}`);

  let [fooditems , setFoodItems] = useState([]);

  const handleChange = (event)=>{
    if(event.key === "Enter"){
      let newFooditem = event.target.value;
      event.target.value = "";
      let newItems = [...fooditems,newFooditem];
      setFoodItems(newItems);
      console.log(newFooditem);
    }
  }
  // if(fooditems.length == 0){
  //     return <h3>I am still hungry.</h3>
  // }

  return <>
     <h1 className="food-heading">Healthy Food</h1>

       <FoodInput handleChange={handleChange}></FoodInput>
         <ErrorMessage items ={fooditems}></ErrorMessage>
     <Fooditems items ={fooditems}></Fooditems>


  {/* <li class="list-group-item">Green vegetables</li>
  <li class="list-group-item">Milk</li>
  <li class="list-group-item">Sprouts</li>
  <li class="list-group-item">Dry fruits</li> */}
</>

}

export default App
