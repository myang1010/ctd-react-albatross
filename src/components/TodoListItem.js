import PropTypes from 'prop-types';
import React from 'react';
import style from './TodoListItem.module.css';

function TodoListItem({todo, onRemoveTodo}){
  return (
    <>
      <li width='50%'>{todo.fields.Title}
        <button
          type="button" 
          onClick={()=>onRemoveTodo(todo)}
        >
          Remove
        </button>
      </li>
    </>
  )
}

TodoListItem.prototype = {
  todo:PropTypes.object,
  onRemoveTodo: PropTypes.func
}
export default TodoListItem;