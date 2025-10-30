import { useState } from "react";
import Item from "./Item";
import { act } from "react";

const Fooditems = ({items})=>{

     let [activeItems , SetActiveItems] = useState([]);

     let handleButton2 = (items , event) => {

          let newItems = [...activeItems,items];
          SetActiveItems(newItems);

     }

          return (

            <ul className="list-group">
              {items.map(items =>(
                <Item key ={items} fooditem ={items} bought ={activeItems.includes(items)} handleButton={
                  (event) => handleButton2(items , event)
                 }></Item>
              ))}
              </ul>

          );
};

export default Fooditems

