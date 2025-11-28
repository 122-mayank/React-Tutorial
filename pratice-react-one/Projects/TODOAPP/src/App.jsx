import { useState, useRef } from 'react'
import AppTodo from './components/AppTodo';
import "./App.css";
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
function App() {

   const[todoitems, setTodoitems] = useState([]);

    const handletask = ({task, date})=>{

         const newitem = {task , date};
         setTodoitems([...todoitems , newitem]);

    }

   const handledelete = (taskToDelete) => {
    const updatedList = todoitems.filter(item => item.task !== taskToDelete);
    setTodoitems(updatedList);
};

  return (
       <>
           <h1>TODO APP</h1>
           <AppTodo handletask={handletask}></AppTodo>
           <WelcomeMessage todoitems={todoitems}></WelcomeMessage>
           <TodoItems todoitems={todoitems} handledelete ={handledelete} ></TodoItems>
      </>
  );
}

export default App;
