import React from 'react';

function TodoListItem({todo, todo:{title}, onRemoveTodo}){ // todo:{title} 
  return (
    <li>
      {todo.fields.Title}
      <button onClick={()=>onRemoveTodo(todo.id)}>Remove</button>
    </li>
  )
}
export default TodoListItem;