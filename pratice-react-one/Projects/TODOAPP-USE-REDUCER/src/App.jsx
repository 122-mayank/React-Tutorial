import { useState, useReducer, use } from 'react'
import AppTodo from './components/AppTodo';
import "./App.css";
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import { Todostore } from './store/todostore';

const reducer = (currtodoitems,action)=>{


      let newtodoItems = currtodoitems;
      if(action.type === 'NEW_ITEM'){

          newtodoItems =[
               ...currtodoitems,{name:action.payload.task , date: action.payload.date}
          ];

      }
      else if(action.type === 'DELETE_ITEM'){
           newtodoItems = currtodoitems.filter((item) => item.task !== action.payload.taskToDelete)
      }
      return newtodoItems;
}

function App() {

//    const[todoitems, setTodoitems] = useState([]);
   const[todoitems , dispatch]  = useReducer(reducer,[]);


    const handletask = ({task, date})=>{

           const newItemaction = {
               type:"NEW_ITEM",
               payload:{
                      task,
                      date,
               }
           };
      dispatch(newItemaction);
    };

   const handledelete = (taskToDelete) => {

     const deleteaction ={
             type:"DELETE_ITEM",
             payload:{
                 taskToDelete
             }
     };
     dispatch(deleteaction);
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
