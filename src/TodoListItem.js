import React from 'react';

function TodoListItem({todo, todo:{title}, onRemoveTodo}){
  return (
    <li>
      {title}
      <button onClick={()=>onRemoveTodo(todo.id)}>Remove</button>
    </li>
  )
}
export default TodoListItem;