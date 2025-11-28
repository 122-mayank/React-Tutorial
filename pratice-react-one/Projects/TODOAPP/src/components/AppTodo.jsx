import { useState } from 'react';
import style from './AppTodo.module.css';

function AppTodo({handletask}){

     const[task , setTask] = useState([]);
     const[date , setDate] = useState([]);

     const handlesubmit = ()=>{
         if (task.trim() === "" || date.trim() === "") {
      alert("Please enter both task & date");
      return;
    }
    console.log(task,date);

    handletask({ task, date });

    // Clear input after submit
    setTask("");
    setDate("");

}

     return <>
       <div className={style.container}>
        <input type="text" className={style.inptxt} placeholder="Enter the task" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <input type="date" className={style.date} value ={date} onChange={(e)=>{
                     setDate(e.target.value);
            }}/>
            <button id={style.btn} onClick={handlesubmit}>ADD</button>
       </div>

     </>



}

export default AppTodo