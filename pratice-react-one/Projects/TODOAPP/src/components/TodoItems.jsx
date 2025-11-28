import styles from './TodoItems.module.css';


function TodoItems({ todoitems ,handledelete}) {
  return (
    <ul className={styles.todo_list}>
      {todoitems.map((item, index) => (
        <li className={styles.todo_items} key={index}>
          <span className={styles.task}>{item.task}</span>
          <span className={styles.date}>{item.date}</span>
          <button className={styles.delete} onClick={() => handledelete(item.task)}
>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;
