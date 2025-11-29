import { useContext } from "react";
import { Todostore } from "../store/todostore";

function WelcomeMessage(){
     const {todoitems} = useContext(Todostore);
     return todoitems.length == 0 && <h1>Enjoy Your Day</h1>
}

export default WelcomeMessage