import { useState, useRef } from 'react'
import AppTodo from './components/AppTodo';
import "./App.css";
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import { Todostore } from './store/todostore';

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
          <Todostore.Provider value={{todoitems ,handletask , handledelete}}>
           <h1>TODO APP</h1>
           <AppTodo></AppTodo>
           <WelcomeMessage ></WelcomeMessage>
           <TodoItems ></TodoItems>
           </Todostore.Provider>
      </>
  );
}

export default App;
