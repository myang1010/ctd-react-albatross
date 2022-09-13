import React from 'react';
import style from './TodoListItem.module.css';

function TodoListItem({todo, todo:{title}, onRemoveTodo}){
  return (
    <li className={style.ListItem}>
      {todo.fields.Title}
      <button onClick={()=>onRemoveTodo(todo.id)}>Remove</button>
    </li>
  )
}
export default TodoListItem;